import { useState } from 'react';
import './ShowHide.scss'
import React from 'react'

export const ShowHide = (props) => {
    let [show, setShow] = useState(false);
    let [enableInput, setEnableInput] = useState(true);
  return (
    <div style={show ? {} : {display:'none'}}>
        <button onClick={() => setShow(!show)}>Push</button>
            {
                show && 
                <div>
                
                    <button onClick={()=> setEnableInput(!enableInput)}>Push</button>
                    <input disabled={enableInput}></input>
                </div>
            }

    </div>
  )
}
