import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  weatherForecastReducer,
} from './reducers/weatherReducer';

import {
  userSelectionReducer
} from './reducers/userSelectionReducer';

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