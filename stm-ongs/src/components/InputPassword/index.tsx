import React from "react";
import './styles.css'
import EyeOp from './../../assets/images/eye.svg'
import EyeCl from './../../assets/images/eye-closed.svg';

import { useState } from 'react';

// interface InputPasswordProps {
//     label: string;
//     placeholder: string;
//     name: string;
//     id: string;
// }

export default function InputPassword({ placeholder, label, id, rest }: any) {

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
            hidePass(id)
            setIconPassword(EyeOp)
        } else {
            hidePass(id)
            setIconPassword(EyeCl)
        }
    }

    return (
        <>
            <label className="label" htmlFor={id}>
                {label}
                <div className="password">
                    <input
                        id={id}
                        className="input-login"
                        type="password"
                        required
                        {...rest}
                        //name={props.name}
                        placeholder={placeholder}
                    />

                    <button className="icon-but" type="button" onClick={changeIcon} >
                        <img className="icon-svg" alt="Icone senha" src={iconPassword} />
                    </button>
                </div>
            </label>
        </>
    )
}