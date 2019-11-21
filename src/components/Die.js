import React, {useState} from 'react';
import App from '../App.css'

function Die({img, dx}) {
    let seedrandom = require('seedrandom');

    const [roll, setRoll] = useState('')

    function handleClick(e) {
        e.preventDefault();
        // console.log(dx)
        rollDice(dx)
    }

    function rollDice(maxnum) {
        let range = seedrandom()
        let i = Math.round(range() * maxnum)
        if(i === 0) {
             i++
        }
        setRoll(i)
        console.log(i)
    }

    // let roll = Math.round(range() * 20)

    return(
        <div className='die'>
            <img className='die-img' src={img} onClick={handleClick}/>
            {/* {range} */}
            {roll}
        </div>
    );

}

export default Die;