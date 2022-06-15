import React from 'react'
import './Tweet.scss'

export const Tweet = (props) => {
    return (
        <div className="Tweet" style={{ backgroundColor: props.color }}>
            {props.message}
            <button onClick={() => { props.onClick() }}>Like</button>
        </div>
    )
}

