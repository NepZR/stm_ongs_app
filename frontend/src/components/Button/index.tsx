import React from "react";
import './styles.css'

interface ButtonProps {
    typeBtn?: string;
    children: string;
}

export default function Button(props: ButtonProps) {
    return (
        <>
            <button className="button"> {props.children} </button>
        </>
    )
}