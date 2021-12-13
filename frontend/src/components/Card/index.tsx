import React from "react";
import './styles.css'
export default function Card(props: any){
    return (
        <div className="card">
            {props.children}
        </div>
    )
}