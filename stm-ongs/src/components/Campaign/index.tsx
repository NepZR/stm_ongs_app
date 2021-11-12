import React from "react";
import './styles.css'
import Img from './../../images/campaing/cats.png'

interface CampaignProps {
    img: string;
    title: string;
    ongName: string;
    value: number;
}

export default function Campaing(props: CampaignProps) {
    return (
        <>
            <div className="card-campaing">
                <img className="img-campaing" src={Img} alt="" />
                <section className="campaing-description">
                    <header className="title-campaing">
                        {props.title}
                    </header>
                    <article className="description-text">
                        <p className="ong-name">
                            {props.ongName}
                        </p>
                        <div className="campaing-value">
                            R$ {props.value}
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}