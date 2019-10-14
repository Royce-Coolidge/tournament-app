import React from 'react';
import './champion.scss';

const championes = () => {
    let { champion } = this.props;

    let strHTML = '';
    let vtop = 0;
    let vleft = 0;

    const style = {
        top: 0,
        left: 0,
    }

    for (let i = 0; i < 100; i++){
        vtop += 5;
        vleft += 5;
        strHTML += "<span className='winnerStart winnerPost' style={ style.top:" + vtop + "; style.left:" + vleft + "}>{ this.props.champion }</span>";
    }
    document.getElementById("divOutput").innerHTML = strHTML;
}


export const Champion = ( {champion, reset }) => {
    return (
        <div className="champion">
            <h1 className='headerFont text-center'> And the Championship goes to....</h1>
            <div className="winner">
                <p>{ champion }</p>
            </div> 
            <button className="btn btn-primary rounded-pill" onClick={ reset }>Start New Tournament</button>
            <div id="divOutput"></div>
        </div>
    )
}


