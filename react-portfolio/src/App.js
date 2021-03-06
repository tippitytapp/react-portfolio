import React from 'react';
import {Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"
import AboutMe from "./components/About"
import RecentProjects from './components/RecentProjects'
import Resume from "./components/Resume"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/"> <Home /></Route>
      <Route exact path="/recent"><RecentProjects/></Route>
      <Route exact path="/about"><AboutMe /></Route>
      <Route exact path="/resume"><Resume /></Route>
    </div>
  );
}

export default App;
