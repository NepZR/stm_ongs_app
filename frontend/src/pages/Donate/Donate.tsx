import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { authContext } from "../../AuthContext/AuthContext";
import Card from "../../components/Card";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import { getLocalToken } from "../../utils/getLocalToken/getLocalToken";
import { BASE_URL_API_LOCAL } from "../../utils/requests";
import brCode from './../../assets/profile/lardoamorv2.png';
import './styles.css'


const Contate = styled.p`
    font-size: 1em;
    font-weight: bold;
    text-align: left;
    color: var(--title-grey);
`;

interface ICamp {
    title: string;
    description: string;
    campaignTypeId: number;
    campaign_cover: string;
    date_limit: string;
    id: string;
    value: number | null | undefined | '';
}

export default function Donate() {

    const bearerToken = `${getLocalToken()}`;
    const { user } = useContext(authContext)
    const [campaing, setCampaing] = useState({} as ICamp)
    const { id }: any = useParams()
    const campaign = useState({})
    const [date, setDate] = useState('');


    useEffect(() => {
        async function getCampaign() {
            await axios.get(`${BASE_URL_API_LOCAL}/campaign/${id}`)
                .then((response) => {
                    console.log(response.data)
                    setCampaing(response.data)
                    setDate(formatData(response.data.date_limit))
                })
        }

        getCampaign()
    }, [id])

    const formatData = (data: string) => {
        const listData = data.split('-')
        return `${listData[2]}/${listData[1]}/${listData[0]}`
    }

    return (
        <>
            <NavBar />
            <Menu />

            <div className="card-container-donate">

                <div className="card-donate">
                    <div className="info-campanha">

                        <img
                            className="camp-cover"
                            src={campaing.campaign_cover}
                            alt="Foto da campanha"
                        />
                        {campaing.campaignTypeId === 1 ? <h3 className="type-campaing">Online</h3> : <h3 className="type-campaing">Presencial</h3>}
                        <h1 className="title-campaing">{campaing.title}</h1>
                        <Contate>{user.email}</Contate>
                        <Contate>Data limite {date}</Contate>
                        <div
                            className="description-campaing"
                        >
                            {campaing.description}
                        </div>

                    </div>
                    <div className="brcode-container">
                        {user.user_type === 2 && <img
                            className="brcode"
                            src={user.url_picpay}
                            alt="brcode"
                        />}

                        {user.user_type === 1 && <img
                            className="brcode"
                            src={brCode}
                            alt="brcode"
                        />}


                    </div>

                </div>


            </div>
        </>
    )
}