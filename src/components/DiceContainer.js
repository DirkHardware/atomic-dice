import React from 'react';
import Die from './Die.js';
import App from '../App.css'

function DiceContainer() {
    let seedrandom = require('seedrandom');
    // let rng = seedrandom('67,223,113,2,207,237,155,184,102,94,186,162,89,157,87,13,227,46,13,71,251,48,136,243,22,160,253,168,170,202,85,196,167,222,15,172,239,107,165,23,76,110,153,82,252,92,220,41,197,86,199,55,164,84,127,49,185,219,1,222,106,151,255,78,132,180,179,201,81,140,199,2,66,44,42,104,79,76,103,107,16,99,219,182,117,37,242,14,245,177,44,255,126,114,246,148,152,122,133,63,79,83,5,215,249,30,143,102,253,61,49,119,19,142,200,96,135,226,136,102,130,61,208,58,69,28,150,241')
    let range = seedrandom()
    let diceTypes = [100, 20, 12, 10, 8, 6, 4]
    let allDice = diceTypes.map(die => 
        <Die
            dx={die}
        />
        )

    return(
        <div id="all-dice" className="all-dice">
            {allDice}
        </div>
    )
} 

export default DiceContainer;