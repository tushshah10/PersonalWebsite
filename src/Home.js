import React from "react";
import ReactDOM from "react-dom";
import{
    Link,
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import image1 from "./Dp new.jpg";
import styles from "./styles"
import Image from './Image'
function Home()
{

    return(
        <>
        <div>
            <Image width="250px"/>
            <h1 id="mainheader">Tushar Shah</h1>
            <p>I am currently a computer science student interested in the domains of management, business and entrepreneurship.
                I have worked at multiple companies and even started my own companies during the pandemic to learn more about these domains and hone my skills.
                I enjoy communicating with people and learning from their experiences tremendously. 
                This website has been developed to demonstrate my skills and also use this as a reference point for anyone wanting to reach me or know my journey.<br></br><br></br>
                Here is a brief overview of this website:<br></br><br></br>
                <ul>
             <li><a href="/about">About page </a> </li>
              - Information about my life so far and how I spent my time in college. <br></br><br></br>
             <li><a href="/resume">Resume page </a></li>- Information about my professional career so far, my detailed work-ex and type of work I have engaged in so far.<br></br><br></br>
             <li><a href="/contact">Contact page </a></li> - My contact details, please feel free to reach out to me if I can be of any help </ul></p>
            
            <footer>Designed by Tushar Shah, developed using React, inline CSS, external CSS and HTML elements
            </footer>
        </div>
        </>
    );
}

export default Home;