const { v4 } = require('uuid');
const bcrypt = require('bcryptjs');


let users = [
    {
        id: v4(),
        typeUser: "ong",
        name: 'União Animal1', 
        registerNumber: "15151541",
        email: "ong@animal1.com",
        password: "1234561",
    },
    {
        id: v4(),
        typeUser: "ong",
        name: 'União Animal2', 
        registerNumber: "15151542",
        email: "ong@animal2.com",
        password: "1234562",
    },
    {
        id: v4(),
        typeUser: "comum",
        name: 'Jean Amaral', 
        registerNumber: "15151543",
        email: "jean@animal.com",
        password: "1234563",
    }
];

class UserRepository {  
    findById(id) {
        return new Promise((resolve) => resolve(
            users.find((user) => user.id === id),
        ))
    }

    findAll() {
        return new Promise((resolve) => resolve (users));
      }
      
    findByEmail(email) {
        return new Promise((resolve) => resolve(
            users.find((user) => user.email === email)
        ));
    }

    create(name, typeUser, registerNumber, email, password ) {
        return new Promise((resolve) => {
            const newUser = {
                id: v4(),
                typeUser,
                name,
                registerNumber,
                email,
                password: bcrypt.hashSync(password, 8)
            };
            users.push(newUser);
            resolve(newUser);
        });
    }

    delete(id) {
        return new Promise((resolve) => {
            users = users.filter((user) => user.id !== id )
            resolve();
        });
    }

    update(id, {typeUser, name, registerNumber, email, password }){
        return new Promise((resolve) => {
            const updateUser = {
                id,
                typeUser,
                name, 
                registerNumber,
                email, 
                password,
                
            }
            users.map((user) => user.id === id ? updateUser : user)
            resolve()
        })
    }
}

module.exports = new UserRepository();