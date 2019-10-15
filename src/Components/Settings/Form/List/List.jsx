import React from 'react';
import './list.scss';


const List = ( {players, numOfPlayers}) => {
    return (
        <div className="text-left mt-4 d-flex justify-content-center flex-column">
            <p>Players who have qualified for this tournament are...</p>
            <ul className="list-group mt-3 mb-3 d-flex flex-column">
                {players.map((player, index) => 
                    <li className={ `p-2 pad list-group-item list-group-item${ Number.isInteger(Math.log2(players.length)) ? '-success' : null }` }key={ index }>
                        {index + 1 }. {player.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default List;