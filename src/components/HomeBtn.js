import React from 'react';
import { Link } from 'react-router-dom';

function HomeBtn() {
    return(
        <div>
        <Link to="/"> 
            <div className="homeBtn">
                <h2>HOME</h2>
            </div> 
        </Link> 
        </div>
    );
}

export default HomeBtn;