const bcrypt = require('bcryptjs');
const User = require('../models/user');
const UserType = require('../models/typeUser');

class UserRepository {  
    async findById(id) {
        const user = await User.findByPk(id)
        return user
    }
      
    async findByEmail(email) {
        const emailExists = await User.findOne({where: {email}});
        return emailExists
    }

    async create(type_user, name, reg_number, profile_pic, profile_cover, url_picpay, description, email, password ) {
        const typeUser = await UserType.findOne({where: {name : type_user}}) 
        const newUser = await User.create({
            name, 
            email, 
            reg_number, 
            profile_pic,
	        profile_cover,
            url_picpay,
	        description,
            password: bcrypt.hashSync(password, 8),
            userTypeId: typeUser.id
        });
        return newUser;
    }

    async update(id, { name, profile_pic, profile_cover, url_picpay, description }){
        await User.update({
            name, 
            profile_pic, 
            profile_cover,
            url_picpay, 
            description
        },{ where: {id} });
    }
}

module.exports = new UserRepository();