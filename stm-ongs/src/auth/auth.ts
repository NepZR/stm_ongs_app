import React from 'react';
import api from './api'

interface IFormData {
    email: string;
    password: string;
}
//const token = "eyJhbGciOiJIUzI1NiJ9.eyJzZW5oYSI6Im9jdGE0NCIsImVtYWlsIjoib2N0YS5vY2E0NEBnbWFpbC5jb20ifQ.cMfsdLllVbjUodZjZq1p3kovgiS02Qc02PKc02"
async function authUser(userData: IFormData){

    let tk = {
        token: '',
        user: {}
    }

    await api.post('/login',userData)
    .then((data)=> {

        if(data.data.token != undefined) {
            console.log('Axios dentro: ',data.data.token)
            tk.token = data.data.token
            tk.user = data.data.user
        }

    })
    .catch(err => console.log(err))

    return tk;
}

export { authUser }
