import React from "react";
import { Link } from "react-router-dom";
import Girl from './../../../images/girl-sitting.svg';
import SignUpForm from "../../SignUpForm";
import './styles.css'

import { useState } from "react";
const form = {
    FISIC: "cpf",
    JURIDIC: "cnpj"
}

export default function CadastroFisica() {
    const [type, setType] = useState(form.FISIC);

    function setFormType() {
        type === form.FISIC ? setType(form.FISIC) : setType(form.JURIDIC)
    }

    return (
        <>
            <div className="cadastro-container">
                <section>
                    <h1 className="title-singup-page">Plataforma STM ONG's</h1>
                    <img src={Girl} className="girl-cad" alt="Mulher sentada em poltrona" />
                </section>
                <section className="form-sing-container">
                    <h1 className="title-singup">Cadastro</h1>
                    <div className="type-form-container">
                        <label htmlFor="p_fisica">
                            <input onChange={setFormType} type="checkbox" name="p_fisica" required />
                            Física
                        </label>
                        <label htmlFor="p_juridica">
                            <input onChange={setFormType} type="checkbox" name="p_juridica" required />
                            Jurídica
                        </label>
                    </div>
                    <SignUpForm type={type} />
                    <Link style={{textAlign: "center"}} to="/login"> Já possuo cadastro?</Link> 
                </section>
            </div>
        </>
    );
}
