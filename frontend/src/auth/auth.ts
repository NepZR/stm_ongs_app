import React from 'react';
import authApi from './authApi';
//import api from './authApi'

interface IFormData {
    email: string;
    password: string;
}
//const token = "eyJhbGciOiJIUzI1NiJ9.eyJzZW5oYSI6Im9jdGE0NCIsImVtYWlsIjoib2N0YS5vY2E0NEBnbWFpbC5jb20ifQ.cMfsdLllVbjUodZjZq1p3kovgiS02Qc02PKc02"
async function authUser({email, password}: IFormData){

    let tk = {
        token: '',
        user: {}
    }

    //const headers = {'Autorization': `Basic ${email}:${password}` }

    await authApi.post('/login',{},{auth: {username: email, password: password}})
    .then((data)=> {

        if(data.data.token !== undefined) {
            tk.token = data.data.token
            tk.user = data.data.user
        }
    })
    .catch(err => console.log(err))

    return tk;
}

export { authUser }
