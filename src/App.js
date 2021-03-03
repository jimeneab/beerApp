import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import NavBar from './components/navBar/navBar'
import BottomAppBar from './components/bottomAppBar';
import SearchField from './components/searchField/index'


function App() {
  return (
    <Grid container
    alignItems="center"
    justify="center"
    >
      <Grid lg={12} md={12} xs={12} spacing={1}><NavBar/></Grid>
      <Grid lg={4} md={4} xs={4} spacing={1}><SearchField/></Grid>
      <Grid lg={12} md={12} xs={12} spacing={1}><BottomAppBar/></Grid>
    </Grid>
  );
}

export default App;
