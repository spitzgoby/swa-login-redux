import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FlightHistoryTable from 'components/flight-history/table/component';
import {getFlights} from 'modules/flight-history';


const mapStateToProps = (state) => ({
  flights: getFlights(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightHistoryTable);
