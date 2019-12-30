import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DiceContainer from './components/DiceContainer.js';

function App() {
  return (
    <div className='App'>
      <div id="navbar" className='navbar-item'>
        this is a navbar
      </div>
      <DiceContainer/>
      {/* <RollBox/> */}
    </div>
  );
}

export default App;
