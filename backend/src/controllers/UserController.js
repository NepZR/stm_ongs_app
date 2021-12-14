const UserRepository = require('../repositories/UserRepository');

class UserController {
    async index(request, response) {
        const ongs = await UserRepository.findAll();
        response.json(ongs);
    }

    async store(request, response) {
        const {
            typeUser,
            name, 
            registerNumber, 
            email, 
            password,
        } = request.body;

        if(!registerNumber){
            return response.status(400).json({error: " Incomplete data"});
        }

        const emailExists = await UserRepository.findByEmail(email);

        if(emailExists) {
            return response.status(400).json({error: 'This email is already by used'});
        }

        const ong = await UserRepository.create(
            typeUser,
            name,
            registerNumber, 
            email, 
            password
            );
            response.json(ong)
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, registerNumber } = request.body;
        const userExists = await UserRepository.findById(id);

        if(!userExists) {
            return response.status(400).json({error: 'User not found'});
        }

        await UserRepository.update(id,{
            typeUser,
            name, 
            registerNumber,
            email, 
            password
        });
        return response.status(200).json({ok: 'Sucess'});
    }

    async delete(request, response) {
        const { id } = request.params;
        const ong = await UserRepository.findById(id);

        if(!ong) {
            return response.status(400).json({error: 'ONG not found'});
        }

        await UserRepository.delete(id);
        return response.status(200).json({ok: 'Sucess'});
    }
}

module.exports = new UserController();