const displayCity = document.querySelector('.city')
const displayTemperture = document.querySelector('.temperture')
const displayFeelsLike = document.querySelector('.feels-like')
const displayLowTempeture = document.querySelector('.low-tempeture')
const displayHighTempeture = document.querySelector('.high-tempeture')
const displayHumidity = document.querySelector('.humidity')
const displayWind = document.querySelector('.wind')
const main = document.querySelector('.main')

const searchButton = document.querySelector('#search')
const searchInput = document.querySelector('#search-input')

async function getCityWeather() {
    const city = searchInput.value
    const celecius = '°C'
    const fahrenheit = '°F'
    const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=HXRGRARA9XFM2MSZ3JCRWBKRV`
    await fetch(API, {mode: 'cors'})
    .then(async function(response) {
        try {
            if (!response.ok) {
                throw new Error('Weather conditions not found :(')
                searchInput.value = ""
            } else {
                main.classList.add('main-display')
                const data = await response.json()
                displayCity.textContent = data.address
                displayTemperture.textContent = `${data.currentConditions.temp}${celecius}`
                displayFeelsLike.textContent = `Feels like: ${data.currentConditions.feelslike}${celecius}`
                displayHumidity.textContent = `Humidity: ${data.currentConditions.humidity}%`
                displayWind.textContent = `Wind: ${data.currentConditions.windspeed}km/h`
            }
        } catch (error) {
            alert(error)
        }
    })
}

searchButton.addEventListener('click', getCityWeather)