import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import {Row, Nav, NavDropdown, Card, Button, ButtonToolbar, ButtonGroup, DropdownButton, Dropdown} from 'react-bootstrap';


//I'm sick
function Die({img, dx, rollDice, addToRollBox}) {
    let seedrandom = require('seedrandom');

    const [dnum, setDnum] = useState(1)
    const [mod, setMod] = useState(0)
    const [rollType, setRollType] = useState(null)
    // const [test, setTest] = useState('something1')

    function testCumulative(){
        console.log(rollType)
        setRollType('cumulative')
    }

    function testAggregate(){
        console.log(rollType)
        setRollType('aggregate')
    }

    function diceUp(e) {
        e.preventDefault();
        let i = dnum + 1
        setDnum(i)
    }

    function diceDown(e) {
        e.preventDefault();
        let i = dnum - 1
        if(i < 1) {
            setDnum(1)
        }
        else {
            setDnum(i)
        }
        // console.log(dnum)

    }

    function modUp(e) {
        e.preventDefault();
        let i = mod + 1
        setMod(i)
    }

    function modDown(e) {
        e.preventDefault()
        let i = mod - 1 
        setMod(i)
    }

    function clickRoll(e) {
        e.preventDefault();
        // console.log(dx)
        let i = dnum
        if (dnum > 1) {
            rollCumulative(dx, mod, dnum)
        }
        else {rollDice(dx, mod)
        }
    }

    //The problem here is with the if/else statements
    function rollDice(dx, mod) {
        let range = seedrandom()
        let i = Math.ceil(range() * dx)
        if (mod === 0){
            // let rollString = ` 1d${dx}: ${i}`
            addToRollBox({
                        'roll': `1d${dx}`,
                        'outcome': i    
            })

        }
        else if (mod < 0) {
            addToRollBox({
                'roll': `1d${dx}${mod}`,
                'outcome': {i}-{mod}  
            })
        }
        else if (mod > 0) {
            addToRollBox({
                'roll': `1d${dx}${mod}`,
                'outcome': {i}+{mod}  
            })
        }
    }


    //Awesome! Culumulative rolls work! Now for some simple formatting
    function rollCumulative(dx, mod, dnum) {
        console.log("dx: ", dx)
        console.log("dnum: ", dnum)
        console.log("mod: ", mod)
        let range = seedrandom();
        let rollInfo;
        let rollArray = []
        let toPush;
        let j = 0
        if (mod === 0){
            rollInfo = `${dnum}d${dx}`
            // addToRollBox(rollString)
            // rollArray.push(rollInfo)
            // return rollInfo
        }
        else if (mod < 0) {
            rollInfo = `${dnum}d${dx}${mod}`
            // addToRollBox(rollString)
            // rollArray.push(rollInfo)
            // return rollInfo

        }
        else if (mod > 0) {
            rollInfo = `${dnum}d${dx}+${mod}`
            // addToRollBox(rollString)
            // rollArray.push(rollInfo)
            // return rollInfo

        }
        for ( let i= 0; i < dnum; i++) {
            let roll = Math.ceil(range() * dx)
            let moddedRoll = roll + mod
            if (mod === 0) {
                toPush = roll
                rollArray.push(toPush)
            }
            else if (mod < 0) {
                toPush = ` ${roll}${mod}`
                rollArray.push(toPush)
            }
            else if (mod > 0) {
                toPush = ` ${roll}+${mod}`
                rollArray.push(toPush)
            }
            j = j + moddedRoll
            // rollArray.push(` :${j}`)
            // addToRollBox(` ${moddedRoll}`)
        }
        rollArray.push(` :${j}`)
        console.log('rollInfo:', rollInfo)
        // console.log('rollArray:', rollArray)
        // let rollInfoString = rollInfo.toString()
        let rollsOutcome = rollArray.toString()
        // console.log('rollInfo:', rollInfoString)
        console.log('rollsOutcome', rollsOutcome)
        addToRollBox({
            'roll': `${rollInfo}`,
            'outcome': `${rollsOutcome}` 
        })
    }

    return(
        <div className='die'>
            <Card stripped bg='dark' style={{ width: '200px'}}>
                <Card.Header>
                    <DropdownButton drop='down' title={rollType}>
                        <Dropdown.Item eventKey="1" onClick={testCumulative}>Cumulative Rolls</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={testAggregate}>Aggregate Rolls</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    </DropdownButton>
                    {/* <div className="navtabs">
                        <Nav variant="pills" defaultActiveKey="#first">
                            <Row> */}
                            {/* <Nav.Item style={{ width: '85px'}}>
                                <Nav.Link href="#first">Roll</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ width: '85px'}}>
                                <Nav.Link href="#link">Pref</Nav.Link>
                            </Nav.Item> */}
                                {/* <NavDropdown title="Set PRNG" id="basic-nav-dropdown">
                                    <DropdownButton drop='right'> Something
                                        <DropdownButton.Item>Cumulative Rolls</DropdownButton.Item>
                                        <DropdownButton.Item>Aggregate Rolls</DropdownButton.Item>
                                    </DropdownButton>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" onClick = {() => setTest("something2")}>{test}</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Row>
                        </Nav> */}
                    {/* </div> */}
                </Card.Header>
                <div className='die-details'>
                    <div className='indicator'>
                        Rolls
                    </div>
                    <div className='die-selector'>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button className='button-plus-minus' onClick={diceDown}> - </Button>
                                <div className='num'>{dnum}</div>
                                <Button className='button-plus-minus' onClick={diceUp}> + </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                    {/* <img className='die-img' src={img} onClick={clickRoll}/> */}
                    <Card.Img variant="top" src={img} onClick={clickRoll}/>
                    <div className='indicator'>
                        Modifier
                    </div>
                    <div className='die-selector'>
                        {/* <button className='button-plus-minus' onClick={modDown}> - </button>
                        {mod}
                        <button className='button-plus-minus' onClick={modUp}> + </button> */}
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="mr-2" aria-label="First group">
                                <Button className='button-plus-minus' onClick={modDown}> - </Button>
                                <div className='num'>{mod}</div>
                                <Button className='button-plus-minus' onClick={modUp}> + </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Die;