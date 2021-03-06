import React, {useState} from 'react';
import Die from './Die.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toast, Row, Col} from 'react-bootstrap';



class DiceContainer extends React.Component {
     
    state= {
        seedrandom: require('seedrandom'),
        diceTypes: [
            {dx: 100, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1920w/products/3040/7416/d10-tens-dice-black-gold__06083.1530125950.jpg?c=2'}, 
            {dx: 20, img: 'https://cdn.shopify.com/s/files/1/1219/8174/products/4Pack_White1.png?v=1509744731'}, 
            {dx: 12, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1280x1280/products/572/7525/d12-blue-dice__82474.1531855998.jpg?c=2&imbypass=on'},
            {dx: 10, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1920w/products/538/7417/d10-black-chessex-dice__18220.1530126200.jpg?c=2'},
            {dx: 8, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1920w/products/536/7427/d8-dice-white__61297.1530246414.jpg?c=2'},
            {dx: 6, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/350x350/products/858/7565/d6-numeral-blue__98523.1534964316.jpg?c=2'}, 
            {dx: 4, img: 'https://cdn11.bigcommerce.com/s-70184/images/stencil/1280x1280/products/2921/7122/opaque-white-d4-top-read__52815.1522120166.jpg'}
        ],
        allGlobalRolls: [],
        allToasts: [],
        allDice: [],
    }

    componentDidMount() {
        this.setState({allDice: this.state.diceTypes.map(die => 
            <Die
                dx={die.dx}
                img={die.img}
                addToRollBox={this.addToRollBox}
            />
            )})
        this.setState({allToasts: 
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">Click any dice to roll!</strong>
                    </Toast.Header>
                    <Toast.Body>Do it!</Toast.Body>
                </Toast>}
        )
        console.log(this.state.allToasts)
    }

    addToRollBox = roll => {
        let newRolls = this.state.allGlobalRolls
        newRolls.unshift(roll)
        this.setState({allGlobalRolls: newRolls})
        this.setState({allToasts: this.state.allGlobalRolls.map(roll =>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">{roll.roll}</strong>
                </Toast.Header>
                <Toast.Body>{roll.outcome}</Toast.Body>
            </Toast>)})        
        // console.log(this.state.allGlobalRolls)
        // console.log(newRolls)
    }

    render(){
        return(
            //It turns out the css problem was that flex started at the ege of the roll field. Perhaps seperate them so that
            //roll field isn't a child of dice container? 
            <div className='dice-container'>
                 <Row className='all-dice'>
                {/* <div id="all-dice" className="all-dice"> */}
                    {this.state.allDice}
                {/* </div> */}
                {/* <div className='toasts'> */}
                </Row>
                <div className='toasts'>
                    <Col>
                        {this.state.allToasts}
                        {/* {this.state.allToasts} */}
                        {/* <form>
                                <textarea className='roll-field' rows='8' cols='180' type='text' name='rolls' value={this.state.allGlobalRolls}/>
                            <div>
                                <button className='clear-button'>Clear</button>
                            </div>
                        </form>    */}
                    {/* </div> */}
                    </Col>
                </div>
            </div>
        )
    }
} 

export default DiceContainer;
