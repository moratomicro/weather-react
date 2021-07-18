import React, { useState, useEffect } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import { api } from './services/api'
import { FaTemperatureHigh, FaWind } from 'react-icons/fa'

function App() {
  const [weather, setWeather] = useState(null)  
  const [city, setCity] = useState("")
  const [search, setSearch] = useState("")

  async function handleGetWeather() {
    event.preventDefault()
    const response = await api.get(search)
    await fetch("https://goweather.herokuapp.com/weather/Current")
    setCity(search)

    console.log(response.data)
    setWeather(response.data)
  }

  useEffect(() => {
    //handleGetWeather()
  }, [])

  return (
    <div className="App">
      {/* <h1>{"hello world".toUpperCase()}</h1> */}
      {/* <HelloWorld></HelloWorld> */}

      <header>
        <form onSubmit={handleGetWeather}>
          <input 
            type="text" value={search} 
            onChange={(event) => setSearch(event.target.value)}
          />
          <button>Enviar</button>
        </form>        
      </header>

      {weather &&
        <main>
          {/* <p>{JSON.stringify(weather)}</p> */}

          <h1>{city}</h1>

          <section className="current-weather">
            <h2>Current Weather - (Clima Atual)</h2>

            <p>
              <FaTemperatureHigh />
              {weather.temperature}
            </p>
            <p>{weather.description}</p>

          </section>

          <section className="forecast">
            <h2>Forecast - Previsão)</h2>

            <ol>
              {
                weather.forecast.map(day => 
                  <li>
                      <div>
                        <FaTemperatureHigh />
                        <p>{day.temperature}</p>
                      </div>
                    
                      <div>
                        <FaWind />
                        <p>{day.wind}</p>
                      </div>                    
                  </li>
                  )              
              }
            </ol>
          </section>
        </main> 
      }
    </div>
  )
}

export default App
