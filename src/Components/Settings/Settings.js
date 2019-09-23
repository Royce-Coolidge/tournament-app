import React, { Component } from 'react';


class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.playerName,
      players: props.players,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ playerName: e.currentTarget.value });
}

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPlayer(this.state); 
}

render() {
console.log(this.state)
  return (
    <>
        <h1 className="text-center">Table Tennis Tournament App</h1>
        <form onSubmit={ this.handleSubmit } className="add-player container">
          <div className="form-group">
            <label> Name:</label>
            <input onChange={ this.handleInput } type="text" className="form-control" />
          </div>
          <button className="btn btn-block btn-primary">Add Player</button>
        </form>
    </>
  );
  }   
}

export default Settings;
