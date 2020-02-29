import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import {Row, Nav, NavDropdown, Card, Button, ButtonToolbar, ButtonGroup, DropdownButton, Dropdown} from 'react-bootstrap';
import {useStore} from 'react-smee'


//so cold

function Die({img, dx, rollDice, addToRollBox}) {
    let seedrandom = require('seedrandom');

    const [dnum, setDnum] = useState(1)
    const [mod, setMod] = useState(0)
    const [rollType, setRollType] = useState("Global Mods")
    // const [test, setTest] = useState('something1')

    function setCumulativeGlobal(){
        setRollType('Global Mods')
    }

    function setCumulativeSinglular(){
        setRollType('Singular Mods')
    }

    function setAggregate(){
        setRollType('Aggregate')
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
        if (rollType === 'Global Mods') {
            rollCumulativeGlobal(dx, mod, dnum)
        }
        else if (rollType === 'Singular Mods') {
            rollCumulativeSingular(dx, mod, dnum)
        }
        else if (rollType === 'Aggregate'){
            rollAggregate(dx, mod, dnum)
        }
    }

    //The problem here is with the if/else statements
    function rollOnce(dx, mod) {
        let range = seedrandom('added entropy.', { entropy: true })
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
                'outcome': `${i} ${mod}`  
            })
        }
        else if (mod > 0) {
            addToRollBox({
                'roll': `1d${dx}${mod}`,
                'outcome': `${i}+${mod}`  
            })
        }
    }

    function rollCumulativeGlobal(dx, mod, dnum) {
        console.log("dx: ", dx)
        console.log("dnum: ", dnum)
        console.log("mod: ", mod)
        let range = seedrandom('added entropy.', { entropy: true });
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
                toPush = roll
                rollArray.push(toPush)
            }
            else if (mod > 0) {
                toPush = roll
                rollArray.push(toPush)
            }
            j = j + roll
            // rollArray.push(` :${j}`)
            // addToRollBox(` ${moddedRoll}`)
        }
        let moddedRoll = j + mod 
        rollArray.push(` (${j} + ${mod}: ${moddedRoll})`)
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

    function rollCumulativeSingular(dx, mod, dnum) {
        console.log("dx: ", dx)
        console.log("dnum: ", dnum)
        console.log("mod: ", mod)
        let range = seedrandom('added entropy.', { entropy: true });
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
        rollArray.push(` (${j})`)
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

    function rollAggregate(dx, mod, dnum) {
        console.log("dx: ", dx)
        console.log("dnum: ", dnum)
        console.log("mod: ", mod)
        let range = seedrandom('added entropy.', { entropy: true });
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
            if (mod === 0) {
                toPush = roll
                rollArray.push(toPush)
            }
            else if (mod < 0) {
                toPush = roll-mod
                rollArray.push(toPush)
            }
            else if (mod > 0) {
                toPush = roll+mod
                rollArray.push(toPush)
            }
            // rollArray.push(` :${j}`)
            // addToRollBox(` ${moddedRoll}`)
        }
        console.log('rollInfo:', rollInfo)
        // console.log('rollArray:', rollArray)
        // let rollInfoString = rollInfo.toString()
        rollArray.sort(function (a, b) {return b - a})
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
                        <Dropdown.Item eventKey="1" onClick={setCumulativeGlobal}>Global Modifiers</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={setCumulativeSinglular}>Singular Modifiers</Dropdown.Item>
                        <Dropdown.Item eventKey="3" onClick={setAggregate}>Aggregate Rolls</Dropdown.Item>
                    </DropdownButton>
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