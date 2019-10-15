import React from 'react';
import './champion.scss';

// const championes = () => {
//     let { champion } = this.props;

//     let strHTML = '';
//     let vtop = 0;
//     let vleft = 0;

//     const style = {
//         top: 0,
//         left: 0,
//     }

//     for (let i = 0; i < 100; i++){
//         vtop += 5;
//         vleft += 5;
//         strHTML += "<span className='winnerStart winnerPost' style={ style.top:" + vtop + "; style.left:" + vleft + "}>{ this.props.champion }</span>";
//     }
//     document.getElementById("divOutput").innerHTML = strHTML;
// }


export const Champion = ( {champion, reset }) => {
    return (
        <div className="champion">
            <h1 className='headerFont text-center'> And the Champion is, drum roll please! ....</h1>
    
            <div class="svg-wrapper mt-5">
                <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                    <rect class="shape" height="60" width="320" />
                </svg>
                <div class="text winner text-center">{ champion }</div>
            </div>

            <button className="button mt-5" onClick={ reset }>Start New Tournament</button>
        </div>
    )
}


