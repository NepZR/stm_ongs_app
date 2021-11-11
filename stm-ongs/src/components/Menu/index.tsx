import React from "react";
import './styles.css'
import { FiAlignLeft, FiHome, FiUser, FiEdit3, FiSearch } from 'react-icons/fi'

export default function Menu() {

    return (
        <>
            <div className="menu-container">
                <ul className="menu">
                    <li className="menu-item"> 
                        <FiEdit3 className="icon-menu" color="white" size={30}/>
                        Criar
                    </li>
                    <li className="menu-item">
                        <FiAlignLeft className="icon-menu" color="white" size={30}/>
                        Campanhas
                    </li>
                    <li className="menu-item">
                        <FiHome className="icon-menu" color="white" size={30}/>
                        Home
                    </li>
                    <li className="menu-item">
                        <FiSearch className="icon-menu" color="white" size={30}/>
                        Busca
                    </li>
                    <li className="menu-item">
                        <FiUser className="icon-menu" color="white" size={30}/>
                        Perfil
                    </li>
                </ul>
            </div>
        </>
    )
}