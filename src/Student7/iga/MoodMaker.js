import React from "react";
import { useState } from "react";
import "./MoodMaker.scss";

export const MoodMaker = () => {
    let [show, setShow] = useState();
    return (
        <div className="MoodMaker">
        <table>
          <thead>
          </thead>
          <tbody>
            <tr className = 'madColor'>
              <td>I am mad.</td>
              <td>
              <span>
                  <div style={show ? {} : { display: "red" }}></div>
                </span>
              </td>
              <td>
              <button onClick={() => setShow(!show)}>Mad</button>
              </td>
            </tr>
            <tr className = 'sadColor'>
              <td>I am sad.</td>
              <td>
                <span>
                  <div style={show ? {} : { display: "yellow" }}></div>
                </span>
              </td>
              <td>
                <button onClick={() => setShow(!show)}>Sad </button>
              </td>
            </tr>
            <tr className = 'happyColor'>
              <td>I am happy.</td>
              <td>
              <span>
                  <div style={show ? {} : { display: "green" }}></div>
                </span>
              </td>
              <td>
              <button onClick={() => setShow(!show)}>Happy </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}