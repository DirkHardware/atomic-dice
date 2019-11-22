import React from 'react';
import logo from './logo.svg';
import './App.css';
import DiceContainer from './components/DiceContainer.js';
import RollBox from './components/RollBox';

function App() {
  return (
    <div className='App'>
      <DiceContainer/>
      <RollBox/>
    </div>
  );
}

export default App;
