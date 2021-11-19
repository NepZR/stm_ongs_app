// import { type } from 'os';
// import React, { useState } from 'react'
import Campaing from '../Campaign';
import { ItemList } from '../../utils/types/types';
import './styles.css';

interface ListCampaingsProps {
    listCamp: Array<ItemList>
}


export default function ListCampaings(props: ListCampaingsProps) {
    /**ListCampaings deve receber como prop um array contendo a lista
     * de campanhas para ser listado com o map
     */

    return (
        <>
            <section className="list-campaing-container">
                {props.listCamp.map((item,index) => {
                    return <Campaing key={`key-${index}`} img={item.img} title={item.title} ongName={item.ongName} value={item.valor}/>
                })}
            </section>
        </>
    )
}