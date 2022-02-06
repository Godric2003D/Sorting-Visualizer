import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';

import {Route, Routes} from 'react-router-dom';
import NavBar from './Components/navBar/navBar'
import PlaceS from './Components/placeS/placeS';
import HomE from './Components/Home/homE';
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <PlaceS/>
    </React.Fragment>
  );
}

export default App;
