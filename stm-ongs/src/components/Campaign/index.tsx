import React from "react";
import './styles.css'
import Img from './../../images/campaing/cats.png'
import { Link } from "react-router-dom";

interface CampaignProps {
    id: number;
    img: string;
    title: string;
    ongName: string;
    value: number | undefined;
    key: string
}

export default function Campaing({ id, img, value, key, ongName, title }: CampaignProps) {

    if (value) {
        return (
            <Link to={`campaings/${id}`}>
                <div key={key} className="card-campaing">
                    <img className="img-campaing" src={Img} alt="" />
                    <section className="campaing-description">
                        <header className="title-campaing">
                            {title}
                        </header>
                        <article className="description-text">
                            <p className="ong-name">
                                {ongName}
                            </p>
                            <div className="campaing-value">
                                R$ {value}
                            </div>
                        </article>
                    </section>
                </div>
            </Link>
        )
    } else {
        return (
            <div key={key} className="card-campaing">
                <img className="img-campaing" src={Img} alt="" />
                <section className="campaing-description">
                    <Link to={`campaings/${id}`}>
                        <header className="title-campaing">
                            {title}
                        </header>
                        <article className="description-text">
                            <p className="ong-name">
                                {ongName}
                            </p>
                            <div className="campaing-value">
                                Visualizar local
                            </div>
                        </article>
                    </Link>
                </section>
            </div>
        )
    }
}