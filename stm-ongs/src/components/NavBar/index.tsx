import React from "react";
import './styles.css'
import Logo from '../../images/logo.png';

export default function NavBar() {
    return (
        <>
        <div className="nav-bar">
            <div className="nav-bar-container">
                <img className="logo-nav-bar" src={Logo} alt="Logo STM ONGs" />
                <p className="title-nav-bar"> STM ONGs </p>
            </div>
        </div>
        
        </>
    )
}