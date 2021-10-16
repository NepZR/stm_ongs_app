import React from "react";
import './styles.css';
import GirlSitting from './../../images/girl-sitting.svg';
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="login-container">
                <h1 className="title">Plataforma STM ONG's</h1>
                <img src={GirlSitting} alt="" />
                <section className="form-container">
                    <h2>Login</h2>
                    <form action="" method="post">
                        <label className="label-login" htmlFor="email">
                            E-mail
                            <input className="input-login" type="email" name="email" />
                        </label>
                        <label className="label-login" htmlFor="password">
                            Password
                            <input className="input-login" type="text" name="password" />
                        </label>
                        <button className="button-login" type="submit">Entrar</button>
                    </form>
                    <Link to="/password-recovery" >Esqueci a senha?</Link>
                    <Link to="/sign-up" >Já possuo cadastro?</Link>
                </section>
            </div>
        </>
    )
}