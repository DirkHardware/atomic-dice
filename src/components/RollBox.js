import React, {useState} from 'react';
import App from '../App.css' 

function RollBox() {

    return(
        <div> 
            <form>
                <textarea className='roll-field' rows='8' cols='100' type='text' name='rolls' value={50}/>
                <div>
                    <button className='clear-button'>Clear</button>
                </div>
            </form>    
        </div>
    )

}

export default RollBox;