import React from 'react';
import './champion.scss';
import Arrow from '../../assets/images/red-arrow.png';

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
            <div className="animation mt-5">
                <h1>{ champion }</h1>
                <img src={ Arrow } alt="red arrow" height="50" width="100"></img>
            </div>
        </div>
    )
}


