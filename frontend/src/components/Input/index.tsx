import React, { useState } from "react";
import './styles.css'

// interface InputProps {
//     label: string,
//     type: string,
//     placeholder: string,
//     name: string,
//     id: string,
//     value?: string | number
// }

export default function Input({ id, type, name, value, label, placeholder, rest }: any) {

    const [valueInput, setValueInput] = useState(value)
    function setValue(e: string) {
        setValueInput(e)
    }

    return (
        <>
            <label htmlFor={id} className="label">
                {label}
                { }
                <input
                    onChange={(e) => { setValue(e.target.value) }}
                    {...rest}
                    //placeholder={props.placeholder}
                    className="input"
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    id={id}
                    value={valueInput}
                    //name={props.name}
                    required
                />
            </label>
        </>
    )
}