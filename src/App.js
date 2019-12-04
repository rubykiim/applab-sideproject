import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
// import SweetOptions from './components/SweetOptions';
// import Cookie from './components/Cookie';
import Cards from './components/Cards'

function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/sweetOptions" component={SweetOptions} /> */}
        {/* <Route path="/cookie" component={Cookie} /> */}
        <Route path="/cards" component={Cards}/>
      </Switch>
    </Router>
  );
}

export default App;
