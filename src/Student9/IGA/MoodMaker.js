import React from 'react'
import './MoodMaker.scss'

export const MoodMaker = (props) => {
    return (
        <div className="Tweet" style={{ backgroundColor: props.color }}>
          {props.message}
          <button onClick={() => { props.onClick() }}>happy</button><button onClick={() => { props.onClick() }}>sad</button><button onClick={() => { props.onClick() }}>mad</button>
        </div>
    )
}

