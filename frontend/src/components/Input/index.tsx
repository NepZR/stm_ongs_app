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

export default function Input({ id, type, name, value,label, placeholder }: any) {

    const [valueInput, setValueInput] = useState(value)
    function setValue(e:any) {
        setValueInput(e)
    }

    return (
        <>
            <label htmlFor={name} className="label">
                {label}
                <input
                    onChange={(e)=> setValueInput(e.target.value)}
                    
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