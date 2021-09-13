import React from "react";
import Navbar from "./components/Navbar";
import StickyLeftNav from "./components/StickyLeftNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <StickyLeftNav />
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
