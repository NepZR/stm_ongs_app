import React from "react";
import SignUpForm from "../../SignUpForm";
import './styles.css'
import TitleGirl from "../../TiitleGirl";

export default function CadastroFisica() {

    return (
        <>
            <div className="cadastro-container">
                <TitleGirl />
                <SignUpForm />
            </div>
        </>
    );
}
