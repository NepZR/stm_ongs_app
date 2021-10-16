import React from "react";
import GirlSitting from './../../images/girl-sitting.svg';
import ArrowLeft from './../../images/arrow-left.svg'
import './../../global.css';
import './styles.css';

export default function Wellcome() {
    return (
        <>
            <div className="container">
                <article>
                    <h1 className="title">Plataforma STM ONG's</h1>
                    <p className="description">
                        Ajude a pessoas e instituições sem fins lucrativos contribuindo através de campanhas de arrecadação.
                    </p>
                    <a href="" className="arrow-link">
                        <img className="arrow" src={ArrowLeft} alt="Seta para a direita" />
                    </a>
                </article>
                <img className="girl-image" src={GirlSitting} alt="Pessoa Sentada em uma poltrona" />
            </div>
        </>
    );
}