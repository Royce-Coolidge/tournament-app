import React from 'react';
import List from'./List';
import './form.scss'


const handleAdd = (addPlayer) => (e) => {
    e.preventDefault()
    addPlayer(document.getElementById("player_name").value)
    document.getElementById("player_name").value = "";
}

const Form = ( {addPlayer, createTournament, reset}) => {

    return (
        <>
            <form onSubmit={ handleAdd(addPlayer) } className="add-player container">
                <div className="form-group">
                    <label> Enter Player Names:</label>
                    <input id="player_name" type="text" placeholder="Jasper Carrot" className={ `form-control border border` } />
                </div>
                <button className="button">Add Player</button>
            </form>
            <List />
            <button className="button" onClick={ createTournament }>Start Tournament</button>
            <br></br>
            <button className="btn btn-primary rounded-pill" onClick={ reset }>Start Again</button>
        </>
    )
}   

export default Form