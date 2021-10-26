import React from "react";
import GirlSitting from './../../../images/girl-sitting.svg';
import ArrowLeft from './../../../images/arrow-left.svg'
import './../../../styles/global.css';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Wellcome() {
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