import React from 'react';

const handleAdd = (addPlayer) => (e) => {
    e.preventDefault()
    addPlayer(document.getElementById("player_name").value)
    document.getElementById("player_name").value = "";

}


const Settings = ({ players, addPlayer, createTournament, submitted, numOfPlayers }) => {
const isEven = submitted && numOfPlayers % 2 === 0;
    return (
        <div className="text-center">
            <h1 className="text-center">Table Tennis Tournament App</h1>
            <form onSubmit={ handleAdd(addPlayer) } className="add-player container">
                <div className="form-group">
                    <label> Name:</label>
                    <input id="player_name" type="text" className={ `form-control border border-${ isEven ? "success" : null }` } />
                </div>
                <button className="btn btn-block btn-primary">Add Player</button>
            </form>

            {/* PLAYER NAME LIST  */}

            <div className="text-left">
                <ul className="list-group mt-3">
                    {players.map((player, index) => 
                        <li className="list-group-item" key={ index }>
                            {index + 1 }. {player}
                        </li>
                    )}
                </ul>
            </div>

            <button className="btn btn-danger rounded-pill mt-5" onClick={ createTournament } >Create Tournament</button>
            <br></br>
            { !submitted ? null : <p>{ isEven ? "Success" : "Please add an even number of players"}</p>}
        </div>
    )
}

export default Settings;