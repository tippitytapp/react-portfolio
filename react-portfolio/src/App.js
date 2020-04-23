import React from 'react';
import {Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"
import RecentProjects from './components/RecentProjects'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/"> <Home /></Route>
      <Route exact path="/recent"><RecentProjects/></Route>
    </div>
  );
}

export default App;
