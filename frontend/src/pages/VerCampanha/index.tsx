import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import './styles.css'

import Img from './../../assets/images/campaing/cats.png'
import Button from "../../components/Button";
import { useParams } from "react-router";
import Campaing from "../../components/Campaign";
import { FiShare } from 'react-icons/fi';
import api from "../../auth/api";
import axios from "axios";
import { BASE_URL_API_LOCAL } from "../../utils/requests";
import { getLocalToken } from "../../utils/getLocalToken/getLocalToken";
import { Link } from "react-router-dom";

interface ICampaing {
    id: string,
    title: string,
    value?: number,
    description: string,
    campaign_cover: string,
    active: number,
    date_limit: string,
    campaignTypeId: number,
    userId: number,
}

export default function VerCampanha() {

    const token = `${getLocalToken()}`

    const { id }: any = useParams()
    const [campaing, setCampaing] = useState<ICampaing>({
        id: '',
        title: '',
        value: 1,
        description: '',
        campaign_cover: '',
        active: 1,
        date_limit: '',
        campaignTypeId: 1,
        userId: 1,
    })


    /**
     * Pegar o id passado na url
     * 
     * usar o axios passando o id para pegar os dados da campanha
     * 
     * salvar em um estado
     * 
     * exibir na tela
     * 
     */
    async function getInfoCamp(idCamp: any) {
        await axios.get(`${BASE_URL_API_LOCAL}/campaign/${idCamp}`, { headers: { Authorization: token } })
            .then((response) => {
                setCampaing(response.data)
            }).catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        getInfoCamp(id)
        //console.log(campaing)
    }, [id])

    const formatData = (data: string) => {
        const listData = data.split('-')
        return `${listData[2]}/${listData[1]}/${listData[0]}`
    }


    return (
        <>
            <NavBar />
            <Menu />

            <div className="campaing-container">
                <section className="card-campaing-details">
                    <img className="campaing-photo" src={campaing.campaign_cover} alt="foto" />
                    <div className="description-container">
                        {campaing.campaignTypeId === 1 && <p className="type-campaing">Online</p>}
                        {campaing.campaignTypeId === 2 && <p className="type-campaing">Presencial</p>}
                        <div className="title-share">
                            <h1 className="title-campaing">{campaing.title}</h1>
                            {/*<button><FiShare size={20} /></button>*/}
                        </div>
                        <div className="value-date">
                            {campaing.value && <p className="value-campaing">R$ {campaing.value}</p>}
                            <p className="final-date">{formatData(campaing.date_limit)}</p>
                        </div>
                        <p className="description-campaing"> {campaing.description} </p>
                        <Link to={`/${campaing.id}/donate`}>
                            <Button>Doar</Button>
                        </Link>

                    </div>
                </section>

            </div >
        </>
    )
}