import React from "react";
import "./App.scss";

//COMPONENTS
import Projects from './pages/Projects.js';
import Header from "./components/Header";
import Contact from './pages/Contact.js';

import CVBILDEN from './images/cvPics/cv/pl.png';

//ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/cv" component={PersCV} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function PersCV() {
  return <img style={{boxShadow: "0px 0px 30px black"}} src={CVBILDEN} width="500px" alt="cv"></img>
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          Hi! My name is Philip Löfgren and im a <b>FRONTEND-DEVELOPER</b>.<br></br> 
          At the moment working at Caspeco as an intern, but looking for a full-time job.
        </h5>
      </div>

      <div style={{width: "50%",}}>
        <p style={{marginLeft: "45px"}}>Frontend</p>
        <ul style={{display: "flex", flexDirection: "row", listStyle: "none",}}>
          <li style={{marginRight: "15px", marginLeft:"3px"}}>React</li>
          <li style={{marginRight: "15px"}}>Typescript</li>
          <li style={{marginRight: "15px"}}>Javascript</li>
          <li style={{marginRight: "15px"}}>Graphql</li>
          <li style={{marginRight: "15px"}}>Redux</li>
        </ul>
      </div>
      <div style={{width: "50%",}}>
        <p style={{marginLeft: "45px"}}>Backend</p>
        <ul style={{display: "flex", flexDirection: "row", listStyle: "none",}}>
          <li style={{marginRight: "15px", marginLeft:"3px"}}>Node</li>
          <li style={{marginRight: "15px"}}>MongoDB</li>
          <li style={{marginRight: "15px"}}>Express</li>
        </ul>
      </div>
    </div>
  );
}
export default App;