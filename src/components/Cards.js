import React, {useState} from 'react';
import GreenCard from '../svgs/greencard.svg';
import YellowCard from '../svgs/yellowcard.svg';
import BlueCard from '../svgs/bluecard.svg';
import PurpleCard from '../svgs/purplecard.svg';
import { Link } from 'react-router-dom';

let colorCards ={
    greenC: '../svgs/greencard.svg',
    yellowC: '../svgs/yellowcard.svg',
    blueC: '../svgs/bluecard.svg',
    purpleC: '../svgs/purplecard.svg'
}

function Cards() {
    // card flip
    const [side,setSide] = useState("front");
    function flipCard() {
        if (side === "front") {
            setSide("back");
        } else {
            setSide("front");            
        }; 
    }
    
    // shuffle w/ button 
    function shuffleCards() {
        // let randomNum = Math.floor(Math.random()* colorCards.length);
        // const idx = colorCards[randomNum];
        // console.log(idx);
        // return idx;
        const keys = Object.keys(colorCards);
        const randomKeys = keys[Math.floor(Math.random()*keys.length)]
        const colorCardLocation = colorCards[randomKeys];
        // console.log(colorCardLocation);
    }

    return (
        <div className="Cards">
            <Link to="/"> 
                <div className="homeBtn">
                <h2>HOME</h2>
                </div> 
            </Link> 
            <ColorCardSet click={flipCard}/>
            <p className="shuffleBtn" onClick={shuffleCards}>SHUFFLE</p>
        </div>
    );
}

function ColorCardSet(props) {
    return(
        <div className="ColorCardSet">
            <div className="container">
             <div className="uppercards">
                <img onClick={props.click} src={GreenCard} alt="green card"/>
                <img onClick={props.click} src={YellowCard} alt="yellow card"/>
             </div>
             <div className="lowercards">
                <img onClick={props.click} src={BlueCard} alt="blue card"/>                    
                <img onClick={props.click} src={PurpleCard} alt="purple card"/>
             </div>
            </div>
        </div>
    );
}

function HealthyOptions() {
    return(
        <div>
            <p>v</p>
        </div>
    );
}

export default Cards;