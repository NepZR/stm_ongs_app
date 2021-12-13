// import { type } from 'os';
// import React, { useState } from 'react'
import Campaing from '../Campaign';
import { CampaingItemHome } from '../../utils/types';
import './styles.css';

interface ListCampaingsProps {
    listCamp: Array<CampaingItemHome>
}


export default function ListCampaings({ listCamp }: ListCampaingsProps) {
    /**ListCampaings deve receber como prop um array contendo a lista
     * de campanhas para ser listado com o map
     */

    return (
        <>
            <section className="list-campaing-container">
                {listCamp.map((item, index) => {
                    return <Campaing id={item.id} key={`key-${index}`} img={item.image} title={item.name} ongName={item.ong_name} value={item.value} />
                })}
            </section>
        </>
    )
}