import React, {useState} from 'react';
import './App.css';

function App() {
  const [showPg, setShowPg] = useState(false);

  function handleClicked() {
    setShowPg(true);
  }
  
  return (
    <div className="App">
      {!showPg && <Home onClick={handleClicked} />}
      {showPg && <Page />}
    </div>
  );
}

function Home(props) {
  return (
    <div className="header">
    <h1 id="firstHeader">Cookie</h1>
    <h1 id="secondHeader">Challenge</h1>
    <button onClick={props.onClick}>Start</button>
  </div>
  );
}

function Page() {
  return (
    <div>
      <h1></h1>
      <input placeholder="Enter the date" type="text"/>
    </div>
  );
}

export default App;
