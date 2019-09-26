import React from 'react';
import './tournament.scss';
//import Match from "../Match";



let Tournament = ({ players }) => {

    return (
        <>
            <div>
                <h1>Tournament</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Round 1</th>
                            <th scope="col">Semi-Finals</th>
                            <th scope="col">Finals</th>
                        </tr>
                    </thead>
                    <tbody>
                        { players.map((player, index) => {
                            if (player.roundId === 1){
                                return (
                                <tr key={ player.id }>
                                    <th> { player.name }</th>
                                </tr>)      
                            }
                            if(player.roundId === 2)
                            {
                                return (
                                <tr key={ player.id }>
                                    <th></th>
                                    <th> { player.name }</th>
                                </tr>)      
                            }if(player.roundId === 3)
                            {
                                return (
                                <tr key={ player.id }>
                                    <th></th>
                                    <th></th>
                                    <th> { player.name }</th>
                                </tr>)      
                            }
                        })}
                    </tbody> 
                </table>          
            </div>
        </>
    )
}
             
            
export default Tournament;