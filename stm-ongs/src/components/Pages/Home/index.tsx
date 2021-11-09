import React from "react";
import Campaing from "../../Campaign";
import Menu from "../../Menu";
import NavBar from "../../NavBar";

export default function Home() {
    return (
        <>
            <NavBar/>
            <Menu/>
            {/**Componentizar essa div para umma lista de campanhas, recebe um
             * array como prop e lista em um container
             */}
            <div style={{
                padding: '2rem 2rem',
                borderRadius:'10px',
                marginTop: '3rem',
                justifyContent: 'center',
                backgroundColor:'#fff',
                maxWidth: '90rem',
                margin: 'auto',
                display:"flex", 
                flexWrap: 'wrap'
                }}>
                <Campaing/>
                <Campaing/>
                <Campaing/>
                <Campaing/>
                <Campaing/>
                <Campaing/>
                <Campaing/>
            </div>
        </>
    )
}