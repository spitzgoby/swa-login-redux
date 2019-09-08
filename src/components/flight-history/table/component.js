import FlightHistoryTableRow from './row';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function FlightHistoryTable(props) {
  return (
    <Table> 
      <TableHead>
        <TableRow>
          <TableCell>
            Origin
          </TableCell>
          <TableCell>
            Destination
          </TableCell>
          <TableCell>
            Departure Date
          </TableCell>
          <TableCell>
            Arrival Date
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          props.flights.map((flight) => <FlightHistoryTableRow flight={flight} />)
        }
      </TableBody>
    </Table>
  );
};

export default FlightHistoryTable;