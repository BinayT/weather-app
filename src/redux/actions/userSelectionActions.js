import {
    SET_USER_CITY_SELECTION,
    SET_USER_TIMEFRAME_SELECTION
} from '../constants/userSelectionConstants';

export const setUserSelection = (data) => async (dispatch) => {
    dispatch({type:SET_USER_TIMEFRAME_SELECTION, payload:data.timeframe})
    dispatch({type:SET_USER_CITY_SELECTION, payload:data.city})
}