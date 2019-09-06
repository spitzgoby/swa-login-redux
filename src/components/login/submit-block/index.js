import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link';
import React from 'react';

import './style.scss'

function LoginSubmitBlock() {

  function getProps() {
    return {
      className: 'login-form-submit-block', 
      direction: 'column',
      justify: 'space-between'
    };
  };

  function renderEnrollNowLink() {
    return (
      <div>
        Not a member? <br />
        <Link href="">Enroll Now</Link>
      </div>
    );
  };

  return (
    <Grid container {...getProps()}>
      <Grid container justify="flex-end">
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
          labelPlacement="start"
        />
      </Grid>
      <Grid container justify="space-between">
        {renderEnrollNowLink()}
        <Button className="login-form-submit-block--button" variant="contained">Log in</Button>
      </Grid>
    </Grid>
  );
};

export default LoginSubmitBlock;