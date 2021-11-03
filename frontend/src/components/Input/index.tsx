import React from "react";
import './styles.css'

interface InputProps {
    label: string,
    type: string,
    placeholder: string,
    name: string
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
                    name={props.name} 
                    required 
                />
            </label>
        </>
    )
}