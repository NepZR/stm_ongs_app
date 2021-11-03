import InputPassword from "../InputPassword";
import { Link } from "react-router-dom";
import Input from "../Input";
import './styles.css';
import Button from "../Button";

import { useState } from 'react';
import Card from "../Card";
// import CheckBox from "../Checkbox";


const form = {
    FISIC: "cpf",
    JURIDIC: "cnpj"
}

export default function SignUpForm() {

    const [type, setType] = useState(form.FISIC);
    //Apenas para fins de teste de deploy
    // const type = 'cpf'
    function setFormType() {
        if(type === form.FISIC) {
            setType(form.JURIDIC)
        } else { 
            setType(form.FISIC)
        }
    }


    return (
        <>
            <Card>
                <h1 className="title-singup">Sign-up</h1>
                <section className="options-container">
                    <label htmlFor="type-user-1">
                        <input onChange={setFormType} className="input-radio" type="radio" name="type-user" id="cpf" defaultChecked/>
                        Doador
                    </label>
                    <label htmlFor="type-user-2">
                        <input style={{backgroundColor: "black"}} onChange={setFormType} className="input-radio" type="radio" name="type-user" id="cnpj" />
                        ONG
                    </label>
                </section>
                <form className="form-singup" action="" method="post">
                    <Input label="Nome" type="text" placeholder="Nome" name="name" />
                    <Input label={type.toUpperCase()} type="text" placeholder={type.toUpperCase()} name={type} />
                    <Input label="E-mail" type="email" placeholder="E-mail" name="email" />
                    <InputPassword name="senha" placeholder="Senha" id="senha" />
                    <InputPassword name="conf_senha" placeholder="Confirmar" id="conf_senha" />
                    <Button typeBtn="submit" children="Cadastrar" />
                </form>
                <Link
                    className="link"
                    style={{ textAlign: "center", marginTop: '1rem' }}
                    to="/sign-in"
                >
                    Já possuo cadastro?
                </Link>
            </Card>

        </>
    );
}