import React from 'react'


 
export const Tweet = (props) => {
        
  return (
    <div className='Tweet' style={{ backgroundColor: props.color }}>
        {props.message}
        <button onClick={() => props.onHandleClick(props.message * 2)}> Like</button> 
    </div>
  )
}
