import React from "react";
import ReactDOM from "react-dom";
import{
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

import About from "./About";
import Home from "./Home";
import NavTab from "./NavTab";
import User1 from "./User";
import Topic from "./Topic";
import Contact from "./Contact";
import {Helmet} from "react-helmet";

function App()
{
  return(
    <Router>
      <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Tushar Shah</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Personal Website" />
            </Helmet>
      <NavTab />
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/User">
            <User1 />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;