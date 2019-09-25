import React from 'react';
import './Tournament.scss';

export const Tournament = ( {players}) => {

    return (
        <div className="tournament_container">
                <div className="grid_4_player">
                    <div className="round_1">
                        <div className="player">Player 1</div>
                        <div>Player 2</div>
                        <div>Player 3</div>
                        <div>Player 4</div>
                    </div>
                    <div className="round_2">
                        <div>Winner 1</div>
                        <div>Winner 2</div>
                    </div>
            </div>
           
        </div>
    );


}