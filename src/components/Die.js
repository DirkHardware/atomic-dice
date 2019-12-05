import React, {useState} from 'react';
import App from '../App.css'
import {setallRolls} from './DiceContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function Die({img, dx, rollDice, allRolls, addToRollBox, handleClick}) {
    let seedrandom = require('seedrandom');

    const [roll, setRoll] = useState('Roll Me!')
    const [dnum, setDnum] = useState(1)
    const [mod, setMod] = useState(0)

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
        rollDice(dx)
    }

    function rollDice(maxnum) {
        let range = seedrandom()
        let i = Math.ceil(range() * maxnum)
        setRoll(i)
        let rollString = ` 1d${maxnum}: ${i}`
        addToRollBox(rollString)
    }

    return(
        <div className='die'>
            <div className='die-details'>
                <div className='indicator'>
                    Rolls
                </div>
                <div className='die-selector'>
                    <button className='button-plus-minus'> - </button>
                    {dnum}
                    <button className='button-plus-minus'> + </button>
                </div>
                <img className='die-img' src={img} onClick={clickRoll}/>
                <div className='indicator'>
                    Modifier
                </div>
                <div className='die-selector'>
                    <button className='button-plus-minus' onClick={modDown}> - </button>
                    {mod}
                    <button className='button-plus-minus' onClick={modUp}> + </button>
                </div>
            </div>
            {/* {roll} */}
        </div>
    );

}

export default Die;