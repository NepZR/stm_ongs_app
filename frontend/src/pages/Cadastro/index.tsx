import React from "react";
import SignUpForm from "../../components/SignUpForm";
import './styles.css'
import TitleGirl from "../../components/TiitleGirl";

export default function Cadastro() {

    return (
        <>
            <div className="cadastro-container">
                <TitleGirl />
                <SignUpForm />

            </div>
        </>
    );
}
