import './Tweet.scss'

export const Tweet = (props) => {
  return (
    <div className="Tweet" style={{backgroundColor: props.color}}>
      {props.message}
      {props.color}
    </div>      
  )
}

