import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
// import SweetOptions from './components/SweetOptions';
// import Cookie from './components/Cookie';
// import Cards from './components/Cards';
import Cards2 from './components/Cards2';

function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/sweetOptions" component={SweetOptions} /> */}
        {/* <Route path="/cookie" component={Cookie} /> */}
        {/* <Route path="/cards" component={Cards}/> */}
        <Route path="/cards2" component={Cards2}/>
      </Switch>
    </Router>
  );
}

export default App;
