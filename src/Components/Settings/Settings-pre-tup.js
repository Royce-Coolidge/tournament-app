import React, { Component } from 'react';


export class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ playerName: e.currentTarget.value });
}

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ playerName: "" }) 
    this.props.addPlayer(window.getElementById("player_name").value); 
}
 
isEven(numberOfPlayers) {
  numberOfPlayers % 2 === 0 ? alert("yes even") : alert("payers must be even add one") 
} 

render() {
  return (
    <>
        <h1 className="text-center">Table Tennis Tournament App</h1>
        <form onSubmit={ this.handleSubmit } className="add-player container">
          <div className="form-group">
            <label> Name:</label>
            <input id="player_name" onChange={ this.handleInput } type="text" className="form-control" value={this.state.playerName}/>
          </div>
          <button className="btn btn-block btn-primary">Add Player</button>
        </form>
        <ul>
          {this.props.players.map(player => 
            <li>
              {player}
            </li>
          )}
        </ul>

      <button onClick={() => this.isEven(this.props.players.length)} >Submit</button>
    </>
  );
  }   
}
