import React from 'react';
import List from'./List';
import './form.css'

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
                    <label> Name:</label>
                    <input id="player_name" type="text" className={ `form-control border border` } />
                </div>
                <button className="addButton">Add Player</button>
            </form>
            <List />
            <button className="btn btn-danger rounded-pill mt-3 mb-3" onClick={ createTournament }>Create Tournament</button>
            <br></br>
            <button className="btn btn-primary rounded-pill" onClick={ reset }>reset</button>
        </>
    )
}   

export default Form