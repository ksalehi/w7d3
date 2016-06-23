const React = require("react");
const ReactDOM = require("react-dom");

const Organ = require("./components/organ.jsx");

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Organ />, document.getElementById("content"));
});
