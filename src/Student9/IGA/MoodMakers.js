import React from 'react'
import './MoodMakers'
import { MoodMaker } from './MoodMaker'
import { useState } from 'react'


export const MoodMakers = () => {
    let [counter, setCounter] = useState(0);

    const onClick = () => {
        setCounter(++counter);

    }
    return (
        <div className="MoodMakers">
            <div>MoodMaker</div>
            <MoodMaker message="I am happy." color="green" onClick = {() => onClick ()}/>
            <MoodMaker message="I am sad." color="yellow" onClick = {() => onClick ()}/>
            <MoodMaker message="I am mad." color="red" onClick = {() => onClick ()}/>
        </div>
    
    )

}
