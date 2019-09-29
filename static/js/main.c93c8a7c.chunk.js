(window["webpackJsonptournament-app"]=window["webpackJsonptournament-app"]||[]).push([[0],{14:function(e,n,t){e.exports=t(33)},19:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"addPlayer",(function(){return d})),t.d(r,"reset",(function(){return p})),t.d(r,"submit",(function(){return f})),t.d(r,"submitWinners",(function(){return y})),t.d(r,"selectWinner",(function(){return b}));var a=t(0),c=t.n(a),u=t(6),l=t.n(u),o=(t(19),t(1)),s=function(e){return function(n){n.preventDefault(),e(document.getElementById("player_name").value),document.getElementById("player_name").value=""}},i=function(e){var n=e.players,t=e.addPlayer,r=e.createTournament,a=e.submitted,u=e.numOfPlayers,l=a&&u%2===0;return c.a.createElement("div",{className:"text-center"},c.a.createElement("h1",{className:"text-center headerFont"},"Table Tennis Tournament App"),c.a.createElement("form",{onSubmit:s(t),className:"add-player container"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null," Name:"),c.a.createElement("input",{id:"player_name",type:"text",className:"form-control border border-".concat(l?"success":null)})),c.a.createElement("button",{className:"btn btn-block btn-primary"},"Add Player")),c.a.createElement("div",{className:"text-left"},c.a.createElement("ul",{className:"list-group mt-3 mb-3"},n.map((function(e,n){return c.a.createElement("li",{className:"list-group-item list-group-item".concat(4===u||8===u||16===u?"-success":""),key:n},n+1,". ",e.name)}))),c.a.createElement("p",{className:"text-center d-".concat(u>0?"block":"none")},c.a.createElement("span",{className:"badge badge-".concat(4===u||8===u||16===u?"success":"danger")},4===u||8===u||16===u?"Ready to start the Tournament!":"Please enter 4, 8 or 12 players"))),c.a.createElement("button",{className:"btn btn-danger rounded-pill mt-5",onClick:r},"Create Tournament"))},m="TOURNAMENT/RESET",d=function(e){return{type:"TOURNAMENT/ADD_PLAYER",payload:e}},p=function(){return{type:m}},f=function(){return{type:"TOURNAMENT/SUBMIT"}},y=function(){return{type:"TOURNAMENT/SUBMIT_WINNER"}},b=function(e){return{type:"TOURNAMENT/SELECT_WINNER",payload:e}},E=Object(o.b)((function(e){return{playerName:e.playerName,players:e.players,numOfPlayers:e.numOfPlayers,submitted:e.submitted}}),(function(e){return{addPlayer:function(n){return e(r.addPlayer(n))},createTournament:function(){return e(r.submit())}}}))(i),N=(t(25),t(26),function(){return c.a.createElement("header",{className:"page-header headerFont mb-5"},c.a.createElement("h1",null,"The Tournament App"))}),O=(t(27),function(e,n){return e.find((function(e){return e.id===n})).name}),T=Object(o.b)((function(e){return{rounds:e.rounds,numOfPlayers:e.numOfPlayers,submitted:e.submitted,players:e.players}}),(function(e){return{selectWinner:function(n){return e(b(n))},submitWinners:function(){return e(y())},reset:function(){return e(p())}}}))((function(e){var n=e.players,t=e.rounds,r=e.reset,a=e.submitWinners,u=e.numOfPlayers,l=e.selectWinner;return c.a.createElement(c.a.Fragment,null,t.map((function(e,t){return c.a.createElement("div",{className:"d-flex align-items-center flex-column"},c.a.createElement("h1",{className:"text-left align-self-start pl-2 headerFont"},"Round ",t+1),c.a.createElement("ul",{className:"m-2 p-0"},function(e){var n=0,t=void 0;return e.reduce((function(e,r){return t&&r.matchId===t.matchId&&(e.push({id:n,player1:t.id,player2:r.id}),n++),t=r,e}),[])}(e).map((function(n){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{key:t,className:"list-group-item text-center mb-3 p-5 }"},c.a.createElement("span",{id:"playerBox",className:"border border-dark p-3 m-3 ",onClick:function(){return l(O(e,n.player1))}},O(e,n.player1)),c.a.createElement("p",{className:"text-center m-4"}," vs "),c.a.createElement("span",{id:"playerBox",className:"border border-dark p-3",onClick:function(){return l(O(e,n.player2))}},O(e,n.player2))))}))),c.a.createElement("button",{className:"btn btn-danger rounde-pill ".concat(n.length===u/2?null:"d-none"),onClick:a},"Submit Winners"),c.a.createElement("br",null),c.a.createElement("button",{className:"btn btn-primary rounded-pill",onClick:r},"reset"))})))})),g=function(){return c.a.createElement("div",{className:"fluid-container"},c.a.createElement(N,null),c.a.createElement("div",{className:"row m-0"},c.a.createElement(T,null)))},h=Object(o.b)((function(e){return{rounds:e.rounds,numOfPlayers:e.numOfPlayers,submitted:e.submitted}}),(function(e){return{addPlayer:function(n){return e(d(n))},createTournament:function(){return e(f())}}}))(g);t(28);var v=function(e){var n=e.submitted;return c.a.createElement(c.a.Fragment,null,n?c.a.createElement(h,null):c.a.createElement(E,null))},P=Object(o.b)((function(e){return{submitted:e.submitted}}),(function(e){return{}}))(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=t(5),j=t(4),R=t(12),I={playerName:"",numOfPlayers:0,players:[],rounds:[],submitted:!1,winners:[]},k=function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}return e};function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(t,!0).forEach((function(n){Object(R.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(e){var n=0;return e.map((function(e,t){return t%2===0&&n++,M({},e,{matchId:n})}))},S=function(e,n){switch(n.type){case"TOURNAMENT/ADD_PLAYER":return M({},e,{players:[].concat(Object(j.a)(e.players),[{id:e.players.length+1,name:n.payload,roundId:1}]),numOfPlayers:e.numOfPlayers+=1});case"TOURNAMENT/SELECT_WINNER":return M({},e,{players:[].concat(Object(j.a)(e.players),[{id:e.players.length+1,name:n.payload,roundId:1}])});case m:return M({},I);case"TOURNAMENT/SUBMIT":return M({},e,{players:[],rounds:[].concat(Object(j.a)(e.rounds),[e.rounds.length?_(e.players):_(k(e.players))]),submitted:e.submitted=!0,numOfPlayers:e.players.length});case"TOURNAMENT/SUBMIT_WINNER":return M({},e,{players:[],rounds:[].concat(Object(j.a)(e.rounds),[_(e.players)]),winners:Object(j.a)(e.rounds)});default:return e}},U=t(13),x=t.n(U),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.b,D=Object(w.c)(S,I,W(x()()));l.a.render(c.a.createElement(o.a,{store:D},c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.c93c8a7c.chunk.js.map