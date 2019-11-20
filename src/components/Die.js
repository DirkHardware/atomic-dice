import React, {useState} from 'react';

function Die({range, seed, dx}) {
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
        <div>
            <img className='die-img' src='https://cdn.shopify.com/s/files/1/1219/8174/products/4Pack_White1.png?v=1509744731' onClick={handleClick}/>
            {range}
            {roll}
        </div>
    );

}

export default Die;