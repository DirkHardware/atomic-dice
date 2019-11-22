import React, {useState} from 'react';
import App from '../App.css'

function Die({img, dx}) {
    let seedrandom = require('seedrandom');

    const [roll, setRoll] = useState('Roll Me!')
    const [allRolls, setallRolls] = useState([])

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
        setallRolls(allRolls.concat(i))
        console.log(i)
    }

    // let roll = Math.round(range() * 20)

    function handleSubmit(e) {
        e.preventDefault()
        setRoll('Roll Me!')
        setallRolls([])
    }

    return(
        <div className='die'>
            <img className='die-img' src={img} onClick={handleClick}/>
            {/* {range} */}
            {/* <div> 
                <form onSubmit={handleSubmit}>
                    <textarea className='roll-field' rows='8' type='text' name='rolls' value={allRolls}/>
                    <div>
                        <button className='clear-button'>Clear</button>
                    </div>
                </form>    
            </div> */}
            {roll}
        </div>
    );

}

export default Die;