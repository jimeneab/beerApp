import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import NavBar from './components/navBar/navBar'
import TextField from '@material-ui/core/TextField';
import SearchField from './components/searchField/index'


function App() {
  return (
    <>
      <NavBar/>
      <SearchField/>
    </>
  );
}

export default App;
