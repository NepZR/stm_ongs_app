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

interface ICampaing {
    id_campaing: number,
    name: string,
    description: string,
    active: number,
    creation_date: string,
    end_date: string,
    created_by: number,
    campaing_type: number,
    value: number
}

export default function VerCampanha() {

    const { id }: any = useParams()
    const [campaing, setCampaing] = useState<ICampaing>({
        id_campaing: 12,
        name: '',
        description: '',
        active: 1,
        creation_date: '',
        end_date: '',
        created_by: 1,
        campaing_type: 1,
        value: 1
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
        await api.get(`/campaings/${idCamp}`)
            .then((response) => {
                setCampaing(response.data)
            }).catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        getInfoCamp(id)
        console.log(campaing)
    }, [id])


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
                            <h1 className="title-campaing">{campaing.name}</h1>
                            <button><FiShare size={20} /></button>
                        </div>
                        <div className="value-date">
                            <p className="value-campaing">{campaing.value}</p>
                            <p className="final-date">{campaing.end_date}</p>
                        </div>
                        <p className="description-campaing"> {campaing.description} </p>
                        <Button >Doar</Button>
                    </div>
                </section>

            </div>
        </>
    )
}