import React, { useContext } from 'react';
import './styles.css';
import { Link, Redirect } from "react-router-dom";
import InputPassword from "../InputPassword";
import Input from "../Input";
import Button from "../Button";
import Card from "../Card";
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { BASE_URL_API_LOCAL } from '../../utils/requests';
import { setLocalToken } from '../../utils/setLocalToken/setLocalToken';
import Login from '../../pages/Login';
import { authContext } from '../../AuthContext/AuthContext';

const form = { FISIC: "cpf", ONG: "cnpj" }

interface ISigInData {
    type_user: number;
    name: string;
    reg_number: string;
    email: string;
    password: string;
    /*conf_senha: string;*/
}

export default function SignUpForm() {

    const { authenticated, handleLogin } = useContext(authContext)
    const [type, setType] = useState(form.FISIC);
    const { register, handleSubmit, setValue } = useForm()
    //Apenas para fins de teste de deploy
    // const type = 'cpf'


    function setFisic() {
        setType(form.FISIC)
    }

    function setOng() {
        setType(form.ONG)
    }

    const handleSignIn = async (data: ISigInData) => {
        console.log('Dados enviados', data)
        const user = await axios.post(`${BASE_URL_API_LOCAL}/user`, data)
        console.log(user.data)

        const credentials = { email: user.data.email, password: data.password }
        console.log(credentials)

        handleLogin(credentials)
        /*const userData = await axios.post(`${BASE_URL_API_LOCAL}/auth`, credentials)
        console.log('Auth', userData.data)

        setLocalToken(userData.data.token)*/

    }

    if (authenticated) {
        return <Redirect to="/home" />
    } else {

        return (
            <>
                <Card>
                    <h1 className="title-singup">Sign-up</h1>

                    <div>
                        <label className="option" htmlFor="cpf">
                            <input
                                className="input-radio"
                                onClick={setFisic}
                                type="radio"
                                name="type-user"
                                id="cpf"
                                defaultChecked
                            />
                            Fisica
                        </label>
                        <label className="option" htmlFor="cnpj">
                            <input
                                className="input-radio"
                                type="radio"
                                name="type-user"
                                id="cnpj"
                                onClick={setOng}
                            />
                            ONG
                        </label>
                    </div>

                    <form className="form-singup" onSubmit={handleSubmit(handleSignIn)}>

                        <input
                            {...register("type_user")}
                            type='hidden'
                            name="type_user"
                            {...type === form.FISIC ? setValue("type_user", 1) : setValue("type_user", 2)}

                        />

                        <Input
                            rest={{ ...register("name") }}
                            id="name"
                            label="Nome"
                            type="text"
                            placeholder="Nome"
                            name="name"
                        />
                        <Input
                            rest={{ ...register("reg_number") }}
                            id="reg_number"
                            label={type.toUpperCase()}
                            type="text"
                            placeholder={type.toUpperCase()}
                            name="reg_number"
                        />
                        <Input
                            rest={{ ...register("email") }}
                            id="email"
                            label="E-mail"
                            type="email"
                            placeholder="E-mail"
                            name="email"
                        />
                        <InputPassword
                            rest={{ ...register("password") }}
                            label="Password"
                            name="password"
                            placeholder="Senha"
                            id="senha"
                        />
                        <InputPassword
                            rest={{ ...register("conf_senha") }}
                            label="Password Confirm"
                            name="conf_senha"
                            placeholder="Confirmar"
                            id="conf_senha"
                        />
                        <Button
                            type='submit'
                            children="Cadastrar"
                        />
                    </form>

                    <Link className="link" style={{ textAlign: "center", marginTop: '1rem' }} to="/sign-in" >
                        Já possuo cadastro?
                    </Link>
                </Card>

            </>
        );

    }


}