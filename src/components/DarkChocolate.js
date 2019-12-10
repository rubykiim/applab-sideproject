import React from 'react';
import darkChocolate from '../svgs/n_darkchocolate.svg';
import HomeBtn from '../components/HomeBtn';

function DarkChocolate() {
    return(
        <div>
            <HomeBtn></HomeBtn>
            <img src={darkChocolate} alt=""/>
        </div>
    );
}

export default DarkChocolate;