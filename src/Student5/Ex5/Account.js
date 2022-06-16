import React from "react";
import { useState } from "react";
import "./Account.scss";

export const Account = (props) => {
  let [show, setShow] = useState();
  

  return (
    <div className="Account">
      <table>
        <thead>
          <tr>
            <th>
              <h1>Account Information</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Balance</td>
            <td>$ 100,000</td>
          </tr>
          <tr>
            <td>Interest</td>
            <td>%5.0</td>
          </tr>
          <tr>
            <td>Account Number</td>
            <td>
              <span>
                <div style={show ? {} : { display: "none" }}>{props.message}</div>
              </span>
            </td>
            <td>
              <button onClick={() => setShow(!show)}>Show ACC # </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
