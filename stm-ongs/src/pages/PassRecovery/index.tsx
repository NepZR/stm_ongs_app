import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import TitleGirl from "../../components/TiitleGirl";
import './styles.css';
import { useForm } from 'react-hook-form';

interface ISubPass {
    email: string;
}

export default function PassRecovery() {

    const { register, handleSubmit, setValue } = useForm();

    const handleSubPass = async (data: ISubPass) => {
        console.log(data.email)

        /**
         * api.('/reset-pass').then((response)=> {
         *      console.log(response.data)
         * })
         */
    }

    return (
        <>
            <div className="container-pass-recovery">
                <Card>
                    <h2 className="card-pass-title">Redefinição de senha</h2>
                    <p className="card-pass-text">
                        <strong>Esqueceu a senha ?</strong> Sem problema.
                        Informe o e-mail <strong>cadastrado</strong> no sistema
                        e receba o link para redefinir sua senha.
                    </p>
                    <form onSubmit={handleSubmit(handleSubPass)}>
                        <Input
                            rest={{ ...register("email") }}
                            id="email"
                            label="E-mail"
                            type="email"
                            name="email"
                            placeholder="usermail@gmail.com"
                        />

                        <Button type='submit'>Enviar</Button>
                    </form>

                    <Link
                        style={{ textAlign: 'center', marginTop: '1rem' }}
                        className="link"
                        to="/sign-in"
                    >Voltar ao login</Link>
                </Card>
                <TitleGirl />
            </div>

        </>
    );
}