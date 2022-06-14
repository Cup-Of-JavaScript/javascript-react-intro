import React from 'react'
import './Tweets.scss'
import {Tweet} from './Tweet.scss'

export const Tweets = () => {
    return (
        <div className="Tweets">
            <Tweet message="It's payday!!!" color="green" />
            <Tweet message="I just bought a new car!" color="yellow" />
            <Tweet message="I just smashed my new car." color="red" />
        </div>
    )
}
