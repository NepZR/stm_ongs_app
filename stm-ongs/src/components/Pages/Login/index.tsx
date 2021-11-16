import React from "react";
import './styles.css';
import EyeOp from './../../../images/eye.svg'
import EyeCl from './../../../images/eye-closed.svg'
import { Link } from 'react-router-dom'
import Button from "../../Button";
import Card from "../../Card";

import { useState } from 'react';
import TitleGirl from "../../TiitleGirl";
import Input from "../../Input";
import { ReqLogin } from "../../../utils/types/types";
import axios  from "axios";
import Home from "../Home";
import { Redirect } from "react-router";
import InputPassword from "../../InputPassword";


export default function Login() {

    const [iconPassword, setIconPassword] = useState(EyeCl)
    const [isLogged, setIsLogged] = useState(false)
    const [reqLogin, setReqLogin ] = useState<ReqLogin>({
        email: '',
        password: '',
        typeUser: ''
    })
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function submetLogin() {
        const pass = document.getElementById('password') as HTMLInputElement
        const email = document.getElementById('email') as HTMLInputElement

        setReqLogin({
            email: 'octa.oca44@gmail.com',
            password: 'octabebe',
            typeUser: 'ong'
        })
        console.log('dados de entrada')
        console.log(reqLogin)
        
        axios.post('http://localhost:3333/login',reqLogin)
            .then((data)=> {
                console.log('resposta do server')
                console.log(data.data)
                if(data.data.token != undefined || ''){
                    console.log(data.data.token) 
                    localStorage.setItem('token',data.data.token) 
                    setIsLogged(true)
                } else {
                    setIsLogged(false)
                }
        })
    }

    if(localStorage.getItem('token')) {
        return (
            <Redirect to={{
                    pathname:"/home"
                }}
            />
        )
    } else {

        return (
            <>
                <div className="login-container">
                    <TitleGirl />
                    <Card>
                        <h2 className="title-form">Sign-in</h2>
                        <form className="form-login" onSubmit={submetLogin} action="" method="post">
                            <Input id="email" label="E-mail" type="email" placeholder="Insira o e-mail"  name="email" />
                            <InputPassword label="Password" placeholder="Insira a senha" name="password" id="password"/>
                            {/* <button onClick={submetLogin}>Entrar</button> */}
                            <Button typeBtn="submit">Entrar</Button>
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

    // if(isLogged === true) {
    //     return (
    //         <Redirect to={{
    //                 pathname:"/home",
    //                 state:{
    //                     type: `${reqLogin.typeUser}`
    //                 }
    //             }}
    //         />
    //     )
    // } else {

    //     return (
    //         <>
    //             <div className="login-container">
    //                 <TitleGirl />
    //                 <Card>
    //                     <h2 className="title-form">Sign-in</h2>
    //                     <form className="form-login" onSubmit={submetLogin} action="" method="post">
    //                         <Input id="email" label="E-mail" type="email" placeholder="Insira o e-mail"  name="email" />
    //                         <InputPassword label="Password" placeholder="Insira a senha" name="password" id="password"/>
    //                         {/* <button onClick={submetLogin}>Entrar</button> */}
    //                         <Button typeBtn="submit">Entrar</Button>
    //                     </form>
    //                     <div className="links-container">
    //                         <Link className="link" to="/password-recovery" >Esqueci a senha?</Link>
    //                         <Link className="link" to="/sign-up" >Não tenho cadastro?</Link>
    //                     </div>
    //                 </Card>
    //             </div>
    //         </>
    //     )

    // }

}


  