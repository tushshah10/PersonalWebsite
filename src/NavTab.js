import React from "react";
import ReactDOM from "react-dom";
import{
    Link,
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

function NavTab()
{
  return(
    <nav>
      <Link to="/" class="Navigation"> Home</Link> 
      <Link to="/About" class="Navigation"> About</Link>  
      <Link to="/User" class="Navigation"> Resume</Link>
      <Link to="/Contact" class="Navigation"> Contact me</Link>
      
          
      </nav>
  );
}
export default NavTab;