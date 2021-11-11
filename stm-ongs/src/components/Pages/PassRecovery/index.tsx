import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import Card from "../../Card";
import Input from "../../Input";
import TitleGirl from "../../TiitleGirl";
import './styles.css'

// adicionar no componente input a prop label

export default function PassRecovery() {
    return (
        <>
            <div className="container-pass-recovery">
                <Card>
                    <h2 className="card-pass-title">Redefinição de senha</h2>
                    <p className="card-pass-text">
                        <strong>Esqueceu a senha ?</strong> Sem problema. Informe o e-mail <strong>cadastrado</strong> no sistema
                        e receba o link para redefinir sua senha.
                    </p>
                        <Input id="email" label="E-mail" type="email" name="email" placeholder="usermail@gmail.com" />
                    <Button typeBtn="submit" children="Enviar" />
                    <Link style={{ textAlign: 'center', marginTop: '1rem' }} className="link" to="/sign-in">Voltar ao login</Link>
                </Card>
                <TitleGirl />
            </div>

        </>
    );
}