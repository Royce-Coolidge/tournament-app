import React from 'react';


export const Player = ( {players}) => {

    return (
        <div>
            <ul className="list-group">
            { players.map((player, index) =>
                <li key ={ index } className="list-group-item">{ player }
                </li>
            )}
            </ul>
        </div>

    )
}

export default Player;