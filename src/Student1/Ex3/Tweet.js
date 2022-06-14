import './Tweet.scss'

export const Tweet = (props) => {
    return (
        <div className="Tweet">
         {props.message}
         {props.color}
            
        </div>
    )
}