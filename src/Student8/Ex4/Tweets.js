
import React, { useState } from 'react'
import './Tweets.scss'
import { Tweet } from './Tweet'

export const Tweets = (props) => {
    let [counter, setCounter] = useState(0);
    const onHandleClick = () => {
        setCounter(++counter);
    }

    return (
        <div className="Tweets">
            Total Likes: {counter}
            <Tweet message="It's payday!!!" color="green" onHandleClick={() => onHandleClick()} />
            <Tweet message="I just bought a new car!" color="yellow" onHandleClick={() => onHandleClick()} />
            <Tweet message="I just smashed my new car." color="red" onHandleClick={() => onHandleClick()} />
        </div>
    )
}

