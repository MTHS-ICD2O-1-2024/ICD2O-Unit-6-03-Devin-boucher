// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

async function getWeather() {
  try {
    const apiKey = "fe1d80e1e103cff8c6afd190cad23fa5"
    const lat = 45.4211435
    const lon = -75.6900574
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    const response = await fetch(url)
    const jsonData = await response.json()
    console.log(jsonData)

    // Get weather info from JSON
    const description = jsonData.weather[0].description
    const temperature = jsonData.main.temp

    // Output to webpage
    document.getElementById("weather-description").innerHTML =
      "<strong>Weather:</strong> " + description
    document.getElementById("temperature").innerHTML =
      "<strong>Temperature:</strong> " + temperature + "°C"
  } catch (error) {
    console.error(error)
    document.getElementById("weather-description").innerHTML =
      "Error: Could not fetch the weather."
  }
}
