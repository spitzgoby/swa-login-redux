import reducer, * as fromFlightHistory from './reducer';

const getFlightHistoryState = (state) => state.FlightHistory;
export const getFlights = (state) => 
  fromFlightHistory.getFlights(getFlightHistoryState(state));

export * from './actions'
export default reducer;