import React from "react";

import "./Tweets.scss";

export const Tweets = (props) => {
  return (
    <div className="Tweets">
      <div style={{ backgroundColor: props.color }}>
        {props.message}
      </div>
    </div>
  );
};
