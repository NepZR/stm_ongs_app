import React, { useContext } from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import Card from "../../components/Card";
import TitleGirl from "../../components/TiitleGirl";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import { Context } from "../../AuthContext/AuthContext";
import { Redirect } from 'react-router-dom'


export default function Login() {

    const { handleLogin, authenticated } = useContext(Context)

    interface IloginData { email: string; password: string; }

    async function submetLogin(data: any) {
        data.preventDefault();
        //const mockUser: IloginData = { email: "octa.oca44@gmail.com", password: "octabebe"}
        const email = document.getElementById('email') as HTMLInputElement
        const password = document.getElementById('password') as HTMLInputElement
        console.log('Dados submetidos')
        console.log()
        const formData = {
            email: email.value,
            password: password.value
        }

        await handleLogin(formData)
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
                        <form className="form-login" >
                            <Input id="email" name="email" label="E-mail" type="email" placeholder="Insira o e-mail" />
                            <InputPassword id="password" name="password" label="Password" placeholder="Insira a senha" />
                            <Button onclick={submetLogin} >Entrar</Button>
                        </form>
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
