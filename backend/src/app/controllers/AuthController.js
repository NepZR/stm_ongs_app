require('dotenv/config');
const bcrypt = require("bcryptjs");
const UserRepository = require("../repositories/UserRepository");
const jwt = require('jsonwebtoken');

class AuthController {
    async authenticate(request, response) {
        const {email, password} = request.body;
        const user = await UserRepository.findByEmail(email);
        
        if(!user) {
            return response.sendStatus(401)
        }
        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {
            return response.sendStatus(401)
        }
        const token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn: '1d'});

        delete user.password
        return response.json({
            user,
            token
        })
    }
}
module.exports = new AuthController();