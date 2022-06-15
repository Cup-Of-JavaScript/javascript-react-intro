import React, { useState } from "react";
import { Tweet } from "./Tweet";
import "./Tweets.scss";

export const Tweets = (props) => {
  let [counter, setCounter] = useState(0);
  const onHandleClick = () => {
    setCounter(++counter);
  };

  return (
    <div className="Tweets">
      Total Likes: {counter}
      <Tweet
        message="It's payday!!!"
        color="green"
        onHandleClick={(n) => onHandleClick(n)}
      />
      <Tweet
        message="I just bought a new car!"
        color="yellow"
        onHandleClick={(n) => onHandleClick(n)}
      />
      <Tweet
        message="I just smashed my new car."
        color="red"
        onHandleClick={(n) => onHandleClick(n)}
      />
    </div>
  );
};
