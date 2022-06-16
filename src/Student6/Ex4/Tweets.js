import {React, useState} from 'react'
import './Tweets.scss'
import {Tweet} from './Tweet'


export const Tweets = (props) => {
 let [count, setCount] = useState(0);
 
 const onClick = () => {setCount(++count)}

 
 return (
    <div className="Tweets">
        Total Likes: {count}

        <Tweet message = "It's payday!!!" color ="green" onClick={()=>onClick()} />
        <Tweet message = "I just bought a new car!" color="yellow" onClick={()=>onClick()} />
        <Tweet message = "I just smashed my new car." color="red" onClick={()=>onClick()} />

    </div>
  )
}