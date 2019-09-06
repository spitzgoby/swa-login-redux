import Grid from '@material-ui/core/Grid';
import LoginSubmitBlock from './submit-block'
import Page from 'components/page';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import './style.scss';

function Login() {
  return (
    <Page className="login">
      <Grid container justify="center">
        <Grid item xs={6}>
          <Paper className="login-form">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4">Log in</Typography>
              </Grid>
              <Grid item>
                <TextField fullWidth={true} label="Username" variant="outlined" />
              </Grid>
              <Grid item>
                <TextField fullWidth={true} label="Password" variant="outlined" />
              </Grid>
            </Grid>
            <Grid item>
              <LoginSubmitBlock />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Login;