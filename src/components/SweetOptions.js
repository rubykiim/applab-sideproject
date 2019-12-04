import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Cookie from '../svgs/cookies1.svg';
import Cake from '../svgs/cake.svg';
import BubbleTea from '../svgs/bubbletea.svg';
import IceCream from '../svgs/icecream.svg';
import Macarons from '../svgs/macarons.svg';

function SweetOptions() {
    return (
      <div>
        <div className="SweetOptions">
          <h1>What type?</h1>
          <Link to="/interface">
            {/* <p>Next</p> */}
          </Link>
        </div>

      <div class="Sweets"> 
        <div className="cookie">
          <Link to="/cookie">
          <img src={Cookie} alt="cookie"/>
          <h3>Cookie</h3>
          </Link>
        </div>
        <div className="cake">
          <Link to="/">
            <img src={Cake} alt="cake"/>
            <h3>Cake</h3>
          </Link>
        </div>
        <div className="pastry">
          <Link to="/pastry">
          <img src={Macarons} alt="macarons"/>
          <h3>Pastry</h3>
          </Link>
        </div>
        <div className="bubbletea">
          <Link to="/">
            <img src={BubbleTea} alt="bubbletea"/>
            <h3>Bubble Tea</h3>
            </Link>
        </div>
        <div className="icecream">
          <Link to="/">
            <img src={IceCream} alt="icecream"/>
            <h3>Ice Cream</h3>
          </Link>
        </div> 

      </div>
    </div>
    );
  }
  
export default SweetOptions;



