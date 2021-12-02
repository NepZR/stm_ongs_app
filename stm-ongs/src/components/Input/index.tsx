import React from "react";
import './styles.css'

interface InputProps {
    label: string,
    type: string,
    placeholder: string,
    name: string,
    id: string,
    value?: string | number
}

export default function Input(props: InputProps) {

    return (
        <>
            <label htmlFor={props.name} className="label">
                {props.label}
                <input
                    placeholder={props.placeholder}
                    className="input"
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    name={props.name}
                    required
                />
            </label>
        </>
    )
}