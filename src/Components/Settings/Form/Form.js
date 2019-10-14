import React, { Component } from 'react';
import List from'./List';
import './form.scss'




class Form extends Component {

    constructor(props){
        super(props)
        this.state ={
            name: "",
            players: [],
            nameError: false,
            playerErrors: false,
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange =this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.currentTarget.value,
            nameError: false,
            playersError: false,
        });
    }

    handleAdd(e) {
        e.preventDefault();
        let name = this.state.name.trim();
        let { addPlayer } =this.props;

        if( name !== "" && !this.state.players.includes(name)) {
            addPlayer(document.getElementById("player_name").value)
            this.setState({name: '', players:[...this.state.players, name]});
        } else {
            this.setState({
                nameError: true,
            });
        }
    }


    render() {
        let {createTournament, reset} = this.props;
        let { nameError, name } = this.state;
        let nameErrorMessage = "Sorry we can't have any duplicate names or blanks, please check the player names and try again";

        return (
            <>
                <form className="add-player container">
                    <div className="form-group">
                        <label> Enter Player Names:</label>
                        <input 
                            id="player_name" 
                            onChange={ (e) => this.handleChange(e)}
                            type="text" 
                            placeholder="Jasper Carrot" 
                            className={ `form-control border border-${ nameError ? "danger" : null }` }
                            value={ name } 
                            />
                        <p className="error">{ nameError ? nameErrorMessage : null }</p>
                    </div>
                    <button onClick={ (e) => this.handleAdd(e) } className="button">Add Player</button>
                </form>
                <List />
                <button className="button mb-4" onClick={ createTournament }>Start Tournament</button>
                <br></br>
                <button className="btn button rounded-pill mb-5" onClick={ reset }>Change your mind? Enter player names again</button>
            </>
        )   
    }
}
export default Form