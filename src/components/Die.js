import React, {useState} from 'react';
import App from '../App.css'
import {setallRolls} from './DiceContainer'

function Die({img, dx, rollDice, allRolls, addToRollBox, handleClick}) {
    let seedrandom = require('seedrandom');

    const [roll, setRoll] = useState('Roll Me!')
    const [allLocalRolls, setAllLocalRolls] = useState([])


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
        // setAllLocalRolls(allLocalRolls.concat('1d',maxnum,': ', i))
        let rollString = ` 1d${maxnum}: ${i}`
        addToRollBox(rollString)
        console.log(i)
    }

    return(
        <div className='die'>
            <img className='die-img' src={img} onClick={handleClick}/>
            {roll}
        </div>
    );

}

export default Die;