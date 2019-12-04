import React from 'react';

function ProgressBar() {
    return(
        <div>
            <OuterBar />
        </div>
    );
}

function OuterBar() {
    return(
        <div className="outerBar"></div>
    );
}

function InnerBar() {
    return(
        <div className="innerBar"></div>
    );
}

export default ProgressBar;