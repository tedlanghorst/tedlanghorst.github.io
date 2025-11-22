---
id: "modalDL_Flux"
title: "Deep Learning of Suspended Sediment Flux"
image: "images/DL_Flux/HybridModel.png"
modalTitle: "Deep Learning of Suspended Sediment Flux"
---
This project developed a novel deep learning model to predict daily suspended sediment concentration, suspended sediment flux, and river discharge by combining meteorological, optical remote sensing, and watershed characteristic data. Our approach addresses limitations of existing methods by using satellite and in-situ data without same-day matchups. Focusing on rivers in the conterminous United States, the research demonstrates improved performance through simultaneous modeling of multiple variables and the integration of water color data with hydrology-based predictions. This new methodology aims to enhance our understanding of river processes and provide more accurate, continuous estimates of sediment flux.

<p style="text-align:center; font-size:125%; color:blue">
<a href="https://doi.org/10.1029/2024JF008212">Read the publication in JGR: Earth Surface</a>
</p>

![Our new hybrid model architecture.](images/DL_Flux/HybridModel.png)
*Our new hybrid model architecture.*

<video controls>
  <source src="images/DL_Flux/2019_flux_dtFalse.mp4" type="video/mp4">
</video>
<p> Daily modeled flux for 2019. </p>


![Hysteresis analysis map](images/DL_Flux/Hysteresis_map.png)
*A map of hysteresis index (HI) between the model predicted discharge and suspended sediment concentration. Many models use a fixed rating curve between these two (no hysteresis) in order to simplify the SSC estimates from discharge alone. However, field studies show that hysteresis contains information of the sediment sourcing and can have major impacts on the total sediment flux. It is notable that this feature emerges from our model based purely on deep learning, showing that it represents real processes that are not represented in some of the best process-based models.*
