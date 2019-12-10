import React from 'react';
import greekYogurt from '../svgs/n_greekyogurt.svg';
import HomeBtn from '../components/HomeBtn';

function GreekYogurt() {
    return(
        <div>
            <HomeBtn></HomeBtn>
            <img src={greekYogurt} alt=""/>
        </div>
    );
}

export default GreekYogurt;