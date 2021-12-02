import React from "react";
import './styles.css'
import Img from './../../assets/images/campaing/cats.png'
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
            <div key={key} className="card-campaing">
                <img className="img-campaing" src={Img} alt="" />
                <section className="campaing-description">
                    <Link style={{ textDecoration: 'none', color: '#5A5757' }} to={`campaings/${id}`}>
                        <header className="campaing-title">
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
                    </Link>
                </section>
            </div>
        )
    } else {
        return (
            <div key={key} className="card-campaing">
                <img className="img-campaing" src={Img} alt="" />
                <section className="campaing-description">
                    <Link style={{ textDecoration: 'none', color: '#5A5757' }} to={`campaings/${id}`}>
                        <header className="campaing-title">
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