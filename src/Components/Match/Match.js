import React, { Component } from 'react'


const playerName = (players, playerId) => 
players.find(player => player.name === playerId).name
// we pass in first player item from the rounds array and playerID (stored in player1/player2 key) of the player clicked on, if the player id matches the playerId of the player object, we return the players.name


class Match extends Component {

    constructor(props) {
        super(props)
        this.state = {
            winner: 0,
            matchId: 0,
        }
        this.handlePlayer1 = this.handlePlayer1.bind(this)
        this.handlePlayer2 = this.handlePlayer2.bind(this)
    }

    handlePlayer1(roundId, play1, matchId) {
        this.props.selectWinner(roundId, play1);
        this.setState( {winner: 1, matchId: matchId} );
    } 

    handlePlayer2(roundId, play2, matchId) {
        this.props.selectWinner(roundId, play2);
        this.setState( {winner: 2, matchId: matchId} );

    }

    render() {
        let { round, key, match } = this.props;
        let { winner, matchId } =this.state;
        const style = {}
        if(winner !== 0){
            style.pointerEvents = "none"
        } else {
            style.pointerEvents = "auto"
        }
        return (
            <>
                    <li key={ key } style={ style } className={ `list-group-item list-group-item-primary text-center mb-1 p-3 }`}>
                        <p>Match {match.id + 1} </p>
                        <span 
                            className={ `border p-3 m-3 list-group-item list-group-item-${ winner === 1 && matchId === match.id ?"success": null }` } 
                            onClick={() => this.handlePlayer1(match.roundId, match.player1, match.id) }>
                            {playerName(round, match.player1)}
                        </span>

                        <p className="text-center m-2"> vs </p>
                        
                        <span 
                            className={ `border p-3 m-3 list-group-item list-group-item-${ winner === 2 && matchId === match.id ?"success": null }` } 
                            onClick={() => this.handlePlayer2(match, match.player2, match.id) }>
                            {playerName(round, match.player2)}
                        </span>
                    </li>
            </>
        )
    }
}

export default Match;
	
//On click of a player box, the playerName function checks if the player in the rounds array (all players) has the same matchId