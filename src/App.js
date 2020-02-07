import React from 'react';

import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";

import Home from './Containers/Home'

import './App.css';

function App() {
  return (
    <Router basename={'/'}>
      <Switch>
          <Route exact path={"/home"} component={Home} />
          <Route component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
