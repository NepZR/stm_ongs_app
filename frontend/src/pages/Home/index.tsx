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

//import { campaingsHome } from "../../../dataTest/campaingsHome";

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

                {campaingsHome ? <ListCampaings listCamp={campaingsHome} /> : <Loading />}
                {/* <ListCampaings listCamp={campaingsHome} /> */}
            </>
        );
    } else {
        return <Redirect to="/sign-in" />
    }
}
