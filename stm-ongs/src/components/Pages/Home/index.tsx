import React, { useState } from "react";
import Menu from "../../Menu";
import NavBar from "../../NavBar";
import ListCampaings from "../../ListCampaings";
import  { ItemList } from "../../../utils/types/types";

interface HomeProps {
    typeUser: string
}

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

    // const l: Array<ItemList> = [
    //     {
    //         img: '',
    //         title: 'Arrecadação de ração para gatos filhotes',
    //         valor: 250,
    //         ongName: 'União Animal'
    //     },
    //     {
    //         img: '',
    //         title: 'Ração para Gatos',
    //         valor: 320,
    //         ongName: 'Lar do Amor'
    //     },
    //     {
    //         img: '',
    //         title: 'Ração para Gatos2',
    //         valor: 320,
    //         ongName: 'Lar do Amor'
    //     },
    // ]
        return (
            <>
                <NavBar/>
                <Menu />
                <ListCampaings listCamp={listItens}/>
            </>
        )


}