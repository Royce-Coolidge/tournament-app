import React, { Component } from 'react';


class Match extends Component  {

    render() {
        let { player1, player2, handleClick, index, match } = this.props;

        const playerName = (players, playerId) => players.find(player => player.name === playerId).name

        return(
            <>
                <li key={ index } className={ `list-group-item text-center mb-3 p-5 }`}>
                    <span id="playerBox" className={ `border p-3 m-3 border-dark`} onClick={handleClick(player1)}>
                    {playerName(match, player1)}</span>

                    <p className="text-center m-4"> vs </p>
                    
                    <span id="playerBox" className="border border-dark p-3" onClick={handleClick(player2)}>
                    {playerName(match, player2)}</span>
                </li>
            </>
)

    }
}

export default Match;