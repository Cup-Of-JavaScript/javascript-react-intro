import React from 'react'
import './Account.scss'
import { useState } from 'react';


export const Account = () => {
  let [show, setShow] = useState(false);
  let [enableInput, setEnableInput] = useState(true);

  return (
    <div>
      <table>
        <tr>
          <th>Account Information</th>
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
            <td>
              <div style={!show ? {} : { display: 'none' }}>
                <button onClick={() => {setShow(!show); setEnableInput("Hide");}}>
                  {enableInput}
                </button>
              </div>
              <div style={show ? {} : { display: 'none' }}>
                11-1234
                <button
                  onClick={() => {setShow(!show);setEnableInput("Show");}}>
                  {enableInput}
                </button>
              </div>
            </td>
        </tr>
      </table>
  </div>
  )
}
