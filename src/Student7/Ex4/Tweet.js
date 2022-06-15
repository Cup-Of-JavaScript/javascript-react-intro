import React from 'react'
import { useState } from 'react';
import './Tweet.scss'


export const Tweet = (props) => {
    let [counter, setCounter] = useState(0); 

    const onClick = () => {
        setCounter((counter + 1));
    }


    return (
        <div className="Tweets" style={{backgroundColor: props.color}}>
           {props.message} 
           <button onClick={() => { onClick() }}>Like</button>
           <span>{counter}</span>
        </div>
    )
}