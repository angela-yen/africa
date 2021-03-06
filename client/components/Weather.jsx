import React, { useEffect, useState } from 'react'
import { getWeather } from './weatherAPI'

function Weather() {
  const [weather, setWeather] = useState([])

  useEffect(() =>
    getWeather()
      .then(apiRes => {
        setWeather(apiRes)
        return null
      })
      .catch(err => {
        console.error(err)
      })
    , [])

  console.log('Weather is rendered')

  if (weather.length < 1) {
    return (<><span>Loading</span></>)
  } else {
    return (

      <>
        <h1>{weather.resolvedAddress}</h1>
        <div className="center">
          <img className='pic' src='https://st2.depositphotos.com/45298910/43807/i/600/depositphotos_438074150-stock-photo-panorama-shot-pretoria-city-twilight.jpg'></img>
        </div>
        <ul className='weather-box '>
          <span className='minititle'>âï¸ Weather </span>
          <li> ð¤Weather description: {weather.description}</li>
          <li>âï¸ Weather timezone: {weather.timezone}</li>
          <li>ð Date: {weather.days[0].datetime}</li>
          <li>ð¡ Current temp: {weather.days[0].temp}</li>
          <li>âï¸ Temp min: {weather.days[0].tempmin} Temp max: {weather.days[0].tempmax} </li>
          <li>ð¦ Humidity: {weather.days[0].humidity} ð§ Rain: {weather.days[0].precip}</li>

        </ul>
      </>
    )
  }
}

export default Weather
