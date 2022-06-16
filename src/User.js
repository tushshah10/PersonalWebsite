import React from "react";
import ReactDOM from "react-dom";
import{
    Link,
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import image2 from "./0001.png";
import './index.css';

function User1(){
    return(
        <div>
        <h1> Resume Page</h1>
        <p id="respage">Here is my single page resume with the most relevant work experiences placed here</p>
        <img id="resume" src={image2}  />
        <footer>Designed by Tushar Shah, developed using React, inline CSS, external CSS and HTML elements
            </footer>
        </div>
    );
}

export default User1;



