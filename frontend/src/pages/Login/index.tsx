import React, { useContext } from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import Card from "../../components/Card";
import TitleGirl from "../../components/TiitleGirl";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import { authContext } from "../../AuthContext/AuthContext";
import { Redirect } from 'react-router-dom'
import { useForm } from "react-hook-form";

interface IloginData {
    email: string;
    password: string;
}

export default function Login() {

    const { handleLogin, authenticated } = useContext(authContext)
    const { handleSubmit, register } = useForm()


    async function submetLogin(data: IloginData) {

        console.log(data)
        await handleLogin(data)

        //data.preventDefault();
        // //const mockUser: IloginData = { email: "octa.oca44@gmail.com", password: "octabebe"}
        // const email = document.getElementById('email') as HTMLInputElement
        // const password = document.getElementById('password') as HTMLInputElement
        // console.log('Dados submetidos')
        // console.log()
        // const formData: IloginData = {
        //     email: email.value,
        //     password: password.value
        // }
        // await handleLogin(formData)
    }

    if (authenticated) {
        return (
            <Redirect to="/home" />
        )

    } else {
        return (
            <>
                <div className="login-container">
                    <TitleGirl />
                    <Card>
                        <h2 className="title-form">Sign-in</h2>

                        <form className="form-login" onSubmit={handleSubmit(submetLogin)} >
                            <Input
                                rest={{ ...register("email") }}
                                id="email"
                                name="email"
                                label="E-mail"
                                type="email"
                                placeholder="Ex: user@gmail.com"
                            />
                            <InputPassword

                                rest={{ ...register("password") }}
                                id="password"
                                name="password"
                                label="Password"
                                placeholder="Insira a senha"
                            />

                            <Button type='submit'>Entrar</Button>
                        </form>
                        {/* <form onSubmit={handleSubmit(submetLogin)}>
                            <input placeholder="Email" {...register("email")} type="text" />
                            <input placeholder="Senha" {...register("password")} type="text" />
                            <Button type='submit'>Entrar</Button>
                        </form> */}

                        <div className="links-container">
                            <Link className="link" to="/password-recovery" >Esqueci a senha?</Link>
                            <Link className="link" to="/sign-up" >Não tenho cadastro?</Link>
                        </div>
                    </Card>
                </div>
            </>
        )
    }



}







    // const [isLogged, setIsLogged] = useState(false)

    // function submetLogin() {
    //     const pass = document.getElementById('password') as HTMLInputElement
    //     const email = document.getElementById('email') as HTMLInputElement

    //     const user = {
    //         email: "octa.oca44@gmail.com",
    //         password: "octabebe",
    //         typeUser: 'ong'
    //     }
    // }
