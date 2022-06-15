import React from "react";
import { Tweet } from "./Tweet";
import "./Tweets.scss";
import { useState } from "react";

export const Tweets = () => {
  let [counter, setCounter] = useState(0);

  const onHandleClick = () => {
    setCounter(++counter);
  };

  return (
    <div className="Tweets">
      <div> Total Likes:{counter} </div>
      <Tweet
        message="It's payday!!!"
        color="green"
        onHandleClick={() => onHandleClick()}
      />
      <Tweet
        message="I just bought a new car!"
        color="yellow"
        onHandleClick={() => onHandleClick()}
      />
      <Tweet
        message="I just smashed my new car."
        color="red"
        onHandleClick={() => onHandleClick()}
      />
    </div>
  );
};
