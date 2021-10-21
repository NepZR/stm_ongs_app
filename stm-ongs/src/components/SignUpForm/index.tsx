import InputPassword from "../InputPassword";
import Input from "../Input";
import './styles.css';
import Button from "../Button";

import { useState } from 'react';


const form = {
    FISIC: "cpf",
    JURIDIC: "cnpj"
}

export default function SignUpForm() {

    const [type, setType] = useState(form.FISIC);

    function setFormType() {
        type === form.FISIC ? setType(form.JURIDIC) : setType(form.FISIC)
    }

    return (
        <>
            <div className="cadastro-container">

                <form className="form-singup" action="" method="post">
                    <div className="type-form-container">
                        <label className="type-form-item" htmlFor="p_fisica">
                            <input className="check-box-type" onChange={setFormType} type="checkbox" name="p_fisica" required />
                            Física
                        </label>
                        <label className="type-form-item" htmlFor="p_juridica">
                            <input className="check-box-type" onChange={setFormType} type="checkbox" name="p_juridica" required />
                            Jurídica
                        </label>
                    </div>

                    <Input type="text" placeholder="Nome" name="name" />
                    <Input type="text" placeholder={type} name={type} />
                    <Input type="email" placeholder="E-mail" name="email" />
                    <InputPassword name="senha" placeholder="Senha" id="senha" />
                    <InputPassword name="conf_senha" placeholder="Confirmar" id="conf_senha" />
                    <Button typeBtn="submit" children="Cadastrar" />
                </form>
            </div>
        </>
    );
}