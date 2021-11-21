import React, { HTMLAttributes } from "react";
import './styles.css'

 interface ButtonProps {
    typeBtn?: string;
    children: string;
    onclick?: (data:any) => Promise<void>;
}

export default function Button({typeBtn, children, onclick}: ButtonProps) {
    return (
        <>
            <button onClick={onclick} type='button' className="button"> {children} </button>
        </>
    )
}