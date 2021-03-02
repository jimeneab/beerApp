import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import NavBar from './components/navBar/navBar'
import TextField from '@material-ui/core/TextField';
import SearchField from './components/searchField/index'


function App() {
  return (
    <Grid container>
      <Grid lg={12} md={12} xs={12} spacing={1}><NavBar/></Grid>
      <Grid lg={4} md={6} xs={12} spacing={1}><Box border={1} bgcolor="primary.main" color="white">asdmaslmdl</Box></Grid>
      <Grid lg={4} md={6} xs={12} spacing={1}><Box border={1} bgcolor="primary.main" color="white">asdmalsmd</Box></Grid>
      <Grid lg={4} md={6} xs={12} spacing={1}><Box border={1} bgcolor="primary.main" color="white">sakkdnaklsn</Box></Grid>
    </Grid>
  );
}

export default App;
