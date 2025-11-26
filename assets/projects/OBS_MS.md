---
id: "modalOBS_MS"
title: "Multispectral Backscatter Sensor"
image: "images/OMOBS/AS7265x_response.png"
modalTitle: "Extending the OpenOBS to an 18-band multispectral sensor"
---

The OpenOBS-328 hardware and software are extremely mature at this point. I continue to mantain the project, updating hardware files when parts are discontinued and updating firmware when someone suggest a new feature (and then again when that feature adds a new bug). I am now experimenting with a multispectral, 18-band version of the sensor that covers the entire visible spectrum and into the near infrared (400-950 nm).

![AS7265x sensor response](images/OMOBS/AS7265x_response.png)
*The spectral response of the AS7265X set of sensors from the [manufacturers datasheet](https://ams-osram.com/products/sensor-solutions/ambient-light-color-spectral-proximity-sensors/ams-as7265x-smart-spectral-sensor)*


![Photo of the prototype sensor head](images/OMOBS/sensor_head.png)
*Photo of the prototype sensor head for the AS7265X 18 channel sensor. Despite the similar shape to the OpenOBS-328 head, this sensor is much larger and requires a two inch PVC pipe for housing. For the prototype version, we are using the [Sparkfun board](https://www.sparkfun.com/sparkfun-triad-spectroscopy-sensor-as7265x-qwiic.html) which costs 70 USD right now. A custom manufactured sensor board could get this cost down to around $30 per unit in small quanitites, although the implementation is much more complicated than the VCNL4010 sensor used by the OpenOBS-328.*


![Screenshot of the new OpenOBS GUI showing the spectral data in real time](images/OMOBS/spectrum.png)
*I wrote a new version of the OpenOBS GUI that can show the AS7265X spectral data in real time. The new GUI is written in python, which allows it to run on any operating system, rather than just windows for the previous version. I have also added capability to log files directly to the computer, view time series plots in real time, and perform calibrations in real time.*
