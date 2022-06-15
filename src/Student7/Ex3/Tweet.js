import React from 'react'
import './Tweet.scss'


export const Tweet = (props) => {
    return (
        <div className="Tweets" style={{backgroundColor: props.color}}>
           {props.message} 
        </div>
    )
}