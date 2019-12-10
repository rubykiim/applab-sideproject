import React from 'react';
import apple from '../svgs/n_apple.svg';
import HomeBtn from '../components/HomeBtn';

function Apple() {
    return(
        <div>
            <HomeBtn></HomeBtn>
            <img src={apple} alt=""/>
        </div>
    );
}

export default Apple;