import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import Input from "../../Input";
import TitleGirl from "../../TiitleGirl";
import './styles.css'

// adicionar no componente input a prop label

export default function PassRecovery() {
    return (
        <>
            <div className="container-pass-recovery">
                <section className="card-pass-recovery">
                    <h2 className="card-pass-title">Redefinição de senha</h2>
                    <p className="card-pass-text">
                        <strong>Esqueceu a senha ?</strong> Sem problema. Informe o e-mail <strong>cadastrado</strong> no sistema
                        e receba o link para redefinir sua senha.
                    </p>
                    <label htmlFor="">
                        E-mail
                        <Input type="email" name="email" placeholder="usermail@gmail.com" />
                    </label>
                    <Button typeBtn="submit" children="Enviar" />
                    <Link style={{textAlign: 'center',marginTop:'1rem'}} className="link" to="/sign-in">Realizar login</Link>
                </section>
                {/* <section className="img-title-container">
                    <h1 className="title">Plataforma <br /> STM ONG's</h1>
                    <img className="girl" src={Girl} alt="Mulher sentada em uma poltrona com um notebook" />
                </section> */}
                <TitleGirl/>
            </div>

        </>
    );
}