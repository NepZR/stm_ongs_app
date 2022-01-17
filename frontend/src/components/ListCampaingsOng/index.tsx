import React, { useContext } from 'react';
import { CampaingItemHome } from '../../utils/types'
import Campaing from '../Campaign';
import { v4 } from 'uuid';
import { authContext } from '../../AuthContext/AuthContext';

interface IListCampaingsOngs {
    listCamp: Array<CampaingItemHome>;
}

export default function ListCampaingsOngs({ listCamp }: IListCampaingsOngs) {

    const { user: { name } } = useContext(authContext)

    return (
        <>
            <section className="list-campaing-container">
                {listCamp.map((item) => {
                    return <Campaing
                        id={item.id}
                        key={v4()}
                        img={item.campaign_cover}
                        title={item.title}
                        ongName='Nome da Ong'
                        //ongName={item.ong_name}
                        value={item.value}
                    />
                })}
            </section>
        </>
    )
}