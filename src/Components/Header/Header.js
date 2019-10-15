import React from "react";
import './header.scss';


let Header = ( {champion, submitted} ) => {
    return(
        <header className="page-header text-center headerFont mb-5">
            {console.log(champion, submitted)}
            <h1>{ champion === undefined ? "The Ping Pong Tournament App" : "Championes Championes Ole Ole Ole" }</h1>
            <p> { submitted ? null : "Battle it out with friends and family!" }</p>
        </header>
  );
}

export default Header;