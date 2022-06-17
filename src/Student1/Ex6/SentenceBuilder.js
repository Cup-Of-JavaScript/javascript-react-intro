import React from 'react'
import { useState, useRef } from 'react';
import './SentenceBuilder.scss'

export const SentenceBuilder = (props) => {
    let inputRef = useRef('')
    //let initialValue = useRef(props.initialValue);
    let [sentence, setSentenceBuilder] = useState(props.initialValue); 
  
    const onClick = () => {
      setSentenceBuilder(sentence);
  
    }

    const onReset = () => {
       setSentenceBuilder(''); 
    }

    const onChange = (inputText) => {
        setSentenceBuilder(inputText); 
    }

  return (
    <div>
        <table>
          <tbody>
          <tr>
            <td>
              <h1>Sentence Builder</h1>
            </td>
          </tr>
          <tr>
            <td>
              Sentence: The quick brown fox
            </td>
          </tr>
          </tbody>
        </table>
        <div className="Words">
        <input type={onChange} ref={inputRef} value={sentence} onChange={e => onChange(e.target.value)}></input>
            <button onClick={() => onClick()}>Add Word</button>
            <button onClick={() => onReset()}>Reset</button>
        </div>

    </div>
  )
}
