const res = require('express/lib/response');
const UserRepository = require('../repositories/UserRepository');

class UserController {
    async index(request, response) {
        const { userId } = request;
        const {name, email, reg_number, description, profile_pic, profile_cover, userTypeId} = await UserRepository.findById(userId);
        if(!email){
            return res.status(404).json({Error: 'User not found'});
        }
        
        return response.json({
            name, email, reg_number, description, profile_pic, profile_cover, userTypeId
        })
    }

    async store(request, response) {
        const {
            name, 
            reg_number, 
            profile_pic,
	        profile_cover,
	        description,
            email, 
            password,
        } = request.body;
        let { type_user } =  request.body;

        if(!type_user){
            return response.status(400).json({error: "Incomplete data"});
        }
        if(type_user === 1) {
            type_user = "pessoa"
        }else{
            type_user = "ong"
        }

        const emailExists = await UserRepository.findByEmail(email);

        if(emailExists) {
            return response.status(400).json({error: 'This email is already by used'});
        }

        const user = await UserRepository.create(
            type_user,
            name,
            reg_number,
            profile_pic,
	        profile_cover,
	        description,
            email, 
            password
            );
        response.json(user)
    }

    async update(request, response) {
        const { userId } = request;
        const { name, profile_pic, profile_cover, description } = request.body;

        const userExists = await UserRepository.findById(userId);

        if(!userExists) {
            return response.status(404).json({error: 'User not found'});
        }

        await UserRepository.update(userId,{
            name, 
            profile_pic,
	        profile_cover,
	        description
        });
        return response.status(200).json({ok: 'Sucess'});
    }

    async delete(request, response) {
        const { id } = request.params;
        const user = await UserRepository.findById(id);

        if(!user) {
            return response.status(400).json({error: 'user not found'});
        }

        await UserRepository.delete(id);
        return response.status(200).json({ok: 'Sucess'});
    }
}

module.exports = new UserController();