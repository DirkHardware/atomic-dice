import React, {useState} from 'react';
import App from '../App.css'
import {setallRolls} from './DiceContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function Die({img, dx, rollDice, allRolls, addToRollBox, handleClick}) {
    let seedrandom = require('seedrandom');

    const [roll, setRoll] = useState('Roll Me!')


    function handleClick(e) {
        e.preventDefault();
        console.log(dx)
        rollDice(dx)
    }

    function rollDice(maxnum) {
        let range = seedrandom()
        let i = Math.round(range() * maxnum)
        if(i === 0) {
                i++
        }
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
                    0
                    <button className='button-plus-minus'> + </button>
                </div>
                <img className='die-img' src={img} onClick={handleClick}/>
                <div className='indicator'>
                    Modifier
                </div>
                <div className='die-selector'>
                    <button className='button-plus-minus'> - </button>
                    0
                    <button className='button-plus-minus'> + </button>
                </div>
            </div>
            {/* {roll} */}
        </div>
    );

}

export default Die;