import React from 'react';
import prunes from '../svgs/n_prunes.svg';
import HomeBtn from '../components/HomeBtn';

function Prunes() {
    return(
        <div>
            <HomeBtn></HomeBtn>
            <img src={prunes} alt=""/>
        </div>
    );
}

export default Prunes;