import React, {useState} from 'react';

function Die({range, seed, dx}) {

    const [value, setValue] = useState('')

    function handleClick(e) {
        e.preventDefault();
        console.log(dx)
    }

    function roll(maxnum) {
         let i = Math.round(range() * 20)
         if(i === 0) {
             roll ++
         }
         return i
    }

    // let roll = Math.round(range() * 20)

    return(
        <div>
            <img className='die-img' src='https://cdn.shopify.com/s/files/1/1219/8174/products/4Pack_White1.png?v=1509744731' onClick={handleClick}/>
            {range}
            {roll(dx)}
        </div>
    );

}

export default Die;