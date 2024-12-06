const displayCity = document.querySelector('.city')
const displayTemperture = document.querySelector('.temperture')
const displayFeelsLike = document.querySelector('.feels-like')
const displayLowTempeture = document.querySelector('.low-tempeture')
const displayHighTempeture = document.querySelector('.high-tempeture')
const displayHumidity = document.querySelector('.humidity')
const displayWind = document.querySelector('.wind')
const displayPressure = document.querySelector('.pressure')
const displayVisibility = document.querySelector('.visibility')
const displayDewPoint = document.querySelector('.dew-point')
const displayUvIndex = document.querySelector('.uv-index')
const displayConditions = document.querySelector('.conditions')
const sunrise = document.querySelector('.sunrise')
const sunset = document.querySelector('.sunset')
const main = document.querySelector('.main')

const searchButton = document.querySelector('#search')
const searchInput = document.querySelector('#search-input')

async function getCityWeather() {
    const city = searchInput.value
    const celecius = '°C'
    const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=HXRGRARA9XFM2MSZ3JCRWBKRV`
    await fetch(API, {mode: 'cors'})
    .then(async function(response) {
        try {
            if (!response.ok) {
                throw new Error('Weather conditions not found :(')
            } else {
                main.classList.add('main-display')
                const data = await response.json()
                displayCity.textContent = `Weather Today in ${data.resolvedAddress}`
                displayTemperture.textContent = `${data.currentConditions.temp}${celecius}`
                displayFeelsLike.textContent = `${data.currentConditions.feelslike}${celecius}`
                displayHumidity.textContent = `${data.currentConditions.humidity}%`
                displayWind.textContent = `${data.currentConditions.windspeed}km/h`
                displayPressure.textContent = `${data.currentConditions.pressure}hPa`
                displayVisibility.textContent = `${data.currentConditions.visibility}km`
                displayDewPoint.textContent = `${data.currentConditions.dew}°`
                displayUvIndex.textContent = `${data.currentConditions.uvindex}`
                displayConditions.textContent = `${data.currentConditions.conditions}`
                sunrise.textContent = `${data.currentConditions.sunrise.slice(0, 5)}`
                sunset.textContent = `${data.currentConditions.sunset.slice(0, 5)}`
            }
        } catch (error) {
            alert(error)
            searchInput.value = ""
        }
    })
}

searchButton.addEventListener('click', getCityWeather)