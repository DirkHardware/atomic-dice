import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DiceContainer from './components/DiceContainer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
import {Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar>
        <Navbar.Brand><strong>Atomic Dice</strong></Navbar.Brand>
      </Navbar>
      <DiceContainer/>
    </div>
  );
}

export default App;
