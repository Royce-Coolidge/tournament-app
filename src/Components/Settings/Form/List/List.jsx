import React from 'react';
import './list.scss';


const List = ( {players, numOfPlayers}) => {
    return (
        <div className="text-left mt-4 d-flex justify-content-center flex-column">
            <p>Players who have qualified for this tournament are...</p>
            <ul className="list-group mt-3 mb-3 d-flex flex-column">
                {players.map((player, index) => 
                    <li className={ `p-2 pad list-group-item list-group-item${ numOfPlayers === 4 || numOfPlayers === 8 || numOfPlayers === 16 ? '-success' : '' }` }key={ index }>
                        {index + 1 }. {player.name}
                    </li>
                )}
            </ul>
            <p className={ `text-center d-${ numOfPlayers > 0 ? 'block' : 'none' }`}><span className={ `badge badge-${ numOfPlayers%2 === 0 ? 'success' : 'danger'}` }>{ numOfPlayers%2 === 0 ? 'Ready to start the Tournament!' : 'Please enter an even amount of players'}
                        </span></p>
            <p className={ `text-center greenFont` }>{ numOfPlayers === 4 || numOfPlayers === 8 || numOfPlayers === 16 ? "This would be a great size for a tournament!" : ''}</p>
        </div>
    )
}

export default List;