const CampaignRepository = require('../repositories/CampaignRepository');
const UserRepository = require('../repositories/UserRepository');

class CampaignController {
    async index(request, response) {
        const { userId } = request;
        const user = await UserRepository.findById(userId);

        if (user.userTypeId === 1){
            const campaigns = await CampaignRepository.findAll();
            return response.json(campaigns);
        }
        const campaigns = await CampaignRepository.findByUser(userId);
        return response.json(campaigns);
    }

    async show(request, response) {
        const {id} = request.params;

        const campaignById = await CampaignRepository.findById(id);

        if(!campaignById) {
            return response.status(404).json({error: 'Campaign not exist'});
        }
        return response.json(campaignById);
    }

    async store(request, response) {
        const { title, description, value, campaign_cover, date_limit } = request.body;
        let { type_camp } =  request.body;
        const { userId } = request;
        
        const user = await UserRepository.findById(userId);
        if(!user) {
            return res.status(404).json({Erro: 'User not found'});
        }
        if(type_camp === 1) {
            type_camp = "online"
        }else{
            type_camp = "presencial"
        }

        await CampaignRepository.create(
            title,
            description,
            value,
            campaign_cover,
            date_limit,
            type_camp,
            userId
            );

        return response.status(200).send()
    }

    async delete(request, response) {
        const { id } = request.params;
        
        const campaign = await CampaignRepository.findById(id);

        if(!campaign) {
            return response.status(404).json({error: 'Campaign not found'});
        }
        await CampaignRepository.delete(id)
        return response.sendStatus(200);
    }

    async update(request, response) {
        const { id } = request.params;
        const { userId } = request;
        const { title, description, value, campaign_cover, date_limit } = request.body;

        const campaignExists = await CampaignRepository.findById(id);
        const user = await UserRepository.findById(userId);


        if(user.userTypeId === 1){
            return response.status(401).json({error: "User not authorization"});
        }
        if(!campaignExists) {
            return response.status(404).json({error: 'Campaign not found'});
        }

        await CampaignRepository.update(id, { title, description, value, campaign_cover, date_limit });
        return response.sendStatus(200);
    }
}

module.exports = new CampaignController();