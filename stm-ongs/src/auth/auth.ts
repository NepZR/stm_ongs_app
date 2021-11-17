import { ReqLogin } from './../utils/types/types';
import  axios from 'axios';

//const token = "eyJhbGciOiJIUzI1NiJ9.eyJzZW5oYSI6Im9jdGE0NCIsImVtYWlsIjoib2N0YS5vY2E0NEBnbWFpbC5jb20ifQ.cMfsdLllVbjUodZjZq1p3kovgiS02Qc02PKc02"
function authUser(userData: any){

    axios.post('http://localhost:3333/login',userData)
    .then((data)=> {

        console.log(data.data.token)
        return data;

    })
    .catch(err => console.log(err))
}

export { authUser }
