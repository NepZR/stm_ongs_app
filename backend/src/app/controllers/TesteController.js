const User = require('../models/user');
const UserType = require('../models/typeUser');

class TesteController {
    async store(request, response) {
            const { type_user } = request.body;

            try {
                const userType = await UserType.create({type: type_user});
                return response.json(userType);      
            } catch (error) {
                console.log(error)
                return response.send("error")
            }
    }
}

module.exports = new TesteController();