import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../SignUpForm";
import './styles.css'
import TitleGirl from "../../TiitleGirl";

export default function CadastroFisica() {

    return (
        <>
            <div className="cadastro-container">
                {/* <section>
                    <h1 className="title-singup-page">Plataforma <br/> STM ONG's</h1>
                    <img src={Girl} className="girl-cad" alt="Mulher sentada em poltrona" />
                </section> */}
                <TitleGirl/>
                <section className="form-sing-container">
                    <h1 className="title-singup">Cadastro</h1>
                    {/* <div className="type-form-container">
                        <label htmlFor="p_fisica">
                            <input onChange={setFormType} type="checkbox" name="p_fisica" required />
                            Física
                        </label>
                        <label htmlFor="p_juridica">
                            <input onChange={setFormType} type="checkbox" name="p_juridica" required />
                            Jurídica
                        </label>
                    </div> */}
                    <SignUpForm />
                    <Link className="link" style={{textAlign: "center", marginTop:'1rem'}} to="/login"> Já possuo cadastro?</Link> 
                </section>
            </div>
        </>
    );
}
