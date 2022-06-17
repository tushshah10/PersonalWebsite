import React from "react";
import ReactDOM from "react-dom";
import ButtonMailto from "./ButtonMailto";
function Contact()
{
    return(
        <div id="contact">
            <ul id="cme">You can contact me at the following places:</ul>
            <li><p><a href="https://www.linkedin.com/in/tusharshah10/">LinkedIn</a> -Tushar Shah</p></li>
            <li><p><a href="https://www.instagram.com/tusharshah10/">Instagram</a> @tusharshah10</p></li>
            <li><p><a href="https://twitter.com/TushShah10">Twitter</a> @tushshah10</p></li>
            <li><p><a href="https://medium.com/@tushshah10">Medium</a> @tushshah10</p></li>
            <li><p><a href="https://github.com/tushshah10">GitHub</a> @tushshah10</p></li>
            <li><p><ButtonMailto label="Write me an E-Mail" mailto="mailto:tushshah10@gmail.com" /></p></li>
            <li><p>Phone- +91 8939019360</p></li>
            
        </div>
        
    );
}

export default Contact;