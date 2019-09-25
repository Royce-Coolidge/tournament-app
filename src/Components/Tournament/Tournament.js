import React from 'react';
import './Tournament.scss';
import Player from "../Player/Player";

export const Tournament = ( {players}) => {

    return (
        <div className="tournament_container">
                <div className="grid_4_player">
                    <div className="round_1">
                        <Player />
                    </div>
                    <div className="round_2">
                        <div>Winner 1</div>
                        <div>Winner 2</div>
                    </div>
            </div>
           
        </div>
    );


}

export default Tournament;