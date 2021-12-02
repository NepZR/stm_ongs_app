import React from 'react'
import './styles.css'
import NavBar from '../../NavBar'
import Menu from '../../Menu'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import Input from '../../Input'
import Button from '../../Button'

export default function EditCampaing() {

    /**
     * PEgar o id da url
     * 
     * buscar os dados da campanha do server
     * 
     * inserir os valores retornados nos respectivos campos
     */

    const { id }: any = useParams()
    const { register, handleSubmit } = useForm()

    function editCampaing(data: any) {
        console.log('dados enviados')
    }

    return (
        <>
            <NavBar />
            <Menu />
            <div className="edit-campaing-container">

                <section className="card-edit-campaing-form">
                    <h1 className="title-form"> Editar <br /> Campanha</h1>

                    <section className="type-campaing-container" >
                        <label htmlFor="type-campaing-1">
                            <input className="radio-button" type="radio" name="type-campaing" id="type-campaing-1" />
                            Presencial
                        </label>

                        <label htmlFor="type-campaing-2">
                            <input className="radio-button" type="radio" name="type-campaing" id="type-campaing-2" />
                            Online
                        </label>
                    </section>

                    <form className="form-campaing" action="">
                        <Input id="title-campaing" label="Titulo da Campanha" placeholder="Compra de ração" type="text" name="title-campaing" />
                        <Input id="description" label="Descrição" placeholder="Compra de ração" type="text" name="description" />
                        <div className="date-value-container" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                            <Input id="limit-date" label="Data limite" placeholder="" type="date" name="limit-date" />
                            <Input id="value" label="Valor" placeholder="R$ 0,00" type="number" name="value" />
                        </div>

                        <div className="input-file-container">
                            <label htmlFor="cover">Carregar Arquivo</label>
                            <input className="input-file" id="cover" placeholder="Compra de ração" type="file" name="cover" />
                        </div>


                        <Button>Cadastrar Campanha</Button>

                    </form>
                </section>
            </div>
        </>
    )
}
