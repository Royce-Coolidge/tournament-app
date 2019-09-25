import React from 'react';


export const Player = ( {players}) => {

    return (
        <div>
            {players.map((player, index) =>
                <button key ={ index} className="rounded-pill">{ player }</button>
            )}
        </div>

    )
}

export default Player;