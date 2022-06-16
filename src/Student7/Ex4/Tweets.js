import React from 'react'
import { useState } from 'react'
import {Tweet} from './Tweet'
import './Tweets.scss'

export const Tweets = () => {
    let [counter, setCounter] = useState(0);
    const onHandleClick = () => {
    setCounter(counter + 1);
    }
    
    return (
        <div className="Tweets">
             Total Likes: {counter}
            <Tweet message="It's payday!!!" color="green" onHandleClick= { () => onHandleClick() } />
            <Tweet message="I just bought a new car!" color="yellow" onHandleClick= { () => onHandleClick() }  />
            <Tweet message="I just smashed my new car." color="red" onHandleClick= { () => onHandleClick() } />
        </div>
    )
}