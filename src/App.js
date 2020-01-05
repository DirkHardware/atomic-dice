import React, {useState} from 'react';
import './App.css';
import DiceContainer from './components/DiceContainer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Container, Row, Col, Navbar, NavDropdown } from 'react-bootstrap';

function App() {

  const [test, setTest] = useState("something1")


  return (
    <div className='App'>
      <div className='navbar'>
      <Navbar bg="light" expand="lg" class="rounded">
        <Navbar.Brand><strong>Atomic Dice</strong></Navbar.Brand>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" onClick = {() => setTest("something2")}>{test}</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </Navbar>
      </div>
      <DiceContainer/>
    </div>
  );
}

export default App;
