import React, {useState} from 'react';
import Die from './Die.js';
import App from '../App.css';
import RollBox from './RollBox';

//Foo bar

//I think the solution here is to remove rollbox as a seperate component entirely and just make it a form inside dicecontainer
//and try and figureout how to make dicecontainer check for statechange
class DiceContainer extends React.Component {

    state= {
        seedrandom: require('seedrandom'),
        diceTypes: [
            {dx: 100, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1920w/products/3040/7416/d10-tens-dice-black-gold__06083.1530125950.jpg?c=2'}, 
            {dx: 20, img: 'https://cdn.shopify.com/s/files/1/1219/8174/products/4Pack_White1.png?v=1509744731'}, 
            {dx: 12, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1280x1280/products/572/7525/d12-blue-dice__82474.1531855998.jpg?c=2&imbypass=on'},
            {dx: 10, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1920w/products/538/7417/d10-black-chessex-dice__18220.1530126200.jpg?c=2'},
            {dx: 8, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1920w/products/536/7427/d8-dice-white__61297.1530246414.jpg?c=2'},
            {dx: 6, img: 'https://cdn10.bigcommerce.com/s-xn8dkfqe/products/203/images/394/16mm-round-red__08689.1498706731.1280.1280.png?c=2'}, 
            {dx: 4, img: 'https://www.gamesquest.co.uk/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/d/g/dgdjbpo4rdg_-sale-4_sided_jumbo_opaque_dice_red_-_sale-dgdjbpo4rdg.jpg'}
        ],
        allGlobalRolls: [],
        allDice: []
    }

    componentDidMount() {
        this.setState({allDice: this.state.diceTypes.map(die => 
            <Die
                dx={die.dx}
                img={die.img}
                addToRollBox={this.addToRollBox}
            />
            )})
    }

    componentDidUpdate() {
        console.log('component updated')
    }

    addToRollBox = roll => {
        this.setState({allGlobalRolls: this.state.allGlobalRolls.concat(roll)})
        console.log(this.state.allGlobalRolls)
    }

    // let seedrandom = require('seedrandom');
    // let rng = seedrandom('67,223,113,2,207,237,155,184,102,94,186,162,89,157,87,13,227,46,13,71,251,48,136,243,22,160,253,168,170,202,85,196,167,222,15,172,239,107,165,23,76,110,153,82,252,92,220,41,197,86,199,55,164,84,127,49,185,219,1,222,106,151,255,78,132,180,179,201,81,140,199,2,66,44,42,104,79,76,103,107,16,99,219,182,117,37,242,14,245,177,44,255,126,114,246,148,152,122,133,63,79,83,5,215,249,30,143,102,253,61,49,119,19,142,200,96,135,226,136,102,130,61,208,58,69,28,150,241')
    // let range = seedrandom()

    // const [allRolls, setallRolls] = useState([])

    // let diceTypes = [
    //                  {dx: 100, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1920w/products/3040/7416/d10-tens-dice-black-gold__06083.1530125950.jpg?c=2'}, 
    //                  {dx: 20, img: 'https://cdn.shopify.com/s/files/1/1219/8174/products/4Pack_White1.png?v=1509744731'}, 
    //                  {dx: 12, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1280x1280/products/572/7525/d12-blue-dice__82474.1531855998.jpg?c=2&imbypass=on'},
    //                  {dx: 10, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1920w/products/538/7417/d10-black-chessex-dice__18220.1530126200.jpg?c=2'},
    //                  {dx: 8, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1920w/products/536/7427/d8-dice-white__61297.1530246414.jpg?c=2'},
    //                  {dx: 6, img: 'https://cdn10.bigcommerce.com/s-xn8dkfqe/products/203/images/394/16mm-round-red__08689.1498706731.1280.1280.png?c=2'}, 
    //                  {dx: 4, img: 'https://www.gamesquest.co.uk/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/d/g/dgdjbpo4rdg_-sale-4_sided_jumbo_opaque_dice_red_-_sale-dgdjbpo4rdg.jpg'}
    //                 ]

    // let allDice = diceTypes.map(die => 
    //     <Die
    //         dx={die.dx}
    //         img={die.img}
    //     />
    //     )

    // let roll = Math.round(range() * 20)

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setRoll('Roll Me!')
    //     setallRolls([])
    // }

    render(){

    return(
        //Perhaps pass Rollbox a function that takes an argument of a function it can use to return a new array of rolls
        //That way you can pass the useState method from hooks into the argument on the Rollbox side
        <div className='dice-container'>
            <div id="all-dice" className="all-dice">
                {this.state.allDice}
            </div>
            <div>
                <form>
                        <textarea className='roll-field' rows='8' cols='100' type='text' name='rolls' value={this.state.allGlobalRolls}/>
                    <div>
                        <button className='clear-button'>Clear</button>
                    </div>
                </form>   
            </div>
        </div>
        )
    }
} 

export default DiceContainer;
