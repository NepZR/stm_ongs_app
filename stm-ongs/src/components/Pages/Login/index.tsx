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

function hidePass() {
    let inputPassword = document.getElementById('password')

    if (inputPassword?.getAttribute('type') === 'password') {
        inputPassword?.setAttribute('type', 'text')
    } else {
        inputPassword?.setAttribute('type', 'password')
    }
}

export default function Login() {

    const [iconPassword, setIconPassword] = useState(EyeCl)

    function changeIcon() {
        if (iconPassword === EyeCl) {
            hidePass()
            setIconPassword(EyeOp)
        } else {
            hidePass()
            setIconPassword(EyeCl)
        }
    }

    /***/
    function submetLogin() {
        /**Utilizar o Axios para enviar uma requisição post para a api, verificar os dados retornados e 
         * redirecionar para a página home
         * const daddos
         * axios.post('url-da-api/login',dadosFormulario).then((data)=> {
         *      if(data.email && data.senha == dadosFormulario){
         *          redirecionar para home
         *      } else {
         *          continuar no login
         *      }
         * })
         * )
         */

        const pass = document.getElementById('password')
        const email = document.getElementById('email')
        console.log( email)
        console.log( pass)
    }

    submetLogin()
     

    return (
        <>
            <div className="login-container">
                <TitleGirl />
                <Card>
                    <h2 className="title-form">Sign-in</h2>
                    <form className="form-login" action="" method="post">
                        <Input id="email" label="E-mail" type="email" placeholder="Insira o e-mail"  name="email" />
                        <label className="label-login" htmlFor="password">
                            Password
                            <div className="password">
                                <input placeholder="Insira a senha" className="input-login" type="password" name="password" id="password" required />
                                <button className="icon" type="button" onClick={changeIcon}>
                                    <img className="icon-svg" src={iconPassword} alt="Icone senha" />
                                </button>
                            </div>
                        </label>
                        <Button typeBtn="submit">Entrar</Button>
                        <Link to="/home">Entrar</Link>
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