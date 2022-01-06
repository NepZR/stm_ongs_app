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
import Loading from "../components/Loading";
import axios from "axios";
import { BASE_URL_API_LOCAL } from "../utils/requests";
import { setLocalToken } from "../utils/setLocalToken/setLocalToken";

interface ContexProps {
    authenticated: boolean;
    handleLogin: (data: LoginData) => Promise<void>;
    handleLogout: () => void;
    setStateLoading: (state: boolean) => void;
    user: User;
    loading: boolean;
}

interface LoginData {
    email: string;
    password: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    reg_number?: string;
    profile_pic: string;
    profile_cover: string;
    description: string;
    user_type: number;
}

interface IAuthResponse {
    user: User;
    token: string;
}

export const authContext = createContext({} as ContexProps);

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User>({
        id: "",
        name: "",
        email: "",
        reg_number: "",
        profile_pic: '',
        profile_cover: '',
        description: "",
        user_type: 0,
    });
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState<boolean>(false)

    async function getInfos() {
        setLoading(true)
        const token = localStorage.getItem("stmongs-token");

        const AuthStr = 'Bearer '.concat(token ? token : '')

        await authApi.get('/user-profile', { headers: { Authorization: AuthStr } }).then((response) => {
            setUser(response.data)
            //console.log("getinfos Data User: ", response.data)
            // setUser({ name: "octa", email: "deede", type: "FISIC" })
            setAuthenticated(true);
        })
        setLoading(false)
    }
    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem("stmongs-token");

        if (token !== undefined && token !== "" && token !== null) {
            getInfos()
            //api.defaults.headers. = `Bearer ${JSON.parse(token)}`
        }
        setLoading(false)
    }, []);

    function handleLogout() {
        setLoading(true)
        localStorage.removeItem("stmongs-token");
        setAuthenticated(false);
        setUser({
            id: "",
            name: "",
            email: "",
            reg_number: "",
            profile_pic: '',
            profile_cover: '',
            description: "",
            user_type: 0,
        })
        setLoading(false)
    }

    function setStateLoading(state: boolean) {
        setLoading(state)
    }

    async function handleLogin({ email, password }: LoginData) {
        setLoading(true)

        await axios.post(`${BASE_URL_API_LOCAL}/auth`, { email, password })
            .then((response) => {
                setUser({
                    id: response.data.user.id,
                    name: response.data.user.name,
                    email: response.data.user.email,
                    reg_number: response.data.user.reg_number,
                    profile_pic: response.data.user.profile_pic,
                    profile_cover: response.data.user.profile_cover,
                    description: response.data.user.description,
                    user_type: response.data.user.userTypeId,
                })
                console.log(user)
                setLocalToken(response.data.token)
                setAuthenticated(true);
            })



        /*if (token !== undefined && token !== "" && token !== "undefined") {
            localStorage.setItem("stmongs-token", token);

            const tokenPayload = JWT.verify(token, 'secret-hash')
            if (typeof tokenPayload === 'object') {
                console.log('payload', tokenPayload)

                setUser({
                    id: tokenPayload.id,
                    email: tokenPayload.email,
                    name: tokenPayload.name,
                    profile_pic: tokenPayload.profile_pic,
                    profile_cover: tokenPayload.profile_cover,
                    description: token.description_text,
                    user_type: tokenPayload.user_type
                })
                console.log('state user', user)
                setAuthenticated(true);

            }

        }*/

        setLoading(false)
    }

    /*async function handleLogin({ email, password }: LoginData) {
        setLoading(true)
        const { token }: any = await authUser({
            email,
            password,
        });
        console.log("Token: ", token);
        if (token !== undefined && token !== "" && token !== "undefined") {
            localStorage.setItem("stmongs-token", token);

            const tokenPayload = JWT.verify(token, 'secret-hash')
            if (typeof tokenPayload === 'object') {
                console.log('payload', tokenPayload)

                setUser({
                    id: tokenPayload.id,
                    email: tokenPayload.email,
                    name: tokenPayload.name,
                    profile_pic: tokenPayload.profile_pic,
                    profile_cover: tokenPayload.profile_cover,
                    description: token.description_text,
                    user_type: tokenPayload.user_type
                })
                console.log('state user', user)
                setAuthenticated(true);

            }

        }

        setLoading(false)
    }*/

    return (
        <authContext.Provider
            value={{ authenticated, handleLogin, handleLogout, user, loading, setStateLoading }}
        >
            {children}
        </authContext.Provider>
    );
}

