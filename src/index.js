// var React =require("react");
// var ReactDom = require("react-dom");
// const { default: App } = require("./App");
// const name =document.getElementById('nam');
import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>)

// ReactDOM.render( 
//     <App/> 
// , document.getElementById("root"));
   