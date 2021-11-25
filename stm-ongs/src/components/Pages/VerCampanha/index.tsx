import React, { useState } from "react";
import NavBar from "../../NavBar";
import Menu from "../../Menu";
import './styles.css'

import Img from './../../../images/campaing/cats.png'
import Button from "../../Button";
import { useParams } from "react-router";
import { campaingDetails } from './../../../dataTest/campaingsHome'
import { CampaingItemHome } from "../../../utils/types/types";
import Campaing from "../../Campaign";
import { FiShare } from 'react-icons/fi';

interface Props {
    type: string,
    title: string,
    description: string,
    image: string

}
export default function VerCampanha() {

    const { id }: any = useParams()
    const [campaing, setCampaing] = useState({ campaing_type: 2 })
    //image: '', value: '', created_by: 1, description: '', campaing_type: 1, ong_name: '', name: 'dede', id: 1,





    return (
        <>
            <NavBar />
            <Menu />

            <div className="campaing-container">
                <section className="card-campaing-details">
                    <img className="campaing-photo" src={Img} alt="" />
                    <div className="description-container">
                        <p className="type-campaing">{campaing.campaing_type}</p>
                        <div className="title-share">
                            <h1 className="title-campaing">Compra de ração para cães (filhote)</h1>
                            <button><FiShare size={20} /></button>
                        </div>
                        <div className="value-date">
                            <p className="value-campaing">R$ 300</p>
                            <p className="final-date">5 dias restantes</p>
                        </div>
                        <p className="description-campaing">       Olá, somos a ONG União Animal, somos uma ONG que reune pessoas que adotam a causa dos animais e buscam cuidá-los e ajudar a encontrar um bom lar para eles. Recentemente resgatamos caezinhos ainda filhotes, mas precisamos ter ração suficiente para alimentá-los, junto aos demais que já estavam sob nossos cuidados. Agradecemos toda ajuda que puder oferecer.</p>
                        <Button >Doar</Button>
                    </div>
                </section>

            </div>
        </>
    )
}