import React, {createContext, useState} from "react";
import { authUser } from "../auth/auth";
import history from '../history/history'

interface ContexProps {
    authenticated: boolean
}

export const Context = createContext({} as ContexProps);

function AuthProvider({children}: any) {

    const [ authenticated, setAuthenticated ] = useState(false)

    async function handleLogin() {
        const user = {email: "octa.oca44@gmail.com",password: "octabebe",typeUser: 'ong'}

        const { data: {token} } = authUser(user)
        localStorage.setItem('token',JSON.stringify(token))
        history.push('/home')
    }

    return (
        <Context.Provider value={{ authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    );
}

export { AuthProvider}