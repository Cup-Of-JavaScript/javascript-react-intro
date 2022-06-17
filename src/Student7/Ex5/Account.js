import React from 'react'
import './Account.scss'
import { useState } from "react";


export const Account = () => {
  // let [show, setShow] = useState(false);
  // let [buttonText, setButtonText] = useState(true);
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
          <td>11-1234</td>
        </tr>
      </table>
  </div>
  )
}
