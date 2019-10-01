import React from 'react';
import './settings.css';

const handleAdd = (addPlayer) => (e) => {
    e.preventDefault()
    addPlayer(document.getElementById("player_name").value)
    document.getElementById("player_name").value = "";
}

// FIRST PAGE OF APP WHERE USER ENTERS PLAYER NAMES //

const Settings = ({ players, addPlayer, createTournament, reset, numOfPlayers }) => {

    return (
        <div className="text-center">
            
            <h1 className="text-center headerFont">Table Tennis Tournament App</h1>
            <form onSubmit={ handleAdd(addPlayer) } className="add-player container">
                <div className="form-group">
                    <label> Name:</label>
                    <input id="player_name" type="text" className={ `form-control border border` } />
                </div>
                <button className="btn btn-block btn-primary">Add Player</button>
            </form>

            {/* PLAYER NAME LIST  */}

            <div className="text-left">
                <ul className="list-group mt-3 mb-3">
                    {players.map((player, index) => 
                        <li className={ `list-group-item list-group-item${ numOfPlayers === 4 || numOfPlayers === 8 || numOfPlayers === 16 ? '-success' : '' }` }key={ index }>
                            {index + 1 }. {player.name}
                        </li>
                    )}
                </ul>
                <p className={ `text-center d-${ numOfPlayers > 0 ? 'block' : 'none' }`}><span className={ `badge badge-${ numOfPlayers%2 === 0 ? 'success' : 'danger'}` }>{ numOfPlayers%2 === 0 ? 'Ready to start the Tournament!' : 'Please enter an even amount of players'}
                            </span></p>
                <p className={ `text-center greenFont` }>{ numOfPlayers === 4 || numOfPlayers === 8 || numOfPlayers === 16 ? "This would be a great size for a tournament!" : ''}</p>
            </div>
            <button className="btn btn-danger rounded-pill mt-3 mb-3" onClick={ createTournament }>Create Tournament</button>
            <br></br>
            <button className="btn btn-primary rounded-pill" onClick={ reset }>reset</button>
        </div>
    )
}

export default Settings;