import React from 'react'
import './Tweets.scss'

const style1 = {
    tweet1: {
        backgorund: 'green',
    }, 
    tweet2: {
        backgorund: 'yellow',
    },
    tweet2: {
        backgorund: 'red',
    },
};

export const Tweets = (props) => {
    return (
        <div className="Tweets" style={style1.tweet1}>
           {props.message} 
        </div>
    )
}