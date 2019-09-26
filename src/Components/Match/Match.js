import React from 'react';
import './match.scss';

export const Match = ( {player1, player2}) => {


    return (
        <>
            <div className="mb-3 match_1">
                <button className="btn btn-primary"> { player1 }</button>
                <p className="para_vs"> vs.</p>
                <button className="btn btn-primary"> { player2 }</button>
            </div>
         
        </>         
    );


}

export default Match;