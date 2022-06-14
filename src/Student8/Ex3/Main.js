import React from 'react'
import './Main.css'
import { Tweets } from './Tweets'

export const Main = () => {
  return (
    <div className="Tweets">
      <div>Tweet Storm</div>
      <Tweets message="It's payday!!!" color="green" />
      <Tweets message="I just bought a new car!" color="yellow" />
      <Tweets message="I just smashed my new car." color="red" />
    </div>
  )
}
