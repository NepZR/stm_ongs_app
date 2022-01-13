const { v4 } = require('uuid');
const Campaign = require('../models/campaign');
const CampaignType = require('../models/typeCampaign');

class CampaignRepository {
    async findAll(){
        const campaigns = await Campaign.findAll({
            attributes: { exclude: ['userId'] },
            where:{
            active: true
        }});
        return campaigns;
      }
    
    async findByUser(id){
        const campaigns = await Campaign.findAll({
            attributes: { exclude: ['userId'] },
            where: {
            userId: id}});
        return campaigns;
    }


    async findById(id){
        const campaign = await Campaign.findByPk(id);
        return campaign;
    }

    async create(title, description, value, campaign_cover, date_limit, type_camp, userId) {
        const typeCampaign = await CampaignType.findOne({where: {name : type_camp}});
        const newCampaign = await Campaign.create({
            title,
            description,
            value,
            campaign_cover,
            date_limit,
            campaignTypeId: typeCampaign.id,
            userId
        });
        return newCampaign;
    }

    async delete(id) {
        await Campaign.destroy({
            where: {
                id
            }
        });
    }

    async update(id, title, description, value, campaign_cover, date_limit) {
        const updateCampaign = { 
            title, 
            description,
            value,
            campaign_cover,
            date_limit
        }; 
        await Campaign.update({ updateCampaign }, {
            where: {
                id
            }
        }); 

    }
}

module.exports =  new CampaignRepository();