import React from 'react'


 
export const Tweet = (props) => {
        
  return (
    <div className='Tweet' style={{ backgroundColor: props.color }}>
        {props.message}
        <button onClick={() => props.onHandleClick()}> Like</button> 
    </div>
  )
}
