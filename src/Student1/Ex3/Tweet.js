import { render } from '@testing-library/react'
import React from 'react'
import './Tweet.scss'

export const Tweet = (props) => {
    return (
        <div className="Tweet" style = {{backgroundColor: props.color}}>
         {props.message}
        </div>
    )
}

