import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
const fullDateTime = date.toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

let greeting;
let imgSrc = "";
let msg;

const customStyle = {
  color: "",
};
if (currentTime < 12) {
  greeting = "Good Morning ";
  customStyle.color = "red";
  msg = "It's Time to WakeUp";
  imgSrc =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyn7fjxVJZQ3Yp_qQ-bcg4c_Ls_6FQyX9UkA&s ";
} else if (currentTime < 18) {
  greeting = "Good Afternoon ";
  customStyle.color = "blue";
  msg = "It's Time to Work";
  imgSrc =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3nf5hR8tFG1-zlQavzvE3Ee8R9NVZZbiWA&s";
} else {
  greeting = "Good Night";
  customStyle.color = "green";
  msg = "It's Time to Sleep";
  imgSrc =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWBKUOctAJIawhDHChNDkfrK1YLdf_rvJzQ&s";
}

ReactDOM.render(
  <div className="heading">
    <h1>Welcome To Dynamic WebPage With React </h1>
    <hr />
    <h2 className="date">{fullDateTime} </h2>
    <h3 style={customStyle}>
      {greeting} {msg}
    </h3>

    <img className="img" src={imgSrc} />
  </div>,

  document.getElementById("root")
);
