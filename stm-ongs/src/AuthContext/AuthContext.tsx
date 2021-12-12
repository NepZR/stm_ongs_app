import React, {
    createContext,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { authUser } from "../auth/auth";
import { Redirect } from "react-router";
import history from "../utils/history/history";
import authApi from "../auth/authApi";
import { typeUser } from "../utils/types";
import JWT from 'jsonwebtoken'

interface ContexProps {
    authenticated: boolean;
    handleLogin: (data: LoginData) => Promise<void>;
    handleLogout: () => void;
    user: User;
}

interface LoginData {
    email: string;
    password: string;
}

interface User {
    uuid: string;
    username: string;
    email: string;
    user_type: number;
}

export const authContext = createContext({} as ContexProps);

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User>({ uuid: "", username: "", email: "", user_type: 0 });
    const [authenticated, setAuthenticated] = useState(false);

    async function getInfos() {
        const token = localStorage.getItem("stmongs-token");

        const AuthStr = 'Bearer '.concat(token ? token : '')

        await authApi.get('/user-profile', { headers: { Authorization: AuthStr } }).then((response) => {
            setUser(response.data)
            //console.log("getinfos Data User: ", response.data)
            // setUser({ name: "octa", email: "deede", type: "FISIC" })
            setAuthenticated(true);
        })
    }
    useEffect(() => {
        const token = localStorage.getItem("stmongs-token");


        if (token !== undefined && token !== "" && token !== null) {

            getInfos()

            //api.defaults.headers. = `Bearer ${JSON.parse(token)}`
        }
    }, []);

    function handleLogout() {
        localStorage.removeItem("stmongs-token");
        setAuthenticated(false);
        setUser({ uuid: "", username: "", email: "", user_type: 0 })
    }

    async function handleLogin({ email, password }: LoginData) {
        const { token }: any = await authUser({
            email,
            password,
        });
        console.log("Token: ", token);
        if (token !== undefined && token !== "" && token !== "undefined") {
            localStorage.setItem("stmongs-token", token);

            const tokenPayload = JWT.verify(token,'secret-hash')
            if(typeof tokenPayload === 'object') {
                console.log('payload',tokenPayload)

                setUser({uuid: tokenPayload.uuid, 
                        email: tokenPayload.email,
                        username: tokenPayload.username,
                        user_type: tokenPayload.user_type
                    })
                    console.log('state user',user)
                    setAuthenticated(true);

            }

        }
    }

    return (
        <authContext.Provider
            value={{ authenticated, handleLogin, handleLogout, user }}
        >
            {children}
        </authContext.Provider>
    );
}

