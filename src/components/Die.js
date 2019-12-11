import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


//hurfadurff
function Die({img, dx, rollDice, addToRollBox}) {
    let seedrandom = require('seedrandom');

    const [dnum, setDnum] = useState(1)
    const [mod, setMod] = useState(0)

    function diceUp(e) {
        e.preventDefault();
        let i = dnum + 1
        setDnum(i)
        console.log(dnum)
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
        console.log(dnum)

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
            let rollInfo = ` 1d${dx}:`
            // addToRollBox(rollString)
            rollArray.push(rollInfo)
        }
        else if (mod < 0) {
            let rollInfo = ` 1d${dx}${mod}:`
            // addToRollBox(rollString)
            rollArray.push(rollInfo)

        }
        else if (mod > 0) {
            let rollInfo = ` 1d${dx}+${mod}:`
            // addToRollBox(rollString)
            rollArray.push(rollInfo)

        }
        for ( let i= 0; i < dnum; i++) {
            let roll = Math.ceil(range() * dx)
            let moddedRoll = roll - mod
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
        console.log(rollArray)
        addToRollBox(` ${rollArray}`)
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