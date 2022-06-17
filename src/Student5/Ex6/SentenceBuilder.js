import React from "react";
 import { useRef, useState } from "react";
 import "./SentenceBuilder.scss";
 
 export const SentenceBuilder = (props) => {
   let inputRef = useRef(null);
   let [disable, setDisable] = useState();
   let [counter, setCounter] = useState(0);
   
   const onHandleClick = () => {
     inputRef.current.value = "jumps";
     setCounter(++counter);
   };
   
   const onReset = () => {
     inputRef.current.value = null;
   };

   return (
     <div className="sentence">
       <h1>Sentence Builder</h1>
       <p>Sentence: </p>
       <p>Word Counter:{props.message}</p> 
       {/* ===> you could use {counter} in place of {props.message} if you want to use the 'add word button' to count the number of times you hit the button */}
       <input ref={inputRef}  onChange={e => setDisable(e.target.value)}></input>
       <button onClick={() => onHandleClick()} disabled={!disable}>Add Word</button>
       <button onClick={() => onReset()}disabled={!disable}>Reset</button>
     </div>
   );
 };


  
 