import React, { useContext } from "react";
import GirlSitting from './../../assets/images/girl-sitting.svg';
import ArrowLeft from './../../assets/images/arrow-left.svg'
import './styles.css';
import { Link, Redirect } from 'react-router-dom';
import { authContext } from "../../AuthContext/AuthContext";

export default function Wellcome() {

    const { authenticated } = useContext(authContext)

    if (authenticated) {

        return (
            <Redirect to='/home' />
        )

    } else {

        return (
            <>
                <div className="container">
                    <article>
                        <h1 className="title">Plataforma <br /> STM ONG's</h1>
                        <p className="description">
                            Ajude a pessoas e instituições sem fins lucrativos contribuindo através de campanhas de arrecadação.
                        </p>
                        <Link className="arrow-link" to="/sign-in">
                            <img className="arrow" src={ArrowLeft} alt="Seta para a direita" />
                        </Link>
                    </article>
                    <img className="girl-image" src={GirlSitting} alt="Pessoa Sentada em uma poltrona" />
                </div>
            </>
        );
    }

}