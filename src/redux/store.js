import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  weatherForecastReducer,
  userSelectionReducer
} from './reducers/weatherReducer';

const reducer = combineReducers({
  weatherForecast: weatherForecastReducer,
  userSelection: userSelectionReducer
})

const initialState = {}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;