import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DiceContainer from './components/DiceContainer.js';
import NavBar from './components/NavBar.js'

function App() {
  return (
    <div className='App'>
      <div id="navbar" className='navbar-item'>
        <NavBar/>
      </div>
      <DiceContainer/>
    </div>
  );
}

export default App;
