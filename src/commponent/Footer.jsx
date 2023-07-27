import React from "react";
import './Footer.css';
import instagrem from './../images/instagram.png';
import linkedin from './../images/linkedin.png';
import Logo from './../images/logo.png';
const Footer = () =>{
    return(
        <div className="footer-container">
            
            <hr/>
            <div className="footer">
                
                <img src={instagrem} alt="" /><img src={linkedin} alt="" />
            </div>
            <div className="footer-logo">
            <img src={Logo} alt="" />

            </div>
            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </div>
        

    )
}

export default Footer;