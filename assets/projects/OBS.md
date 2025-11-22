---
id: "modalOBS"
title: "OpenOBS development"
image: "images/OOBS/physicalDesign_simple.png"
modalTitle: "Open-source Optical Backscatter Sensor (OpenOBS)"
---
Optical backscatter sensors are instruments commonly used to determine the turbidity (cloudiness) of water, or how much particulate matter is in the water. OpenOBS is an academic research project to develop an open source, affordable, easy to build, and accurate OBS. While commercial sensors cost upwards of $3000, OpenOBS can be built for less than $50 in parts. This low-cost alternative allows us to more extensively monitor natural systems, or use in high-risk environments, where deployment of a large number of commercial sensors would be cost-prohibitive.

<p style="text-align:center; font-size:125%; color:blue">
<a href="https://tedlanghorst.github.io/OpenOBS-328/">Documentation site</a><br>
<a href="https://assets.researchsquare.com/files/rs-2793579/v1/8b1f9117-a428-4577-b595-940c31f8beaf.pdf?c=1681836022">Publication in Nature Water</a>
</p>

![An assemebled OBS with housing cut open for visualization.](images/OOBS/physicalDesign_simple.png)
*An assemebled OBS with housing cut open for visualization.*

![Graphical interface for programming the sensor before deploying.](images/OOBS/GUI_send.PNG)
*Graphical interface for programming the sensor before deploying.*

![Full schematic of the data logger.](images/OOBS/Schematic_OpenOBS_328.png)
*Full schematic of the data logger. The most interesting aspect of this datalogger in the **Power Regulation and Switching** section, where we use the real-time clock alarms to completely disconnect the battery from the rest of the datalogger between measurements. This hard shutoff eliminates the slow draining allows battery to last years depending on the sampling interval.*

![Estimated and measure battery life.](images/OOBS/deploy_BatteryLife.png)
*The sensor's estimated battery life (based on high precision current draw measurements during active logging and sleep modes), and real test data of battery life over several months.*
