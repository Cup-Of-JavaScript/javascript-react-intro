import React from 'react'
import './Tweets.scss'
import { Tweet } from './Tweet'
import { useState } from 'react'


export const Tweets = () => {
    let [counter, setCounter] = useState(0);

    const onClick = () => {
        setCounter(++counter);

    }
    return (
        <div className="Tweets">
            <div>Total likes:{counter}</div>
            <Tweet message="It's payday!!!" color="green" onClick = {() => onClick ()}/>
            <Tweet message="I just bought a new car!" color="yellow" onClick = {() => onClick ()}/>
            <Tweet message="I just smashed my new car." color="red" onClick = {() => onClick ()}/>
        </div>
    )
}
