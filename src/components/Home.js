import React from 'react';
import logo from '../svgs/cravingforcookie.svg';
import bittenCookie1 from '../svgs/cookies1.svg';
import bittenCookie2 from '../svgs/cookies2.svg';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="Home">
        <div className="logoandbtn">
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <Link to="/cards2"><p>YES</p></Link>
            <h3>Guess your <span>Healthier Sweets</span> every day!</h3>
        </div>
            
        <img className="bCookie1" src={bittenCookie1} alt="bittencookie" />
        <img className="bCookie2" src={bittenCookie2} alt="bittencookie"/>
      </div>
    );
}
  
export default Home;
