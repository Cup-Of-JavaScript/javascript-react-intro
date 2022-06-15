import React from 'react'
import {Tweets} from './Tweets'
import './Main.css'

export const Main = () => {
  return (
    <div className="Main">
        Total Likes: 
        {/* <span>{counter}</span> */}
        <Tweets />
        
    </div>

    
  )
}
