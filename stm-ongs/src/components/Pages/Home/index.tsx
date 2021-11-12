import React, { useState } from "react";
import Campaing from "../../Campaign";
import Menu from "../../Menu";
import NavBar from "../../NavBar";
import ListCampaings from "../../ListCampaings";
import ItemList from "../../../utils/types/types";

export default function Home() {

    const [listItens, setListItens] = useState<Array<ItemList>>([
        {
            img: '',
            title: 'Arrecadação de ração para gatos filhotes',
            valor: 250,
            ongName: 'União Animal'
        },
        {
            img: '',
            title: 'Ração para Gatos',
            valor: 320,
            ongName: 'Lar do Amor'
        },
        {
            img: '',
            title: 'Ração para Gatos2',
            valor: 320,
            ongName: 'Lar do Amor'
        },
    ])

    /**useEffect(()=>{
     * 
     * axios.get('url').then((data) => {
     *  setListItens(data)
     * }).catch(err){
     * 
     * },[listItens])
     * 
     * 
     * }
     */

    const l: Array<ItemList> = [
        {
            img: '',
            title: 'Arrecadação de ração para gatos filhotes',
            valor: 250,
            ongName: 'União Animal'
        },
        {
            img: '',
            title: 'Ração para Gatos',
            valor: 320,
            ongName: 'Lar do Amor'
        },
        {
            img: '',
            title: 'Ração para Gatos2',
            valor: 320,
            ongName: 'Lar do Amor'
        },
    ]

    return (
        <>
            <NavBar/>
            <Menu />
            <ListCampaings listCamp={listItens}/>
            {/**Componentizar essa div para umma lista de campanhas, recebe um
             * array como prop e lista em um container
             */}
            {/* <div style={{
                // padding: '2rem 2rem',
                borderRadius:'10px',
                justifyContent: 'center',
                backgroundColor:'#fff',
                maxWidth: '80rem',
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
            </div> */}

            
        </>
    )
}