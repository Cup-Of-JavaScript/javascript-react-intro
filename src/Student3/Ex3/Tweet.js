import React from 'react'



export const Tweet = (props) => {
    return (
        <div className="Tweets" style={{backgroundColor: props.color}}>
           {props.message} 
        </div>
    )
}