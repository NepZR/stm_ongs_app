import React, {createContext, SetStateAction, useEffect, useState} from "react";
import { authUser } from "../auth/auth";
import { Redirect } from "react-router";
import history from './../history/history'

interface ContexProps {
    authenticated: boolean;
    handleLogin: (data: LoginData) => Promise<void>
    handleLogout: () => void;
    user: User
}

interface LoginData {
    email: string;
    password: string;
}

interface User {
    name: string;
    email: string;
    type: string;
}

export const Context = createContext({} as ContexProps);

export function AuthProvider({children}: any) {

    //const mockUser = { email: "octa.oca44@gmail.com", password: "octabebe"}
    const [user, setUser] = useState<User>({name: '',email: '', type:''})
    
    //const authenticated = !!user;
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('stmongs-token')

        if(token) {
            setAuthenticated(true)
        }
    },[])

    function handleLogout() {
        localStorage.removeItem('stmongs-token')
        setAuthenticated(false)
    }

    async function handleLogin({ email, password }: LoginData) {

        const { token, user }: any = await authUser({
            email,
            password
        })
        //console.log('Token: ',token)
        //console.log('Data User: ',user)
        setUser(user)
        localStorage.setItem('stmongs-token',token)
        setAuthenticated(true) 
    }


    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout, user }}>
            {children}
        </Context.Provider>
    );
}




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