const CampaignRepository = require('../repositories/CampaignRepository');

class CampaignController {
    async index(request, response) {
        const userId = request.userId;
        const campaign = await CampaignRepository.findAll(userId);
        return response.json(campaign);
    }

    async store(request, response) {
        const { title, description, value, dateLimit, typeCamp } = request.body;
        const userId = request.userId;
        
        const newCampaign = await CampaignRepository.create(
            title,
            description,
            value,
            dateLimit,
            typeCamp,
            userId
            );

        return response.json(newCampaign);
    }

    async delete(request, response) {
        const { id } = request.params;
        
        const campaign = await CampaignRepository.findById(id);

        if(!campaign) {
            return response.status(404).json({error: 'Campaign not found'});
        }
        await CampaignRepository.delete(id)
        return response.status(200).json({ok: 'Sucess'});
    }

    async update(request, response) {
        const { id } = request.params;
        const {title, description, dateLimit, value, typeCamp} = request.body;

        const campaignExists = await CampaignRepository.findById(id);

        if(!campaignExists) {
            return response.status(404).json({error: 'Campaign not found'});
        }
        const updateCampaign = await CampaignRepository.update(id,{title, description, dateLimit, value, typeCamp});
        return response.json(updateCampaign);
    }
}

module.exports = new CampaignController();