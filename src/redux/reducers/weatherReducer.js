import {
    WEATHER_FORECASE_REQUEST,
    WEATHER_FORECASE_SUCCESS,
    WEATHER_FORECASE_FAIL
} from '../constants/weatherConstants';

import {
    SET_USER_CITY_SELECTION,
    SET_USER_TIMEFRAME_SELECTION
} from '../constants/userSelectionConstants';

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

export const userSelectionReducer = (state={city:null, timeframe:null}, action) => {
    switch(action.type) {
        case SET_USER_CITY_SELECTION:
            return {...state, city: action.payload}
        case SET_USER_TIMEFRAME_SELECTION:
            return {...state, timeframe: action.payload}
        default:
            return state;
    }
}