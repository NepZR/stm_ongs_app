const bcrypt = require('bcryptjs');
const User = require('../models/user');
const UserType = require('../models/typeUser');

class UserRepository {  
    async findById(id) {
        const userExists = await User.findByPk(id)
        return userExists
    }
    findAll() {
        return new Promise((resolve) => resolve (users));
      }
      
    async findByEmail(email) {
        const emailExists = await User.findOne({where: {email}});
        return emailExists
    }

    async create(type_user, name, reg_number, profile_pic, profile_cover, description, email, password ) {
        const typeUser = await UserType.findOne({where: {name : type_user}}) 
        const newUser = await User.create({
            name, 
            email, 
            reg_number, 
            profile_pic,
	        profile_cover,
	        description,
            password: bcrypt.hashSync(password, 8),
            userTypeId: typeUser.id
        });
        return newUser;
    }

    delete(id) {
        return new Promise((resolve) => {
            users = users.filter((user) => user.id !== id )
            resolve();
        });
    }

    async update(id, { name, profile_pic, profile_cover, description}){
        await User.update({
            name, 
            profile_pic, 
            profile_cover, 
            description
        },{ where: {id} });
    }
}

module.exports = new UserRepository();