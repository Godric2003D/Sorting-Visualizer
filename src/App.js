import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';

import {Route, Routes} from 'react-router-dom';
import NavBar from './Components/navBar/navBar'
import PlaceS from './Components/placeS/placeS';
import HomE from './Components/Home/homE';
import HomEs from './Components/homeS/homEs';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomE/>} />
          <Route path="/homes" element={<HomEs/>} />
          <Route path="/placeS" element={<PlaceS/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
