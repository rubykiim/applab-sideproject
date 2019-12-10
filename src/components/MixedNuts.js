import React from 'react';
import mixedNuts from '../svgs/mixednuts.svg';
import HomeBtn from '../components/HomeBtn';

function MixedNuts() {
    return(
        <div>
            <HomeBtn></HomeBtn>
            <img src={mixedNuts}></img>
        </div>
    );
}

export default MixedNuts;