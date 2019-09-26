import React from 'react';
import './bracket.scss';
import Match from "../Match/";



const Bracket = ( {players}) => {

    return (
        <>
            <div className="col">
                <Match 
                player1={ players[0] }
                player2={ players[1] }
                />
                 <Match 
                player1={ players[2] }
                player2={ players[3] }
                />
            </div>
        </>         
    )
}

export default Bracket;