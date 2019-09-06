import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import logo from './swa_logo_dark.png';
import React from 'react';

import './style.scss';

function Page(props) {
  return (
    <Container className="page">
      <AppBar className="navbar">
        <img alt="Southwest" height="34" role="presentation" src={logo} width="223" />
      </AppBar>
      {props.children}
    </Container>
  );
}

export default Page;