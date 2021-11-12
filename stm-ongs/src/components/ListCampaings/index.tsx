import { type } from 'os';
import React, { useState } from 'react'
import Campaing from '../Campaign';
import ItemList from '../../utils/types/types';
import './styles.css';

interface ListCampaingsProps {
    listCamp: Array<ItemList>
}


export default function ListCampaings(props: ListCampaingsProps) {
    /**ListCampaings deve receber como prop um array contendo a lista
     * de campanhas para ser listado com o map
     */

    // const [campaings, setCampaings] = useState([
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
    // ])

    return (
        <>
            <section className="list-campaing-container">
                {props.listCamp.map((item) => {
                    return <Campaing img={item.img} title={item.title} ongName={item.ongName} value={item.valor}/>
                })}
            </section>
        </>
    )
}