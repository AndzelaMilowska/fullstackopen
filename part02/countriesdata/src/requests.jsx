import axios from "axios";

const key=import.meta.env.VITE_WEATHER_KEY
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/API/";

function getAll() {
  return axios.get(baseUrl + "all").then((response) => response.data);
}

function getByName(name) {
  return axios.get(baseUrl + "name/" + name).then((response) => response.data);
}
function getGeo(name){
       console.log('getGeo running')
    return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${1}&appid=${key}`).then(response =>  response.data[0])
}

function getWeather(lat, lon) {
    console.log('getWeather running')
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then(response => {
       return response.data})
}

function getWeatherByName(name){
    return getGeo(name).then(data => {
       return getWeather(data.lat, data.lon)}).then(data => {
        console.log(data, 'data in getWeatherByName')
        return data})
}

export default { getAll, getByName, getWeatherByName };
