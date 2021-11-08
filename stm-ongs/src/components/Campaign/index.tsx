import React from "react";
import './styles.css'
import Img from './../../images/campaing/cats.png'

export default function Campaing() {
    return (
        <>
            <div className="card-campaing">
                <img className="img-campaing" src={Img} alt="" />
                <section className="campaing-description">
                    <header className="title-campaing">
                        Arrecadação ração para gatos (filhote)
                    </header>
                    <article className="description-text">
                        <p className="ong-name">
                            ONG União Animal
                        </p>
                        <div className="campaing-value">
                            R$ 300,00
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}