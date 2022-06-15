import React from "react";
/*import { Counter } from "./Counter";*/
import "./Tweets.scss";
import { useState } from 'react'

export const Tweets = (props) => {
    let [counter, setCounter] = useState(0)

    const onHandleClick = () => {
      setCounter (++counter)
    }
    return (
    <div className="Tweets">
      <div style={{ backgroundColor: props.color }}>
            {props.message}
         

         {counter}
        
        <button onClick={()=> onHandleClick()}>Like</button>
            
      </div>
      
    </div>
  );
};