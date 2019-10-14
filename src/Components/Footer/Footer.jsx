import React from "react";
import "./Footer.scss";
import Facebook from "../../assets/socials/facebook-brands.svg";
import LinkedIn from "../../assets/socials/linkedin-brands.svg";
import Twitter from "../../assets/socials/twitter-brands.svg";
import Youtube from "../../assets/socials/youtube-brands.svg";


const Footer = () => (
    <footer>
        <div className="socials">
        <img src={Facebook} className="App-logo" alt="logo" /> 
        <img src={LinkedIn} className="App-logo" alt="logo" />  
        <img src={Twitter} className="App-logo" alt="logo" />  
        <img src={Youtube} className="App-logo" alt="logo" />  
  
        </div>
    </footer>
)

export default Footer;