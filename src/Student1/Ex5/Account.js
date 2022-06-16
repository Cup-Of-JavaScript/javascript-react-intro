import React from "react";
import { useState } from 'react';
import "./Account.scss";


export const Account = () => {
  let [show, setShow] = useState("Show");
  let buttonText = show ? "Hide" : "Show";

  const handleOnClick = () => {
    setShow(!show)
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><h1>Account Information</h1></td>
            </tr>
          <tr>
            <td>Balance</td>
            <td>$100,000</td>
          </tr>
          <tr>
            <td>Interest</td>
            <td>%5.0</td>
          </tr>
          <tr>
            <td>Account Number</td>
            {
              show &&
              <td style={show ? {} : { display: 'none' }}>
                11-1234
              </td>
            }
              <td>
                <button onClick={() => handleOnClick()}>{buttonText}</button>
              </td>
          </tr>
          </tbody>
      </table>
    </div>
  )
}