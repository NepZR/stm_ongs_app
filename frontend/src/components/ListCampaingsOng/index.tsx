import React from 'react';
import { CampaingItemHome } from '../../utils/types'
import Campaing from '../Campaign';
import { v4 } from 'uuid';

interface IListCampaingsOngs {
    listCamp: Array<CampaingItemHome>;
}

export default function ListCampaingsOngs({ listCamp }: IListCampaingsOngs) {
    
    return (
        <>
            <section className="list-campaing-container">
                {listCamp.map((item) => {
                    return <Campaing id={item.id} key={v4()} img={item.image} title={item.name} ongName={item.ong_name} value={item.value} />
                })}
            </section>
        </>
    )
}