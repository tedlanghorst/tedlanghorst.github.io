---
id: "modalDL_Q"
title: "Assimilating SWOT into a Deep Learning Model"
image: "images/DL_Q/graph_watershed.png"
modalTitle: "Using Machine Learning Data Assimilation with a Recurrent Graph Neural Network model of river discharge"
---

Models of river discharge generally perform poorly in regions with extensive human modification. The explanation is fairly straightforward: using meteorological data alone do not tell the full story of hydrology in that region. Even with landscape characteristics and information about large reservoirs (where available), modeling these impacts is very difficult. One solution to this is to assimilate observations of the rivers into these models. However, traditional data assimilation requires that the observations and the model have some common **states** (i.e. we cannot assimilate water surface elevation into a model that only represents discharge). Using machine learning, we can train a neural network that encodes our observations into the latent model **states** of a deep learning model. 

![conceptual image of a watersheds as a graph](images/DL_Q/graph_watershed.png)
*We first setup our river networks as a graph network, where the watersheds are the nodes (blue polygons) are connected by the flowlines as edges (red lines). This allows us to independently assimilate remote sensing observations when they are available at each location.*


![model design](images/DL_Q/model_design.png)
*The architecture of our recurrent graph neural network (RGNN) with machine learning data assimilation (MLDA). This is the update of the model states for one node for one time step. The model cycles between bringing in new data for the timestep, then using an attention mechanism to bring in data from adjacent nodes.*

![example hydrograph](images/DL_Q/timeseries_USGS-12370000.png)
*An example hydrograph of the improvement in discharge predictions when we incorporate SWOT data. The blue and red lines compare experiments where we trained a model with and without SWOT data, and then tested this model on new **unseen** basins, testing the spatial generalization. In this example, the Swan River near Big Fork, Montana is directly downstream of a reservoir. With the SWOT data, the model shifts the peak discharge later in the season, matching what we expect from a flow regulated river.*