import React from "react";
import './styles.css';
import GirlSitting from './../../images/girl-sitting.svg';
import EyeOp from './../../../src/images/eye.svg'
import EyeCl from './../../../src/images/eye-closed.svg'
import { Link } from 'react-router-dom'

import { useState } from 'react';

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

    function changeIcon(){
        if(iconPassword === EyeCl) {
            hidePass()
            setIconPassword(EyeOp)
        } else {
            hidePass()
            setIconPassword(EyeCl)
        }
    }

    return (
        <>
            <div className="login-container">
                <h1 className="title-login-page" >Plataforma STM ONG's</h1>
                <img className="girl-login" src={GirlSitting} alt="" />
                <section className="form-container">
                    <h2 className="title-form">Login</h2>
                    <form className="form-login" action="" method="post">
                        <label className="label-login" htmlFor="email">
                            E-mail
                            <input placeholder="Insira o e-mail" className="input-login" type="email" name="email" required />
                        </label>
                        <label className="label-login" htmlFor="password">
                            Password
                            <div className="password">
                                <input placeholder="Insira a senha" className="input-login" type="password" name="password" id="password" required />
                                <button className="icon" type="button" onClick={changeIcon}>
                                    <img className="icon-svg" src={iconPassword} alt="Icone senha" />
                                </button>
                            </div>
                        </label>

                        <button className="button-login" type="submit">Entrar</button>
                    </form>
                    <div className="links-container">
                        <Link className="link" to="/password-recovery" >Esqueci a senha?</Link>
                        <Link className="link" to="/sign-up" >Já possuo cadastro?</Link>
                    </div>
                </section>
            </div>
        </>
    )
}