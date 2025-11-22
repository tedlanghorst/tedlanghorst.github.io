// Loads all modal markdown files from the modals/ directory, parses frontmatter, and renders tiles and modals
// Requires: marked.js (for markdown parsing) and js-yaml (for frontmatter parsing)

const MODAL_PATHS = [
  'assets/projects/DL_Q.md',
  'assets/projects/OBS_MS.md',
  'assets/projects/DL_Flux.md',
  'assets/projects/IGEA.md',
  'assets/projects/OBS.md',
  'assets/projects/Clouds.md',
  'assets/projects/Sag.md',
  'assets/projects/REAL.md',
  'assets/projects/CalVal.md'
];

async function loadModalMarkdown(path) {
  const res = await fetch(path);
  const text = await res.text();
  // Split frontmatter and content
  const match = text.match(/^---\n([\s\S]*?)---\n([\s\S]*)$/);
  if (!match) throw new Error('Invalid frontmatter in ' + path);
  const frontmatter = jsyaml.load(match[1]);
  const content = match[2];
  return { ...frontmatter, content };
}

async function loadAllModals() {
  const modals = await Promise.all(MODAL_PATHS.map(loadModalMarkdown));
  return modals;
}

function renderProjects(modals) {
  const container = document.getElementById('projects-container');
  let columns = [[], [], []];
  modals.forEach((modal, i) => {
    columns[i % 3].push(modal);
  });
  columns.forEach(colModals => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4 col-12-mobile';
    colModals.forEach(modal => {
      colDiv.innerHTML += `
        <article class="item">
          <a href="#${modal.id}" data-toggle="modal" class="image fit"><img src="${modal.image}" alt="" /></a>
          <header><h3>${modal.title}</h3></header>
          <div class="modal fade" id="${modal.id}" tabindex="-1" role="dialog" aria-labelledby="${modal.id}Title" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" style="font-size:125%; font-weight:bold">${modal.modalTitle}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="modal-md-content" style="text-align: left;">${marked.parse(modal.content)}</div>
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
    });
    container.appendChild(colDiv);
  });

  // After rendering, rescale all images in modals to fit the modal width
  // This ensures images from markdown do not overflow the modal
  setTimeout(() => {
    document.querySelectorAll('.modal-md-content img').forEach(img => {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
      img.style.marginLeft = 'auto';
      img.style.marginRight = 'auto';
    });
  }, 0);
}

// Main entry point
loadAllModals().then(renderProjects);
