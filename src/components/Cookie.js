import React from 'react';
import cookie from '../svgs/n_cookie.svg';
import HomeBtn from '../components/HomeBtn';

function Cookie() {
    return(
        <div>
            <HomeBtn></HomeBtn>
            <img src={cookie}></img>
        </div>
    );
}

export default Cookie;