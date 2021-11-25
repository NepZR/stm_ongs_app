import React from "react";
import NavBar from "../../NavBar";
import Menu from "../../Menu";
import './styles.css'

interface Props {
    type: string, 
    title: string, 
    description: string,
    image: string
    
}
export default function VerCampanha({type, title, description,image}: Props) {
    return (
    <>  
        <NavBar/>
        <Menu/>

        <section className="campaing-container">

            <section className="card-campaing">
                <p>{type}</p>
                <img src={image} alt="Image" />
                <p>{title}</p>
                <p>{description}</p>
            </section>

        </section>

    </>
    )
}