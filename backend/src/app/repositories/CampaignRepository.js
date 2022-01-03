const { v4 } = require('uuid');

let campaigns = [
    {
        id: v4(),
        title: "Mais Ração",
        description: "A campanha mais ração busca alcançar o valor x para comprar 100kg de ração, o suficienta para...",
        value: "2000",
        typeCamp: "Presencial",
        userId: "1"
    },
    {
        id: v4(),
        title: "Mais Ração 2",
        description: "A campanha mais ração 2 busca alcançar o valor x para comprar 100kg de ração, o suficienta para...",
        value: "2002",
        typeCamp: "Online",
        userId: "2"
    }
];

class CampaignRepository {

    findAll(userId){
        return new Promise((resolve) => resolve (
            campaigns.filter((campaigns) => campaigns.userId === userId)
        ));
      }
    
    findById(id){
        return new Promise((resolve) => resolve (
            campaigns.find( (campaign) => campaign.id === id)
          ));
      }

    create(title, description, value, dateLimit, typeCamp, userId) {
        console.log(userId)
        return new Promise((resolve) => {
            const newCampaign = {
                id: v4(),
                title,
                description,
                value,
                dateLimit,
                typeCamp,
                userId
            };
            campaigns.push(newCampaign);
            resolve(newCampaign);
        });
    }

    delete(id) {
        return new Promise((resolve) => {
            campaigns = campaigns.filter((campaign) => campaign.id !== id)
            resolve()
        });
    }

    update(id,{title, description, dateLimit, value, typeCamp}) {
        return new Promise((resolve) => {
            const updateCampaign = {
                id, 
                title, 
                description, 
                dateLimit, 
                value, 
                typeCamp
            }; 
            
            campaigns = campaigns.map((campaign) => (
                campaign.id === id ? updateCampaign : campaign
            ))
            resolve(campaigns)
        });

    }
}

module.exports =  new CampaignRepository();