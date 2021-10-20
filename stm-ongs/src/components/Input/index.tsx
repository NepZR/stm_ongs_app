import React from "react";
import './styles.css'

interface InputProps {
    type: string,
    placeholder: string,
    name: string,
}

export default function Input(props: InputProps) {

    return (
        <>
            <input placeholder={props.placeholder} className="input" type={props.type} name={props.name} required />
        </>
    )
}