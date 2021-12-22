import React, { useState, useContext } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import './styles.css'
import { useForm } from 'react-hook-form';
import { authContext } from './../../AuthContext/AuthContext'
import { Redirect } from "react-router";
import { uploadImage } from "../../services/uploadImages";


interface ISubCampaing {
    title_campaing: string;
    description: string;
    limit_date: string;
    value: string|null;
    cover: any;
    type_campaing: string;
}

interface ICampaingData {
	campaign_name: string,
	description: string,
	campaign_cover: string,
	creation_date: string,
    value: string|null,
	created_by: string,
	campaign_type: string,
}

const form = { ONLINE: 1, PRES: 2 }

export default function NovaCampanha() {

    const { handleSubmit, register, setValue } = useForm();
    const [type, setType] = useState(2);
    const { authenticated, user } = useContext(authContext)
    const [link, setLink] = useState('')

    const submitCampaing = async (data: ISubCampaing) => {
        console.log(data)
        const image = data.cover

        await uploadImage(image).then( response => {
            console.log('link',response)
            setLink(response)
        })

        const newCampaing: ICampaingData = {
            campaign_name: data.title_campaing,
            created_by: user.id,
            description: data.description,
            campaign_cover: link,
            value: data.value,
            campaign_type: data.type_campaing,
            creation_date: data.limit_date
        }
        console.log(newCampaing)
 
    }

    function setOn() {
        setType(form.ONLINE);
    }

    function setPres() {
        setType(form.PRES);
    }

    if (authenticated) {

        return (
            <>
                <NavBar />
                <Menu />
                <div className="new-campaing-container">

                    <section
                        className="card-campaing-form"
                    >
                        <h1
                            className="title-form"
                        > Nova <br />Campanha</h1>

                        <section className="type-campaing-container" >
                            <label htmlFor="type-campaing-1">
                                <input
                                    className="radio-button"
                                    type="radio"
                                    name="type-campaing"
                                    id="type-campaing-1"
                                    defaultChecked
                                    onClick={setPres}
                                />
                                Presencial
                            </label>

                            <label htmlFor="type-campaing-2">
                                <input
                                    className="radio-button"
                                    type="radio"
                                    name="type-campaing"
                                    id="type-campaing-2"
                                    onClick={setOn}
                                />
                                Online
                            </label>
                        </section>

                        <form
                            className="form-campaing"
                            onSubmit={handleSubmit(submitCampaing)}
                        >
                            <input
                                {...register("type_campaing")}
                                type='hidden'
                                name="type_campaing"
                                value={type}
                                {...type === form.ONLINE ? setValue("type_campaing", 1) : setValue("type_campaing", 2)}
                            />

                            <Input
                                rest={{ ...register("title_campaing") }}
                                id="title-campaing"
                                label="Titulo da Campanha"
                                placeholder="Compra de ração"
                                type="text"
                                name="title_campaing"
                            />
                            <Input
                                rest={{ ...register("description") }}
                                id="description"
                                label="Descrição"
                                placeholder="Compra de ração"
                                type="text"
                                name="description"
                            />
                            <div
                                className="date-value-container"
                                style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}
                            >
                                <Input
                                    rest={{ ...register("limit_date") }}
                                    id="limit-date"
                                    label="Data limite"
                                    placeholder=""
                                    type="date"
                                    name="limit_date"
                                />

                                {type === form.ONLINE && <Input rest={{ ...register("value") }} id="value" label="Valor" placeholder="R$ 0,00" type="number" name="value" />}
                                {type === form.PRES && <Input rest={{ ...register("value") }} id="value" label="Local" placeholder="Ex: Av Rui Barbosa" type="text" name="value" />}
                            </div>

                            <div
                                className="input-file-container"
                            >
                                <label htmlFor="cover">Carregar Arquivo</label>
                                <input
                                    {...register("cover")}
                                    className="input-file"
                                    id="cover"
                                    placeholder="Compra de ração"
                                    type="file"
                                    name="cover"
                                />
                            </div>

                            <Button>Cadastrar Campanha</Button>

                        </form>
                    </section>
                </div>
            </>
        )

    } else {
        return (
            <Redirect to="/sign-in" />
        )
    }


}