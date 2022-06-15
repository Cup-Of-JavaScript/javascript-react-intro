import React from 'react'
import './Tweets.scss'

export const Tweets = (props) => {
    return (
        <div className="Tweets">
           {props.message} 
        </div>
    )
}