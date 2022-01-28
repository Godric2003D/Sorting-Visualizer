import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/navBar/navBar'
import PlaceS from './Components/placeS/placeS';
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <PlaceS/>
    </React.Fragment>
  );
}

export default App;
