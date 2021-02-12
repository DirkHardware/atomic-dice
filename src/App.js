import React, {useState} from 'react';
import './App.css';
import DiceContainer from './components/DiceContainer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Container, Row, Col, Navbar, NavDropdown } from 'react-bootstrap';
import {useStore} from 'react-smee';

function App() {

  const [test, setTest] = useState("something1")

  // const count = useStore('count', 0)

  return (
    <div>
      <Navbar bg="light" expand="lg" class="rounded">
      <Navbar.Brand ><div className='brand'><strong>Atomic Dice</strong></div></Navbar.Brand>
      </Navbar>
    <div/>
      <div className='App'>
        <DiceContainer/>
      </div>
    </div>
  );
}

export default App;
