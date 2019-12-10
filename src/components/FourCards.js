import React, {Component} from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
// Color Cards
import GreenCard from '../svgs/greencard.svg';
import YellowCard from '../svgs/yellowcard.svg';
import BlueCard from '../svgs/bluecard.svg';
import PurpleCard from '../svgs/purplecard.svg';

// Option Cards
import Option1 from '../svgs/option1.svg';
import Option2 from '../svgs/option2.svg';
import Option3 from '../svgs/option3.svg';
import Option4 from '../svgs/option4.svg';
import Option5 from '../svgs/option5.svg';
import Option6 from '../svgs/option6.svg';
import Option7 from '../svgs/option7.svg';
import Option8 from '../svgs/option8.svg';

import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import HomeBtn from '../components/HomeBtn';

var Cards = [[
    Option1,
    Option2,
    Option3,
    Option4,
    Option5,
    Option6,
    Option7,
    Option8
],
[
    GreenCard,
    YellowCard,
    PurpleCard,
    BlueCard
]
]

class FourCards extends Component {
    constructor(props){
        super(props);
        this.state = {
            YellowCard:null,
            BlueCard:null,
            PurpleCard:null,
            GreenCard:null,
            fronts:[],
        }
        this.shuffle = this.shuffle.bind(this);
        this.cardShuffle = this.cardShuffle.bind(this);
        this.clickCard1 = this.clickCard1.bind(this);this.clickCard2 = this.clickCard2.bind(this);this.clickCard3 = this.clickCard3.bind(this);this.clickCard4 = this.clickCard4.bind(this);
        this.whatever = this.whatever.bind(this);  
    }
    componentDidMount(){
        this.cardShuffle();
    }
    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    whatever(){
        let tempCards = this.shuffle(Cards[0]);
        let front = this.shuffle(Cards[1]);
        this.setState({
            YellowCard:tempCards[0],
            BlueCard:tempCards[1],
            PurpleCard:tempCards[2],
            GreenCard:tempCards[3],
            fronts:front,
        })
    }
    cardShuffle(){
        this.setState({
            Card1:false,
            Card2:false,
            Card3:false,
            Card4:false
        })
        setTimeout(this.whatever
        , 400);
    }
    clickCard1(e){
        this.setState({Card1:!this.state.Card1});
        console.log(this.state)
    }
    clickCard2(e){
        this.setState({Card2:!this.state.Card2});
        console.log(this.state)
    }
    clickCard3(e){
        this.setState({Card3:!this.state.Card3});
        console.log(this.state)
    }
    clickCard4(e){
        this.setState({Card4:!this.state.Card4});
        console.log(this.state)
    }

    render() {
        return (
<div className="fourCards">
        {/* homeBtn */}
        <HomeBtn></HomeBtn>

        {/* navStack */}
        <Nav></Nav>        
    
    {/* Four Cards */}
    <div className="container">
        <div className="upperCards">
        {/* First Card */}
        <button onClick={this.clickCard1}>
            <Flippy
                isFlipped={this.state.Card1}
                flipDirection="horizontal"
                ref={(r) => this.flippy = r}
                style={{ width: '225px', height: '225px'}}
            >
                <FrontSide className="firstCard" style={{ width: '225px', height: '225px', padding: '0', cursor: "grab"}}>
                    <FrontSideImage source={this.state.fronts[0]}/>
                </FrontSide>
                <BackSide style={{ width: '225px', height: '225px', padding: '0', cursor: "grab"}}>
                    <BackSideImage source={this.state.GreenCard}/>
                </BackSide>
            </Flippy>
        </button>
        
        {/* Second Card */}
        <button onClick={this.clickCard2}>
            <Flippy
                isFlipped={this.state.Card2}
                flipDirection="horizontal" 
                ref={(r) => this.flippy = r} 
                style={{ width: '225px', height: '225px'}}
            >
                <FrontSide className="secondCard" style={{width: '225px', height: '225px', padding: '0', cursor: "grab"}}>
                    <FrontSideImage source={this.state.fronts[1]}/>
                </FrontSide>
                <BackSide style={{ width: '225px', height: '225px', padding: '0', cursor: "grab"}}>
                <BackSideImage source={this.state.YellowCard}/>
                </BackSide>
            </Flippy>  
        </button>
        </div>
    
        <div className="lowerCards">
        {/* Third Card */}
        <button onClick={this.clickCard3}>
            <Flippy
                isFlipped={this.state.Card3}
                flipDirection="horizontal" 
                ref={(r) => this.flippy = r} 
                style={{ width: '225px', height: '225px'}}>
                <FrontSide className="thirdCard" style={{ width: '225px', height: '225px', padding: '0', cursor: "grab"}}>
                    <FrontSideImage source={this.state.fronts[2]}/>
                </FrontSide>
                <BackSide style={{ width: '225px', height: '225px', padding: '0', cursor: "grab"}}>
                    <BackSideImage source={this.state.BlueCard}/>
                </BackSide>
            </Flippy>   
        </button>

        {/* Fourth Card */}
        <button onClick={this.clickCard4}>
            <Flippy
                isFlipped={this.state.Card4}
                flipDirection="horizontal" 
                ref={(r) => this.flippy = r} 
                style={{ width: '225px', height: '225px'}}>
                <FrontSide className="fourthCard" style={{ width: '225px', height: '225px', padding: '0', cursor: "grab"}}>
                 <FrontSideImage source={this.state.fronts[3]}/>
                </FrontSide>
                <BackSide style={{width: '225px', height: '225px', padding: '0', cursor: "grab"}}>
                    <BackSideImage source={this.state.PurpleCard}/>    
                </BackSide>
             </Flippy>
        </button>

        </div>
        <p className="shuffleBtn" onClick={this.cardShuffle}>SHUFFLE</p>
        </div>
</div>
        )    
    }
}

function FrontSideImage(props) {
    return(
        <div>
            <img src={props.source} alt="option"/>
        </div>
    );
}

function BackSideImage(props) {
    return(
        <div>
            <img src={props.source} alt="option"/>
        </div>
    );
}

export default FourCards;