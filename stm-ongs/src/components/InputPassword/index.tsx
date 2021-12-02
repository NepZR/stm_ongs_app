import React from "react";
import './styles.css'
import EyeOp from './../../images/eye.svg'
import EyeCl from './../../images/eye-closed.svg';

import { useState } from 'react';

interface InputPasswordProps {
    label: string;
    placeholder: string;
    name: string;
    id: string;
}

export default function InputPassword(props: InputPasswordProps) {

    const [iconPassword, setIconPassword] = useState(EyeCl)

    function hidePass(id: string) {
        let inputPassword = document.getElementById(id) as HTMLInputElement

        if (inputPassword?.getAttribute('type') === 'password') {
            inputPassword?.setAttribute('type', 'text')
        } else {
            inputPassword?.setAttribute('type', 'password')
        }
    }

    function changeIcon() {
        if (iconPassword === EyeCl) {
            hidePass(props.id)
            setIconPassword(EyeOp)
        } else {
            hidePass(props.id)
            setIconPassword(EyeCl)
        }
    }

    return (
        <>
            <label className="label" htmlFor={props.id}>
                {props.label}
                <div className="password">
                    <input placeholder={props.placeholder} className="input-login" type="password" name={props.name} id={props.id} required />
                    <button className="icon-but" type="button" onClick={changeIcon} >
                        <img className="icon-svg" alt="Icone senha" src={iconPassword} />
                    </button>
                </div>
            </label>
        </>
    )
}