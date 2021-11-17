import React, {createContext, useState} from "react";
import { authUser } from "../auth/auth";

interface ContexProps {
    authenticated: boolean
}

export const Context = createContext({} as ContexProps);

function AuthProvider({children}: any) {

    const [ authenticated, setAuthenticated ] = useState(false)
    const user = {email: "octa.oca44@gmail.com",password: "octabebe",typeUser: 'ong'}

    async function handleLogin() {
        //const { data } = authUser(user)
        //console.log(data)
    }



    return (
        <Context.Provider value={{ authenticated }}>
            {children}
        </Context.Provider>
    );
}

export { AuthProvider}



/**
 * 
 * 
 *     async function handleLogin() {
        const user = {email: "octa.oca44@gmail.com",password: "octabebe",typeUser: 'ong'}

        const { data: {token} } = authUser(user)
        localStorage.setItem('token',JSON.stringify(token))
        history.push('/home')
    }


 */