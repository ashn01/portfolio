import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from './Components/Home'
import Test from './Components/testHome'

import './App.css';

function App() {
  return (
    <Router basename={'/'}>
      <Switch>
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/about"} component={Test} />
          <Route path="*" render={()=>(<Redirect to ="/home"/>)}/>
        </Switch>
    </Router>
  );
}

export default App;
