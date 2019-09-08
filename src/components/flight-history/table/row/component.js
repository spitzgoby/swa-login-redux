import PropTypes from 'prop-types';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function FlightHistoryTableRow(props) {
  const flight = props.flight;

  return (
    <TableRow>
      <TableCell>
        {flight.origin}
      </TableCell>
      <TableCell>
        {flight.destination}
      </TableCell>
      <TableCell>
        {flight.departureDate}
      </TableCell>
      <TableCell>
        {flight.arrivalDate}
      </TableCell>
    </TableRow>
  );
};

FlightHistoryTableRow.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape({
    arrivalDate: PropTypes.string,
    departureDate: PropTypes.string,
    destination: PropTypes.string,
    origin: PropTypes.string
  }))
};

export default FlightHistoryTableRow;