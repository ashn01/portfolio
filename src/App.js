import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import MainContainer from './Components/MainContainer'

import './App.css';

function App() {
  return (
    <Router basename={'/'}>
      <Switch>
          <Route exact path={"/home"} render={(props)=> <MainContainer contents="home"/>} />
          <Route path={"/home:id"} render={(props)=> <MainContainer contents="project" id={props.match.params.id}/>} />
          <Route exact path={"/about"} render={(props)=> <MainContainer contents="about"/>} />
          <Route path="*" render={()=>(<Redirect to ="/home"/>)}/>
        </Switch>
    </Router>
  );
}

export default App;
