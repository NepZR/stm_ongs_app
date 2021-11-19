import React from 'react';
import  axios from 'axios';

//const token = "eyJhbGciOiJIUzI1NiJ9.eyJzZW5oYSI6Im9jdGE0NCIsImVtYWlsIjoib2N0YS5vY2E0NEBnbWFpbC5jb20ifQ.cMfsdLllVbjUodZjZq1p3kovgiS02Qc02PKc02"
async function authUser(userData: any){

    let tk = {
        token: 'huhuhuhu',
        user: {}
    }

    await axios.post('http://localhost:3333/login',userData)
    .then((data)=> {

        if(data.data.token != undefined) {
            console.log('Axios dentro: ',data.data.token)
            tk.token = data.data.token
            tk.user = data.data.user
            //return ({token: data.data.token });
        }

    })
    .catch(err => console.log(err))

    return tk;
}

export { authUser }
