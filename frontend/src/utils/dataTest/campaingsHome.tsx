import { CampaingItemHome } from "../types";

// Um array de item do tipo ItemList
export const campaingsHome: CampaingItemHome[] = [
    {
        id: 1,
        title: "Arrecadação ração para gatos (filhote)",
        value: 250,
        description: 'dljeljdf',
        active: true,
        date_limit: '12-12-22',
        campaignTypeId: 1,
        campaign_cover: require('./../images/campaing/cats.png'),
        ong_name: 'União Animal'
    },
    {
        id: 2,
        title: "Compra de ração para cães (filhote)",
        value: 300,
        description: '',
        active: true,
        date_limit: '12-03-22',
        campaignTypeId: 1,
        campaign_cover: require('./../images/campaing/cats.png'),
        ong_name: 'União Animal'
    },
    {
        id: 3,
        title: "Arrecadação de alimentos para montagem de cestas básicas",
        description: '',
        active: true,
        date_limit: '12-12-12',
        campaignTypeId: 2,
        //value: undefined,
        campaign_cover: require('./../images/campaing/cats.png'),
        ong_name: 'Creche SEARA'
    },
    {
        id: 4,
        title: "Arrecadação de alimentos para montagem de cestas básicas",
        description: 'dedadfafafaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae',
        active: true,
        date_limit: '12-12-12',
        campaignTypeId: 2,
        //value: undefined,
        campaign_cover: require('./../images/campaing/cats.png'),
        ong_name: 'Creche SEARA'
    },
    {
        id: 5,
        title: "Arrecadação de alimentos para montagem de cestas básicas",
        description: '',
        active: true,
        date_limit: '13-12-12',
        campaignTypeId: 2,
        //value: undefined,
        campaign_cover: require('./../images/campaing/cats.png'),
        ong_name: 'Creche SEARA'
    }
];

export const campaingDetails = [
    {
        id: 1,
        created_by: 1,
        name: "Arrecadação ração para gatos (filhote)",
        description: "Olá, somos a ONG União Animal, somos uma ONG que reune pessoas que adotam a causa dos animais e buscam cuidá-los e ajudar a encontrar um bom lar para eles. Recentemente resgatamos caezinhos ainda filhotes, mas precisamos ter ração suficiente para alimentá-los, junto aos demais que já estavam sob nossos cuidados. Agradecemos toda ajuda que puder oferecer.",
        campaing_type: 1,
        value: 250,
        image: require('./../images/campaing/cats.png'),
    },
    {
        id: 2,
        created_by: 1,
        name: "Compra de ração para cães (filhote)",
        description: "Olá, somos a ONG União Animal, somos uma ONG que reune pessoas que adotam a causa dos animais e buscam cuidá-los e ajudar a encontrar um bom lar para eles. Recentemente resgatamos caezinhos ainda filhotes, mas precisamos ter ração suficiente para alimentá-los, junto aos demais que já estavam sob nossos cuidados. Agradecemos toda ajuda que puder oferecer.",
        campaing_type: 1,
        value: 300,
        image: require('./../images/campaing/cats.png'),
    },
    {
        id: 3,
        created_by: 2,
        name: "Arrecadação de alimentos para montagem de cestas básicas",
        description: "Olá, somos a ONG União Animal, somos uma ONG que reune pessoas que adotam a causa dos animais e buscam cuidá-los e ajudar a encontrar um bom lar para eles. Recentemente resgatamos caezinhos ainda filhotes, mas precisamos ter ração suficiente para alimentá-los, junto aos demais que já estavam sob nossos cuidados. Agradecemos toda ajuda que puder oferecer.",
        campaing_type: 2,
        value: undefined,
        image: require('./../images/campaing/cats.png'),
    },
    {
        id: 4,
        created_by: 3,
        name: "Arrecadação de Brinquedos (Dia das crianças)",
        description: "Olá, somos a ONG União Animal, somos uma ONG que reune pessoas que adotam a causa dos animais e buscam cuidá-los e ajudar a encontrar um bom lar para eles. Recentemente resgatamos caezinhos ainda filhotes, mas precisamos ter ração suficiente para alimentá-los, junto aos demais que já estavam sob nossos cuidados. Agradecemos toda ajuda que puder oferecer.",
        campaing_type: 2,
        value: undefined,
        image: require('./../images/campaing/cats.png'),
    },
];
