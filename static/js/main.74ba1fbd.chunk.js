(window["webpackJsonptournament-app"]=window["webpackJsonptournament-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/facebook-brands.53757d93.svg"},19:function(e,t,n){e.exports=n.p+"static/media/linkedin-brands.1e01f0c0.svg"},20:function(e,t,n){e.exports=n.p+"static/media/twitter-brands.37332e64.svg"},21:function(e,t,n){e.exports=n.p+"static/media/youtube-brands.c80ca203.svg"},24:function(e,t,n){e.exports=n(48)},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addPlayer",(function(){return g})),n.d(a,"reset",(function(){return O})),n.d(a,"submit",(function(){return N})),n.d(a,"submitWinners",(function(){return v})),n.d(a,"selectWinner",(function(){return P}));var r=n(0),l=n.n(r),c=n(7),u=n.n(c),o=(n(29),n(1)),s=(n(35),n(36),function(e,t){return l.a.createElement("header",{className:"page-header text-center headerFont mb-5"},l.a.createElement("h1",null,""!==e?"Championes Championes Ole Ole Ole":"The Ping Pong Tournament App"),l.a.createElement("p",null," ",t?null:"Battle it out with friends and family!"))}),i=n(4),m=n(8),d=n(9),p=n(11),f=n(10),y=n(3),h=n(12),b=(n(37),function(e){var t=e.players;e.numOfPlayers;return l.a.createElement("div",{className:"text-left mt-4 d-flex justify-content-center flex-column"},l.a.createElement("p",null,"Players who have qualified for this tournament are..."),l.a.createElement("ul",{className:"list-group mt-3 mb-3 d-flex flex-column"},t.map((function(e,n){return l.a.createElement("li",{className:"p-2 pad list-group-item list-group-item".concat(Number.isInteger(Math.log2(t.length))?"-success":null),key:n},n+1,". ",e.name)}))))}),E="TOURNAMENT/RESET",g=function(e){return{type:"TOURNAMENT/ADD_PLAYER",payload:e}},O=function(){return{type:E}},N=function(){return{type:"TOURNAMENT/SUBMIT"}},v=function(){return{type:"TOURNAMENT/SUBMIT_WINNER"}},P=function(e,t){return{type:"TOURNAMENT/SELECT_WINNER",roundId:e,name:t}},w=Object(o.b)((function(e){return{playerName:e.playerName,players:e.players,numOfPlayers:e.numOfPlayers,submitted:e.submitted}}),(function(e){return{addPlayer:function(t){return e(a.addPlayer(t))},createTournament:function(){return e(a.submit())},reset:function(){return e(a.reset())}}}))(b),j=(n(38),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={name:"",players:[],nameError:!1,playerErrors:!1},n.handleAdd=n.handleAdd.bind(Object(y.a)(n)),n.handleChange=n.handleChange.bind(Object(y.a)(n)),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState({name:e.currentTarget.value,nameError:!1,playersError:!1})}},{key:"handleAdd",value:function(e){e.preventDefault();var t=this.props.addPlayer,n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(this.state.name.trim());""===n||this.state.players.includes(n)?this.setState({nameError:!0}):(t(n),this.setState({name:"",players:[].concat(Object(i.a)(this.state.players),[n])}))}},{key:"handleStart",value:function(e){e.preventDefault();var t=this.props.players;t.length>=4&&Number.isInteger(Math.log2(t.length))?this.props.createTournament():this.setState({playersError:!0})}},{key:"render",value:function(){var e=this,t=this.props.reset,n=this.state,a=n.nameError,r=n.name,c=n.playersError;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"add-player container mt-5"},l.a.createElement("div",{className:"form-group mt-5"},l.a.createElement("label",null," Enter Player Names:"),l.a.createElement("input",{id:"player_name",onChange:function(t){return e.handleChange(t)},type:"text",placeholder:"Jasper Carrot",className:"form-control border border-".concat(a||c?"danger":null),value:r}),l.a.createElement("p",{className:"error mt-2"},c?"Don't forget! You need a minimum of 4 players. The number of players also needs to be a power of 2!":a?"Sorry we can't have any duplicate names or blanks, please check the player names and try again":null)),l.a.createElement("button",{onClick:function(t){return e.handleAdd(t)},className:"button"},"Add Player")),l.a.createElement(w,null),l.a.createElement("div",{classNam:"btn-group m-5"},l.a.createElement("button",{className:"button m-5",onClick:function(t){return e.handleStart(t)}},"Start Tournament"),l.a.createElement("button",{className:"button m-5",onClick:t},"Start again")))}}]),t}(r.Component)),T=Object(o.b)((function(e){return{playerName:e.playerName,players:e.players,numOfPlayers:e.numOfPlayers,submitted:e.submitted}}),(function(e){return{addPlayer:function(t){return e(a.addPlayer(t))},createTournament:function(){return e(a.submit())},reset:function(){return e(a.reset())}}}))(j),k=(n(39),n(18)),R=n.n(k),A=n(19),I=n.n(A),S=n(20),C=n.n(S),x=n(21),M=n.n(x),U=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"socials"},l.a.createElement("img",{src:R.a,className:"App-logo",alt:"logo"}),l.a.createElement("img",{src:I.a,className:"App-logo",alt:"logo"}),l.a.createElement("img",{src:C.a,className:"App-logo",alt:"logo"}),l.a.createElement("img",{src:M.a,className:"App-logo",alt:"logo"})))},W=function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement(s,null),l.a.createElement(T,null),l.a.createElement(U,null))},_=Object(o.b)((function(e){return{playerName:e.playerName,players:e.players,numOfPlayers:e.numOfPlayers,submitted:e.submitted}}),(function(e){return{addPlayer:function(t){return e(a.addPlayer(t))},createTournament:function(){return e(a.submit())},reset:function(){return e(a.reset())}}}))(W),D=(n(40),n(41),function(e,t){return e.find((function(e){return e.name===t})).name}),F=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={winner:0,matchId:0},n.handlePlayer1=n.handlePlayer1.bind(Object(y.a)(n)),n.handlePlayer2=n.handlePlayer2.bind(Object(y.a)(n)),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handlePlayer1",value:function(e,t,n){this.props.selectWinner(e,t),this.setState({winner:1,matchId:n})}},{key:"handlePlayer2",value:function(e,t,n){this.props.selectWinner(e,t),this.setState({winner:2,matchId:n})}},{key:"render",value:function(){var e=this,t=this.props,n=t.round,a=t.key,r=t.match,c=this.state,u=c.winner,o=c.matchId,s={};return s.pointerEvents=0!==u?"none":"auto",l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{key:a,style:s,className:"list-group-item list-group-item-primary text-center mb-1 p-3 }"},l.a.createElement("p",null,"Match ",r.id+1," "),l.a.createElement("span",{className:"border p-3 m-3 list-group-item list-group-item-".concat(1===u&&o===r.id?"success":null),onClick:function(){return e.handlePlayer1(r.roundId,r.player1,r.id)}},D(n,r.player1)),l.a.createElement("p",{className:"text-center m-2"}," vs "),l.a.createElement("span",{className:"border p-3 m-3 list-group-item list-group-item-".concat(2===u&&o===r.id?"success":null),onClick:function(){return e.handlePlayer2(r,r.player2,r.id)}},D(n,r.player2))))}}]),t}(r.Component),B=Object(o.b)((function(e,t){return{rounds:e.rounds,players:e.players,match:t.match,key:t.key}}),(function(e){return{selectWinner:function(t,n){return e(P(t,n))},submitWinners:function(){return e(v())},reset:function(){return e(O())}}}))(F),L=Object(o.b)((function(e){return{rounds:e.rounds,numOfPlayers:e.numOfPlayers,submitted:e.submitted,players:e.players,winners:e.winners,roundsPlayed:e.roundsPlayed,totalRounds:e.totalRounds,champion:e.champion}}),(function(e){return{selectWinner:function(t,n){return e(P(t,n))},submitWinners:function(){return e(v())},reset:function(){return e(O())}}}))((function(e){var t=e.totalRounds,n=e.rounds,a=e.reset,r=e.submitWinners;return l.a.createElement(l.a.Fragment,null,n.map((function(e,n){return l.a.createElement("div",{className:"d-flex align-items-center flex-column col-3"},l.a.createElement("h1",{className:"text-left align-self-center headerFont"},n+1===t?"Final":"Round: ".concat(n+1)),l.a.createElement("ul",{className:"m-2 p-0"},function(e){var t=0,n=void 0;return e.reduce((function(e,a){return n&&a.matchId===n.matchId&&(e.push({id:t,player1:n.name,player2:a.name,roundId:a.roundId}),t++),n=a,e}),[])}(e).map((function(t){return l.a.createElement(B,{key:n,round:e,match:t})}))),l.a.createElement("p",null," Click on the player to progress to the next round "),l.a.createElement("button",{className:"button",onClick:r},n+1===t?"Select the Champion":"Progress to Round ".concat(n+2)),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-danger rounded-pill",onClick:a},"Start Again"))})))})),J=(n(42),Object(o.b)((function(e){return{champion:e.champion}}),(function(e){return{reset:function(){return e(O())}}}))((function(e){var t=e.champion,n=e.reset;return l.a.createElement("div",{className:"champion"},l.a.createElement("h1",{className:"headerFont text-center"}," And the Champion is, drum roll please! ...."),l.a.createElement("div",{class:"svg-wrapper mt-5"},l.a.createElement("svg",{height:"60",width:"320",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("rect",{class:"shape",height:"60",width:"320"})),l.a.createElement("div",{class:"text winner text-center"},t)),l.a.createElement("button",{className:"button mt-5",onClick:n},"Start New Tournament"))}))),Y=function(e){var t=e.champion;return l.a.createElement("div",{className:"fluid-container"},l.a.createElement(s,null),l.a.createElement("div",{className:"row m-0"},null!==t?l.a.createElement(J,null):l.a.createElement(L,null)))},X=Object(o.b)((function(e){return{rounds:e.rounds,numOfPlayers:e.numOfPlayers,submitted:e.submitted,totalRounds:e.totalRounds,champion:e.champion}}),(function(e){return{addPlayer:function(t){return e(g(t))},createTournament:function(){return e(N())}}}))(Y);n(43);var q=function(e){var t=e.submitted;return e.champion,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-container"},t?l.a.createElement(X,null):l.a.createElement(_,null),l.a.createElement("div",{class:"push"})))},V=Object(o.b)((function(e){return{submitted:e.submitted}}),(function(e){return{}}))(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=n(6),z=n(22),G={playerName:"",numOfPlayers:0,players:[],rounds:[],totalRounds:null,roundsPlayed:0,submitted:!1,champion:null},H=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e};function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t=0;return e.map((function(e,n){return n%2===0&&t++,Q({},e,{matchId:t})}))},ee=function(e,t){switch(t.type){case"TOURNAMENT/ADD_PLAYER":return Q({},e,{players:[].concat(Object(i.a)(e.players),[{id:e.players.length+1,name:t.payload,roundId:1}]),numOfPlayers:e.numOfPlayers+=1});case"TOURNAMENT/SELECT_WINNER":return Q({},e,{players:[].concat(Object(i.a)(e.players),[{id:e.players.length+1,name:t.name,roundId:t.roundId+=1}]),champion:e.totalRounds===e.rounds.length?t.name:null});case E:return Q({},G);case"TOURNAMENT/SUBMIT":return Q({},e,{players:[],rounds:[].concat(Object(i.a)(e.rounds),[e.rounds.length?Z(e.players):Z(H(e.players))]),submitted:e.submitted=!0,numOfPlayers:e.players.length,totalRounds:Math.log2(e.players.length)});case"TOURNAMENT/SUBMIT_WINNER":return Q({},e,{players:[],rounds:[].concat(Object(i.a)(e.rounds),[Z(e.players)]),roundsPlayed:e.roundsPlayed+1,final:e.roundsPlayed+1===e.totalRounds});default:return e}},te=n(23),ne=n.n(te),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.b,re=Object($.c)(ee,G,ae(ne()()));u.a.render(l.a.createElement(o.a,{store:re},l.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.74ba1fbd.chunk.js.map