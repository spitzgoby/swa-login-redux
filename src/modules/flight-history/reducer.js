import moment from 'moment'

const exampleFlights = [1,2,3]
const exampleEntities = {
  '1': {
    arrivalDate: moment().subtract(10, 'days').add(3, 'hours').format(),
    departureDate: moment().subtract(10, 'days').format(),
    destination: 'LAS',
    id: 1,
    origin: 'DAL'
  },
  '2': {
    arrivalDate: moment().subtract(9, 'days').add(3, 'hours').format(),
    departureDate: moment().subtract(9, 'days').format(),
    destination: 'MCO',
    id: 1,
    origin: 'DAL'
  },
  '3': {
    arrivalDate: moment().subtract(8, 'days').add(3, 'hours').format(),
    departureDate: moment().subtract(8, 'days').format(),
    destination: 'LAX',
    id: 1,
    origin: 'DAL'
  }
};


const initialState = {
  entities: exampleEntities,
  flights: exampleFlights
};

const reducer = (state = initialState, action = {}) => {
  let newState;

  switch (action.type) {

    default:
      newState = state
  }

  return newState;
}

export const getFlights = (state) => {
  return state.flights.map(flightId => {
    return state.entities[flightId];
  });
};

export default reducer;