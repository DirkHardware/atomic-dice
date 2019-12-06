import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moveCursor } from 'readline';

function Die({img, dx, rollDice, addToRollBox}) {
    let seedrandom = require('seedrandom');

    const [dnum, setDnum] = useState(1)
    const [mod, setMod] = useState(0)

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
        if (dnum > 1) {
            rollCumulative(dx, mod, dnum)
        }
        else {rollDice(dx, mod)
        }
    }

    //The problem here is with the if/else statements
    function rollDice(dx, mod) {
        // console.log(mod)
        let range = seedrandom()
        let i = Math.ceil(range() * dx)
        if (mod === 0){
            let rollString = ` 1d${dx}: ${i}`
            addToRollBox(rollString)
        }
        else if (mod < 0) {
            let rollString = ` 1d${dx}${mod}: ${i-mod}`
            addToRollBox(rollString)
        }
        else if (mod > 0) {
            let rollString = ` 1d${dx}+${mod}: ${i+mod}`
            addToRollBox(rollString)
        }
    }

    function rollCumulative(dx, mod, dnum) {
        let range = seedrandom();
        if (mod > 0) {
            let rollString = ` ${dnum}d${dx}:`;
        }
        let j = 0
        for ( i= 0; i < dnum; i++) {
            roll = Math.ceil(range() * dx)
            let moddedroll = roll - mod
            string = `` 
            let rollString = rollString.concat(` ${ moddedroll},`)
        } 
        let i = Math.cei
    }

    return(
        <div className='die'>
            <div className='die-details'>
                <div className='indicator'>
                    Rolls
                </div>
                <div className='die-selector'>
                    <button className='button-plus-minus' onClick={diceDown}> - </button>
                    {dnum}
                    <button className='button-plus-minus' onClick={diceUp}> + </button>
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
        </div>
    );

}

export default Die;