export type CampaingItemHome = {
    id: number;
    title: string;
    value?: number;
    description: string;
    campaign_cover:string;
    active:boolean;
    date_limit:string;
    campaignTypeId: number;
    ong_name?: string;
}

export type ReqLogin = {
    email: string;
    password: string;
    typeUser: string;
}

export const typeUser = {
    FISIC: 'FISIC',
    ONG: 'ONG'
}