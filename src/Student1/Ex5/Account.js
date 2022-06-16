import React from "react";
import { useState } from 'react';
import "./Account.scss";


export const Account = () => {
  let [show, setShow] = useState("Show");
  let [buttonText, setButtonText] = useState("Hide");

  return (
    <div>
      <table>
        <thead>
          <h1>Account Information</h1>
        </thead>
        <tbody>
          <tr>
            <td>Balance</td> &nbsp;
            <td>$100,000</td>
          </tr>
          <tr>
            <td>Interest</td>
            &nbsp;
            <td>%5.0</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Account Number</td>
            &nbsp;
            <span>
              {
                show &&
                <div style={show ? {} : {display:'none'}}>
                  {show ? "11-1234" : ""}
                </div>
              }
              &nbsp;
            </span>
            <td>
              <td>
                <button onClick={() => setShow(!show)}>{buttonText}</button>
              </td>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}