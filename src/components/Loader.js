import React from "react";
import logo from "../logo.svg";

export default function Loader({ text }) {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      {text ? <h1>{text}</h1> : ""}
    </div>
  );
}
