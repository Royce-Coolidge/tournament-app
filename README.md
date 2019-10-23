This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### tournament-app

Technical challenge set for the last week of the Develop Me course. The MVP should create pairings for a table tennis tournament from a list of user-inputted names.

My main focus for this challenge was to create 'clean' code that was easily readable and compartmentalised as much as possiBEL. I did not want to have individual files any longer than one screen length. In order to do this I applied the principles of functional programming as much as I could.

## Technologies Used
- React / Redux
- SASS
- Ramda
- Bootstrap

## Steps I took

1. Firstly, I mapped out the components i wanted to create. They were:

- Component for headers (Header.js)
- The initial user-input (inputting player names) page (Settings.js)
- The main parent component (Tournament.js)
- A componenent for each round (1st Round, Semi-final, Final etc)(Round.js)
- A component for each Match (Match.js)
- Component to show the champion (Champion.js)
- Component for the Footer (Footer.js)


2. I created the input field and add button in Settings.js to save the user-inputted data to a players array in state. The add button created an object with the user inputted data as well as a playerId and roundId. 

3. I then needed to randomize the order of the players array. On submission of the form, I added a shuffle function that randomized the order of player objects, i found the shuffle function on github. The shuffled players array was then pushed to rounds array so I could track the players in each round, and the players array changed to an empty array. 

4. From this list of players in my rounds array, I needed to create pairings for matches.

    There were two ways of potentially doing this.

    a. add a “matchId” property to the player object and assign that to each player, checking that only 2 players can have the same match Id.

    b. Or another option would be to create a Match object that has “player1” and “player2” properties that are assigned a player each.

    I decided to do option b to minimise the number of objects i was using. I added a match id by mapping over the shuffled players array and adding a matchID property to each player object. the trick was that for for every even indexed player, i incremented the matchId. 

4. I then used the reduce method to go through the shuffled players array and create a match object for each player object that had the same matchID.  The match object assigned the players' playerIDS to the properties player1, player2. I then mapped over this array of match objects, creating a Match component for each one.

I then had my Minimum Viable Product completed. 

From there i added mult-round functionality by adding onClick event listeners to the player names which would puch them back on to the (empty) players array in state. The 'Submit Winners' button would then push this player array on to the round array with a new matchId, creating an array of arrays. 
