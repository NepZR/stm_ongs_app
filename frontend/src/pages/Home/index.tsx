import React, { useState, useContext, useEffect } from "react";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import ListCampaings from "../../components/ListCampaings";
import { authContext } from "../../AuthContext/AuthContext";
import { Redirect } from "react-router-dom";
import api from "../../auth/api";
import Loading from "../../components/Loading";
import axios from "axios";
import { getLocalToken } from "../../utils/getLocalToken/getLocalToken";
import { BASE_URL_API_LOCAL } from "../../utils/requests";
import styled from "styled-components";

//import { campaingsHome } from "../../../dataTest/campaingsHome";

const CampaignsEmpty = styled.div`
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.5px 2rem 2rem 2rem;
    border-color: var(--border-input);
    font-weight: bold;
    color: var(--purple);
`;

export default function Home() {
    const { authenticated, user, loading, setStateLoading } = useContext(authContext);
    const [campaingsHome, setCampaingsHome] = useState([])

    const bearerToken = `${getLocalToken()}`


    useEffect(() => {
        setStateLoading(true)
        axios.get(`${BASE_URL_API_LOCAL}/campaign`, { headers: { Authorization: bearerToken } }).then((response) => {
            setCampaingsHome(response.data)
            setStateLoading(false)
        })

    }, [])

    if (authenticated) {
        return (
            <>
                <NavBar />
                <Menu />
                {campaingsHome.length === 0 && user.user_type === 1 && <CampaignsEmpty>Não existem campanhas cadastradas no sistema ainda!</CampaignsEmpty>}

                {campaingsHome.length === 0 && user.user_type === 2 && <CampaignsEmpty>Você não cadastrou uma campanha! <br /> Acesse o item 'Criar' do menu acima!</CampaignsEmpty>}

                {campaingsHome ? <ListCampaings listCamp={campaingsHome} /> : <Loading />}
                {/* <ListCampaings listCamp={campaingsHome} /> */}
            </>
        );
    } else {
        return <Redirect to="/sign-in" />
    }
}
