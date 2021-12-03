import React, { useContext } from "react";
import './styles.css'
import { FiAlignLeft, FiHome, FiUser, FiEdit3, FiSearch } from 'react-icons/fi';
import { authContext } from "../../AuthContext/AuthContext";
import { typeUser } from '../../utils/types'
import { Link } from "react-router-dom";

export default function Menu() {
    //Pega apenas o atributo type do objeto user
    const { user: { type } } = useContext(authContext)

    if (type === typeUser.ONG) {

        return (
            <>
                <div className="menu-container">
                    <ul className="menu">
                        <Link to="/campaings" className="menu-item">
                            <FiEdit3 className="icon-menu" color="white" size={30} />
                            Criar
                        </Link>
                        <Link to="/home" className="menu-item">
                            <FiHome className="icon-menu" color="white" size={30} />
                            Home
                        </Link>
                        <li className="menu-item">
                            <FiSearch className="icon-menu" color="white" size={30} />
                            Busca
                        </li>
                        <li className="menu-item">
                            <FiUser className="icon-menu" color="white" size={30} />
                            Perfil
                        </li>
                    </ul>
                </div>
            </>
        )

    } else {

        return (
            <>
                <div className="menu-container">
                    <ul className="menu">
                        <li className="menu-item">
                            <FiSearch className="icon-menu" color="white" size={30} />
                            Busca
                        </li>
                        <Link to="/home" className="menu-item">
                            <FiHome className="icon-menu" color="white" size={30} />
                            Home
                        </Link>
                        <li className="menu-item">
                            <FiUser className="icon-menu" color="white" size={30} />
                            Perfil
                        </li>
                    </ul>
                </div>
            </>
        )

    }


}