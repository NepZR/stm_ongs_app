import React from "react";
import Button from "../../Button";
import Input from "../../Input";
import Menu from "../../Menu";
import NavBar from "../../NavBar";
import './styles.css'

export default function NovaCampanha() {

    return (
        <>
            <NavBar/>
            <Menu/>
            <div className="new-campaing-container">

                <section className="card-campaing-form">
                    <h1 className="title-form"> Nova <br/>Campanha</h1>

                    <section>
                        <label htmlFor="">
                            <input type="radio" name="type-campaing" id="type-campaing-1" />
                            Presencial
                        </label>

                        <label htmlFor="">
                            <input type="radio" name="type-campaing" id="type-campaing-1" />
                            Online
                        </label>
                    </section>

                    <form className="form-campaing" action="">
                        <Input id="title-campaing" label="Titulo da Campanha" placeholder="Compra de ração" type="text"name="title-campaing"/>
                        <Input id="description" label="Descrição" placeholder="Compra de ração" type="text"name="description"/>
                        <div style={{msFlexDirection: 'row', display:'flex', justifyContent:'space-between'}}>
                            <Input id="limit-date" label="Data limite" placeholder="" type="date"name="limit-date"/>
                            <Input id="value" label="Valor" placeholder="R$ 0,00" type="number"name="value"/>
                        </div>
                        <input className="input-file" id="cover" placeholder="Compra de ração" type="file"name="cover"/>
                        <Button>Cadastrar Campanha</Button>
                        
                    </form>
                </section>
            </div>
        </>
    )
    
}