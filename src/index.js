import React from "react";
import ReactDOM from "react-dom";
import CheckBox from "./Components/CheckBox";
import "./style.css";
function MyApp() {
  let num = Math.floor(Math.random() * 100 + 1);
  const styles = {
    fontFamily: "monospace"
  };
  if (num % 2 === 0) styles.color = "red";
  else styles.color = "blue";
  return (
    <div>
      <h1> Random Number </h1>
      <h2 style={styles}> {num} </h2>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
