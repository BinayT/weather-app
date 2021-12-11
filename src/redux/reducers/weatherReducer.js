import {
    WEATHER_FORECASE_REQUEST,
    WEATHER_FORECASE_SUCCESS,
    WEATHER_FORECASE_FAIL
} from '../constants/weatherConstants';

export const weatherForecastReducer = (state={}, action) => {
    switch (action.type) {
        case WEATHER_FORECASE_REQUEST:
            return {loading: true}
        case WEATHER_FORECASE_SUCCESS:
            return {loading: false, weatherForecast: action.payload}
        case WEATHER_FORECASE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}