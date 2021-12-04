import './styles.css';
import { Link } from "react-router-dom";
import InputPassword from "../InputPassword";
import Input from "../Input";
import Button from "../Button";
import Card from "../Card";
import { useState } from 'react';

const form = { FISIC: "cpf", JURIDIC: "cnpj" }

export default function SignUpForm() {

    const [type, setType] = useState(form.FISIC);
    //Apenas para fins de teste de deploy
    // const type = 'cpf'
    function setFormType() {
        if (type === form.FISIC) {
            setType(form.JURIDIC)
        } else {
            setType(form.FISIC)
        }
    }


    return (
        <>
            <Card>
                <h1 className="title-singup">Sign-up</h1>
                {/* <section className="options-container">
                    <label htmlFor="type-user-1">
                        <input onChange={setFormType} className="input-radio" type="radio" name="type-user" id="cpf" defaultChecked />
                        Doador
                    </label>
                    <label htmlFor="type-user-2">
                        <input style={{ backgroundColor: "black" }} onChange={setFormType} className="input-radio" type="radio" name="type-user" id="cnpj" />
                        ONG
                    </label>
                </section> */}
                <div>
                    <input onChange={setFormType} type="radio" name="type-user" id="cpf" defaultChecked />
                    <input onChange={setFormType} type="radio" name="type-user" id="cnpj" />
                </div>
                <form className="form-singup">
                    <input name="type_user" value={type} type='hidden' />
                    <Input id="name" label="Nome" type="text" placeholder="Nome" name="name" />
                    <Input id="reg_number" label={type.toUpperCase()} type="text" placeholder={type.toUpperCase()} name={type} />
                    <Input id="email" label="E-mail" type="email" placeholder="E-mail" name="email" />
                    <InputPassword label="Password" name="senha" placeholder="Senha" id="senha" />
                    <InputPassword label="Password Confirm" name="conf_senha" placeholder="Confirmar" id="conf_senha" />
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