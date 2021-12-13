import React from "react";
import Girl from './../../assets/images/girl-sitting.svg';
import './styles.css';

export default function TitleGirl() {
    return (
        <>
            <div className="title-girl-container">
                <h1 className="title-girl">Plataforma <br /> STM ONG's</h1>
                <img className="girl-img" src={Girl} alt="Moça sentada em uma poltrona com notebook" />
            </div>
        </>
    );
}