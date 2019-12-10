import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import FourCards from './components/FourCards';

// Nutrition Info
// import Apple from './components/Apple';
// import Prunes from './components/Prunes';
// import MixedNuts from './components/MixedNuts';
// import Apricot from './components/Apricot';
// import DarkChocolate from './components/DarkChocolate';
// import GreekYogurt from './components/GreekYogurt';
// import Cookie from './components/Cookie';

function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fourcards" component={FourCards}/>

        {/* <Route path="/apple" component={Apple}/>
        <Route path="/prunes" component={Prunes}/> 
        <Route path="/mixednuts" component={MixedNuts}/> 
        <Route path="/darkchocolate" component={DarkChocolate}/>
        <Route path="/apricot" component={Apricot}/>
        <Route path="/greekyogurt" component={GreekYogurt}/> 
        <Route path="/cookie" component={Cookie}/> */}
      </Switch>
    </Router>
  );
}

export default App;
