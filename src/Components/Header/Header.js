import React from "react";
import './header.scss';


let Header = ( champion, submitted ) => (
    <header className="page-header text-center headerFont mb-5">
        <h1>{ champion !== '' ? "Championes Championes Ole Ole Ole" : "The Ping Pong Tournament App" }</h1>
        <p> { submitted ? null : "Battle it out with friends and family!" }</p>
    </header>
);

export default Header;