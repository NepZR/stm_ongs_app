import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../assets/images/campaing/cats.png';
import './styles.css';
import { v4 } from 'uuid';
import { FiEdit, FiInfo } from 'react-icons/fi'

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
            <img className="img-campaing" src={Img} alt={ongName} />
            <section className="campaing-description">

                <div className="links-campaing-container"> 
                    <Link className="link-edit" to={`/campaings-edit/${id}`}>
                        <FiEdit className="edit-icon" size={20}/>
                        Editar
                    </Link>
                    <Link className="link-ver" to={`/campaings/${id}`}>
                        <FiInfo className="edit-icon" size={20}/>
                        Ver
                    </Link>
                </div>

            
                <div style={{ textDecoration: 'none', color: '#5A5757' }} >
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
                </div>
            </section>
        </div>
    )
}