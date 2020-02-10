import React from 'react';

import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";

import Home from './Components/Home'
import Test from './Components/testHome'

import './App.css';

function App() {
  return (
    <Router basename={'/'}>
      <Switch>
          <Route exact path={"/home"} component={Home} />
          <Route path={"/about"} component={Test} />
          <Route component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
