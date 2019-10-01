This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### tournament-app

Technical challenge set for the last week of the Develop Me course. The MVP should create pairings for a table tennis tournament from a list of user-inputted names.


My main focus for this challenge was to create 'clean' code that was easily readable and compartmentalised as much as possiBEL. I did not want to have individual files any longer than one screen length. In order to do this I applied the principles of functional programming as much as I could.

Having managed to complete MVP requirements, I then wanted to add extra funtionality to select winners from each round through onClick events.

This project was the first time I discovered and utilised Ramda and unit testing. I spent probably too much time figuring out the correct Ramda functions to use and as such my app is not complete. However I finally got my ramda function working which was incredibly satisfying and now I have a clear path as to how to complete the app.



## Steps I took

Firstly i created and input field and add button to save the user-inputted data to a players array. The add button created an object with the user inputted data as well as a playerId and roundId. 

From this list of players I needed to create pairings.

There were two ways of potentially doing this.

1. add a “matchId” property to the player object and assign that to each player, checking that only 2 players can have the same match Id.

2. Or another option would be to create a Match object that has “player1” and “player2” properties that are assigned to a player.


I decided to do the first option to minimise the number of objects i was using and retain a single source of truth in the players object.

The submit button on the first page added a matchId to the player objects. It also
randomized the order of player objects using a shuffle function i found on github. This shuffled players  array was then pushed to rounds array. so i could track the players in each round.

I then used a ramda to help we formulate a way to create my mathc components. A reduce method was used to go througgh the round array and create a match object with properties, player1, player2, for each player pairing that shares the same matchId.

From there, i wanted to increment the round-id with a click to progress a player through the rounds. I hit a stumbling block as the playload i was passing back was just the name of the player i clicked on. when i needed to also pass back the round-Id in order to increment it.


PROBLEM: my Match Creater funtion does not store the roundId and therefore its  not included on the match object and therefore not passed to the selectWinner reducer to increment.


### Next Steps:


Modify my match creater to store the roundId of the player.

Create condition that checks number of players and calculates what round will be the final of the tournament, and to allow selection of only winner (the champion)
