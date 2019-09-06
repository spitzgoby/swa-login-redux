import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import './style.scss'

function Page(props) {
  return (
    <Container className="page">
      <AppBar className="navbar">
        <Typography variant="h2">Southwest</Typography>
      </AppBar>
        {props.children}
    </Container>
  )
}

export default Page