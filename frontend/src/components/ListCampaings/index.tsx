// import { type } from 'os';
// import React, { useState } from 'react'
import Campaing from '../Campaign';
import { CampaingItemHome } from '../../utils/types';
import './styles.css';
import { useContext } from 'react';
import { authContext } from '../../AuthContext/AuthContext';
import CampaingOng from '../CampaingOng/CampaingOng';
import { v4 } from 'uuid'

interface ListCampaingsProps {
    listCamp: Array<CampaingItemHome>
}

const typeUser = {
    FISICA: 1,
    ONG: 2
}

export default function ListCampaings({ listCamp }: ListCampaingsProps) {

    /**ListCampaings deve receber como prop um array contendo a lista
     * de campanhas para ser listado com o map
     */

    const { user: { user_type, name } } = useContext(authContext)

    if (user_type === typeUser.FISICA) {
        return (
            <>
                <section className="list-campaing-container">
                    {listCamp.map((item, index) => {
                        return <Campaing
                            id={item.id}
                            key={`key-${v4()}`}
                            img={item.campaign_cover}
                            title={item.title}
                            ongName='Nome da ONG'
                            //ongName={item.ong_name}
                            value={item.value}
                        />
                    })}
                </section>
            </>
        )

    } else if (user_type === typeUser.ONG) {

        return (
            <>
                <section className="list-campaing-container">
                    {listCamp.map((item, index) => {
                        return <CampaingOng
                            id={item.id}
                            key={`key-${index}`}
                            img={item.campaign_cover}
                            title={item.title}
                            ongName={name}
                            //ongName={item.ong_name}
                            value={item.value}
                        />
                    })}
                </section>
            </>
        )

    } else {
        return <h1>Sem campanhas para mostrar</h1>
    }
}