import React, { useState, useContext } from "react";
import Menu from "../../Menu";
import NavBar from "../../NavBar";
import ListCampaings from "../../ListCampaings";
import  { ItemList } from "../../../utils/types/types";
import { Context } from  './../../../Context/AuthContext'
import { Redirect } from "react-router-dom";


export default function Home() {
    const { authenticated, user } = useContext(Context)
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

    console.log('Home: '+authenticated)

    if(authenticated) {
        return (
            <>
                <NavBar/>
                <Menu />
                {/* {`${user.type}`} */}
                <ListCampaings listCamp={listItens}/>
            </>
        )
    }else {
        return (
            <Redirect to="/sign-in"/>
        )
    }

    

        


}







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