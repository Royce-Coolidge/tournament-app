import React from 'react';
import './match.scss';

export const Match = ( {players}) => {

    var shuffle = players.sort(function() { return .5 - Math.random() })

    return (
        <>
            <div className="mb-3 match_1">
                <button className="btn btn-primary"> { shuffle[0] }</button>
                <p className="para_vs"> vs.</p>
                <button className="btn btn-primary"> { shuffle[1] }</button>
            </div>
            <div className="match_2">
                <button className="btn btn-primary"> { shuffle[2] }</button>
                <p className="para_vs"> vs.</p>
                <button className="btn btn-primary"> { shuffle[3] }</button>
            </div>
        </>         
    );


}

export default Match;