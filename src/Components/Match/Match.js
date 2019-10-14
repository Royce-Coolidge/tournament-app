import React, { Component } from 'react'
import { matchCreater } from '../../matchCreater';


const playerName = (players, playerId) => 
players.find(player => player.name === playerId).name
// we pass in first player item from the rounds array and playerID (stored in player1/player2 key) of the player clicked on, if the player id matches the playerId of the player object, we return the players.name


class Match extends Component {

    constructor(props) {
        super(props)
        this.state = {
            winner: 0,
        }
        this.handlePlayer1 = this.handlePlayer1.bind(this)
        this.handlePlayer2 = this.handlePlayer2.bind(this)
    }

    handlePlayer1(roundId, play1) {
        this.props.selectWinner(roundId, play1);
        this.setState( {winner: 1} );
    } 

    handlePlayer2(roundId, play2) {
        this.props.selectWinner(roundId, play2);
        this.setState( {winner: 2} );
    }

    render() {
        let { round, key, players } = this.props;
        let { winner }= this.state



        return (
            <>
                { matchCreater(round).map(match => // maps through the matches created by the matchCreater 
                <>

                    <li key={ key } className={ `list-group-item text-center mb-3 p-5 }`}>
                        <span 
                            className={ `border p-3 m-3 list-group-item list-group-item-` } 
                            onClick={() => this.handlePlayer1(match.roundId, match.player1) }>
                            {playerName(round, match.player1)}
                        </span>

                        <p className="text-center m-4"> vs </p>
                        
                        <span 
                            className={ `border p-3 m-3 list-group-item list-group-item-` } 
                            onClick={() => this.handlePlayer1(match.roundId, match.player1) }>
                            {playerName(round, match.player2)}
                        </span>
                    </li>

                </>
                )}
            </>
        )
    }
}

export default Match;
	
//On click of a player box, the playerName function checks if the player in the rounds array (all players) has the same matchId