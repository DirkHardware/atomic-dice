// import React, {useState} from 'react';
// import App from '../App.css'
// import {setallRolls} from './DiceContainer'
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Die({img, dx, allRolls, addToRollBox}) {
//     let seedrandom = require('seedrandom');

//     const [roll, setRoll] = useState('Roll Me!')
//     const [dnum, setDnum] = useState(1)
//     const [mod, setMod] = useState(0)

//     function modUp(e) {
//         e.preventDefault();
//         let i = mod + 1
//         console.log(i)
//         setMod(i)
//     }

//     function modDown(e) {
//         e.preventDefault()
//         let i = mod - 1 
//         console.log(i)
//         setMod(i)
//     }

//     function handleClick(e) {
//         e.preventDefault();
//         // console.log(dx)
//         rollDice(dx, mod)
//     }

//     //The problem here is with the if/else statements
//     function rollDice(dx, mod) {
//         console.log(mod)
//         let range = seedrandom()
//         let i = Math.ceil(range() * dx)
//         setRoll(i)
//         if (mod === 0){
//             let rollString = ` 1d${dx}: ${i}`
//             addToRollBox(rollString)
//         }
//         else if (mod < 0) {
//             let rollString = ` 1d${dx}${mod}: ${i-mod}`
//             addToRollBox(rollString)
//         }
//         else if (mod > 0) {
//             let rollString = ` 1d${dx}+${mod}: ${i+mod}`
//             addToRollBox(rollString)
//         }
//     }

//     return(
//         <div className='die'>
//             <div className='die-details'>
//                 <div className='indicator'>
//                     Rolls
//                 </div>
//                 <div className='die-selector'>
//                     <button className='button-plus-minus'> - </button>
//                     {dnum}
//                     <button className='button-plus-minus'> + </button>
//                 </div>
//                 <img className='die-img' src={img} onClick={handleClick}/>
//                 <div className='indicator'>
//                     Modifier
//                 </div>
//                 <div className='die-selector'>
//                     <button className='button-plus-minus'> - </button>
//                     {mod}
//                     <button className='button-plus-minus'> + </button>
//                 </div>
//             </div>
//             {/* {roll} */}
//         </div>
//     );

// }

// export default Die;