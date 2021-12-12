import {getWeatherData} from '../../utils/apiUtils';

import {
    WEATHER_FORECASE_REQUEST,
    WEATHER_FORECASE_SUCCESS,
    WEATHER_FORECASE_FAIL
} from '../constants/weatherConstants';

export const getWeather = (data) => async(dispatch) => {
    try {
        dispatch({type: WEATHER_FORECASE_REQUEST});
        const weatherData = await getWeatherData(data)
        dispatch({type: WEATHER_FORECASE_SUCCESS, payload: weatherData})
    } catch (error) {
        dispatch({type:WEATHER_FORECASE_FAIL, error: error})
    }
}