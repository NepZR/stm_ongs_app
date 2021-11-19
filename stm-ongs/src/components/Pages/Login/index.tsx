import React, { useContext } from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import Card from "../../Card";
import TitleGirl from "../../TiitleGirl";
import Input from "../../Input";
import InputPassword from "../../InputPassword";
import { Context } from "../../../Context/AuthContext";
import { Redirect } from 'react-router-dom'


export default function Login() {

    const { handleLogin, authenticated } = useContext(Context)

    async function submetLogin(data: any) {
        const mockUser = { email: "octa.oca44@gmail.com", password: "octabebe"}
        data.preventDefault();

        console.log('Dados submetidos')
        //console.log(data)
        console.log(mockUser)

        await handleLogin(mockUser)
    }

    if(authenticated) {
        return (
            <Redirect to="/home"/>
        )

    } else {
        return (
            <>
                <div className="login-container">
                    <TitleGirl />
                    <Card>
                        <h2 className="title-form">Sign-in</h2>
                        <form className="form-login" >
                            <Input id="email" label="E-mail" type="email" placeholder="Insira o e-mail"  name="email" />
                            <InputPassword label="Password" placeholder="Insira a senha" name="password" id="password"/>
                            <button onClick={submetLogin}>Entrar</button> 
                            <Link to="/home">Entrar</Link>
                            {/* <Button typeBtn="button">Entrar</Button> */}
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
