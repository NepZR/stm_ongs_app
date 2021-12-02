export type CampaingItemHome = {
    id: number;
    name: string;
    campaing_type: number;
    value?: number;
    image: string;
    ong_name: string
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