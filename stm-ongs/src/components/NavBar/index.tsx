import React, { useContext } from "react";
import './styles.css'
import Logo from '../../images/logo.png';

import { Context } from '../../Context/AuthContext'



export default function NavBar() {
    
    const { handleLogout } = useContext(Context)


    function logout() {
        handleLogout()
    }
    
    return (
        <>
            <div className="nav-bar">
                <div className="nav-bar-container">
                    <img className="logo-nav-bar" src={Logo} alt="Logo STM ONGs" />
                    <p className="title-nav-bar"> STM ONGs </p>
                    <button className="button-logout" onClick={logout}>Logout</button>
                </div>
            </div>
        </>
    )
}