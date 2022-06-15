import { render } from '@testing-library/react'
import React from 'react'
import './Tweet.scss'

export const Tweet = (props) => {
    return (
        <div className="Tweet">
         {props.message}
         {props.color}
        </div>
    )
}

