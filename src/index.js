import React from "react";
import ReactDOM from "react-dom/client";

// JAVASCRIPT APPROACH
/* const heading = document.createElement("h1");
 * heading.innerHTML = "Hello World From JavaScript!";
 * const root = document.getElementById("root");
 * root.appendChild(heading);
 */

// REACT APPROACH
const heading = React.createElement(
  "h1",
  { id: "headings" },
  "Hello World From React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//Replicate the html
/* 
<div id="parent">
    <div id="child">
        <h1>I'm H1</h1>
        <h2>I'm H2</h2>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1"),
    React.createElement("h2", { id: "child" }, "I'm H2"),
  ])
);

root.render(parent);
