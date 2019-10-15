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
        let { addPlayer } =this.props;
        let name = this.state.name.trim();
        let capitalise = (name) => {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
        let capsName = capitalise(name)

        if( capsName !== "" && !this.state.players.includes(capsName)) {
            addPlayer(capsName)
            this.setState({name: '', players:[...this.state.players, capsName]});
        } else {
            this.setState({
                nameError: true,
            });
        }
    }

    handleStart(e) {
        e.preventDefault();

        let { players } = this.props;

        if (players.length >= 4 && Number.isInteger(Math.log2(players.length))) {
            this.props.createTournament();
        } else {
            this.setState({
                playersError: true,
            });
        }
    }


    render() {
        let { reset } = this.props;
        let { nameError, name, playersError } = this.state;
        let nameErrorMessage = "Sorry we can't have any duplicate names or blanks, please check the player names and try again";
        let playersErrorMessage = "Don't forget! You need a minimum of 4 players. The number of players also needs to be a power of 2!";

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
                            className={ `form-control border border-${ nameError || playersError ? "danger" : null }` }
                            value={ name } 
                            />
                        <p className="error mt-2">{ playersError ? playersErrorMessage : nameError ? nameErrorMessage : null }</p>
                    </div>
                    <button onClick={ (e) => this.handleAdd(e) } className="button">Add Player</button>
                </form>
                <List />
                <div classNam="btn-group">
                    <button className="button m-5" onClick={ (e) => this.handleStart(e) }>Start Tournament</button>
                    <button className="button m-5" onClick={ reset }>Start again</button>
                </div>
            </>
        )   
    }
}
export default Form