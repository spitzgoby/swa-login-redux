import {combineReducers} from 'redux';
import flightHistoryReducer from 'modules/flight-history';

export default combineReducers({
  FlightHistory: flightHistoryReducer
});