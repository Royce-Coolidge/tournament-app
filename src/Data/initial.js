const initial = {
    playerName: "",
    numOfPlayers: 0,
    players: 
    [{  
        id: 1,
        name: "Rowley",
        roundId: 1,
        matchId: 1
                
    },
    {   
        id: 2,
        name: "Jack",
        roundId: 1,
        matchId: 1
                
    },
    {   
        id: 3,
        name: "Maff",
        roundId: 1,
        matchId: 2
                
    },
    {   id: 4,
        name: "Jim",
        roundId: 1,
        matchId: 2
                
    },
    
],
    submitted: false,
    matches: [
        { 
            id: 1,
            player1: '',
            player2: ''
        }
    ],
    rounds:[
        {
        roundId: 1,
        name: "Round 1"
        },
        {
        roundId: 2,
        name: "Semi-Finals"
        },
        {
        roundId: 3,
        name: "Finals"
        },
    ],
}

export default initial;