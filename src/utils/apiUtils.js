import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5'

const apiKey = process.env.REACT_APP_API_KEY;

// forecast/daily?q={city name}&cnt={cnt}&appid={API key}

export const getWeatherData = async (city) => {
    const {data} = await axios.get(`${baseURL}/forecast?q=${city}&appid=${apiKey}`)
    console.log(data)
    return data;
}