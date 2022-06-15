import React from 'react'
import {Tweets} from './Tweets'
import './Main.css'

export const Main = () => {
  return (
    <div className="Main">
        Tweet Storm
        <Tweets message="It's payday!!!" color="green"/>
        <Tweets message="I just bought a new car!" color="yellow" />
        <Tweets message="I just smashed my new car." color="red" />
        
    </div>

    
  )
}
