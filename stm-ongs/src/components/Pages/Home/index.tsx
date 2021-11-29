import React, { useState, useContext, useEffect } from "react";
import Menu from "../../Menu";
import NavBar from "../../NavBar";
import ListCampaings from "../../ListCampaings";
import { Context } from "./../../../Context/AuthContext";
import { Redirect } from "react-router-dom";
import api from "../../../auth/api";

//import { campaingsHome } from "../../../dataTest/campaingsHome";

export default function Home() {
    const { authenticated, user } = useContext(Context);
    const [campaingsHome, setCampaingsHome] = useState([])

    useEffect(() => {
        api.get('/campaings').then((response) => {
            setCampaingsHome(response.data)
        })
    }, [])

    console.log("Home: " + authenticated);

    if (authenticated) {
        return (
            <>
                <NavBar />
                <Menu />
                <ListCampaings listCamp={campaingsHome} />
            </>
        );
    } else {
        return <Redirect to="/sign-in" />;
    }
}
