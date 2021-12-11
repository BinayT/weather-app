import {
    SET_USER_CITY_SELECTION,
    SET_USER_TIMEFRAME_SELECTION
} from '../constants/userSelectionConstants';

const userInitialState = {
    city:null,
    timeframe:null
}

export const userSelectionReducer = (state=userInitialState, action) => {
    switch(action.type) {
        case SET_USER_CITY_SELECTION:
            return {...state, city: action.payload}
        case SET_USER_TIMEFRAME_SELECTION:
            return {...state, timeframe: action.payload}
        default:
            return state;
    }
}