import FlightHistory from 'components/flight-history'
import Login from 'components/login'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import React from 'react';

function App(props) {
  return (
    <Provider store={props.store}>
      <FlightHistory />
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
