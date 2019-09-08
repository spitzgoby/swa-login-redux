import FlightHistoryTable from 'components/flight-history/table';
import Page from 'components/page';
import React from 'react';
import Typography from '@material-ui/core/Typography';

function FlightHistory() {
  return (
    <Page>
      <Typography variant="h2">Flight History</Typography>
      <FlightHistoryTable />
    </Page>
  );
};

export default FlightHistory