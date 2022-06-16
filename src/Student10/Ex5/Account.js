import React from "react";
import { useState } from "react";

export const Account = () => {
  let [show, setShow] = useState(false);
  let [buttonText, setButtonText] = useState('Show');

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Account Information</th>
          </tr>
        </thead>
        <tbody>
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
              <div style={!show ? {} : { display: "none" }}>
                <button
                  onClick={() => {
                    setShow(!show);
                    setButtonText("Hide");
                  }}
                >
                              {buttonText}
                </button>
              </div>
              <div style={show ? {} : { display: "none" }}>
                11-1234
                <button
                  onClick={() => {
                    setShow(!show);
                    setButtonText("Show");
                  }}
                >
                  {buttonText}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
