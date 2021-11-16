import React, { HTMLInputTypeAttribute } from "react";
import './styles.css'

interface ButtonProps {
    typeBtn?: HTMLInputTypeAttribute;
    children: string;
}

export default function Button(props: ButtonProps) {
    return (
        <>
            <button type='submit' className="button"> {props.children} </button>
        </>
    )
}