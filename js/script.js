// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

async function getWeather() {
  try {
    // API details
    const apiKey = "fe1d80e1e103cff8c6afd190cad23fa5"
    const lat = 45.4211435
    const lon = -75.6900574
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric"

    // Get weather from OpenWeatherMap
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    // Get weather info
    const weather = data.weather[0].description
    const temp = data.main.temp
    const icon = data.weather[0].icon
    const iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

    // Show on webpage
    document.getElementById("weather-description").innerHTML = "Weather: " + weather
    document.getElementById("temperature").innerHTML = "Temperature: " + temp + "°C"
    document.getElementById("weather-icon").innerHTML = "<img src='" + iconURL + "' alt='Weather Icon'>"
  } catch (error) {
    console.error(error)
    document.getElementById("weather-description").innerHTML = "Error getting weather."
    document.getElementById("temperature").innerHTML = ""
    document.getElementById("weather-icon").innerHTML = ""
  }
}
