export type ItemList = {
    img: string;
    title: string;
    valor: number;
    ongName: string;
}

export type ReqLogin = {
    email: string;
    password: string;
    typeUser: string;
}

export const tipeUser = {
    FISIC: 'FISIC',
    ONG: 'ONG'
}