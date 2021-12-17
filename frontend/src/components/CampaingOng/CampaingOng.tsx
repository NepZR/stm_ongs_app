import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../assets/images/campaing/cats.png';
import './styles.css';
import { v4 } from 'uuid';
import { FiEdit } from 'react-icons/fi'

interface CampaignOngProps {
    id: number;
    img: string;
    title: string;
    ongName: string;
    value: number | undefined;
    key?: string
}

export default function CampaingOng({ id, img, value, ongName, title }: CampaignOngProps) {
    
    return (
        <div key={v4()} className="card-campaing">
            <FiEdit size={30}/>
            <img className="img-campaing" src={Img} alt={ongName} />
            <section className="campaing-description">
                <Link style={{ textDecoration: 'none', color: '#5A5757' }} to='#'>
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
}