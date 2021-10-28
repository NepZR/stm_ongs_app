import InputPassword from "../InputPassword";
import { Link } from "react-router-dom";
import Input from "../Input";
import './styles.css';
import Button from "../Button";

// import { useState } from 'react';
import Card from "../Card";


const form = {
    FISIC: "cpf",
    JURIDIC: "cnpj"
}

export default function SignUpForm() {

    // const [type, setType] = useState(form.FISIC);
    //Apenas para fins de teste de deploy
    const type = 'cpf'
    // function setFormType() {
    //     type === form.FISIC ? setType(form.JURIDIC) : setType(form.FISIC)
    // }

    return (
        <>
            <Card>
                <h1 className="title-singup">Sign-up</h1>
                <form className="form-singup" action="" method="post">
                    {/* <div className="type-form-container">
                        <label className="type-form-item" htmlFor="p_fisica">
                            <input className="check-box-type" onChange={setFormType} type="checkbox" name="p_fisica" required />
                            Física
                        </label>
                        <label className="type-form-item" htmlFor="p_juridica">
                            <input className="check-box-type" onChange={setFormType} type="checkbox" name="p_juridica" required />
                            Jurídica
                        </label>
                    </div> */}

                    <Input label="Nome" type="text" placeholder="Nome" name="name" />
                    <Input label={type} type="text" placeholder={type} name={type} />
                    <Input label="E-mail" type="email" placeholder="E-mail" name="email" />
                    <InputPassword name="senha" placeholder="Senha" id="senha" />
                    <InputPassword name="conf_senha" placeholder="Confirmar" id="conf_senha" />
                    <Button typeBtn="submit" children="Cadastrar" />
                </form>
                <Link className="link" style={{ textAlign: "center", marginTop: '1rem' }} to="/sign-in"> Já possuo cadastro?</Link>
            </Card>

        </>
    );
}