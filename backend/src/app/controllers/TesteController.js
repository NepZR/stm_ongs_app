const User = require('../models/user');
const UserType = require('../models/typeUser');

class TesteController {
    async store(request, response) {
        // rota para testes
        return response.json('ok')
    }
}

module.exports = new TesteController();