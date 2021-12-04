import React from "react";
import './styles.css'

// interface InputProps {
//     label: string,
//     type: string,
//     placeholder: string,
//     name: string,
//     id: string,
//     value?: string | number
// }

export default function Input({ id, name, label, rest, placeholder }: any) {

    return (
        <>
            <label htmlFor={name} className="label">
                {label}
                <input
                    {...rest}
                    //placeholder={props.placeholder}
                    className="input"
                    name={name}
                    placeholder={placeholder}
                    //type={props.type}
                    id={id}
                    //value={props.value}
                    //name={props.name}
                    required
                />
            </label>
        </>
    )
}