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
import defaultCover from '../../assets/profile/cover.png'
import axios from "axios";
import { BASE_URL_API_LOCAL } from "../../utils/requests";
import { getLocalToken } from "../../utils/getLocalToken/getLocalToken";
import Home from "../Home";


interface ISubCampaing {
    title_campaing: string;
    description: string;
    limit_date: string;
    value: string | null;
    cover: any;
    type_campaing: string;
}

interface ICampaingData {
    title: string,
    description: string,
    campaign_cover: string,
    date_limit: string,
    value: string | null,
    created_by: string,
    type_camp: string,
}

const form = { ONLINE: 1, PRES: 2 }

export default function NovaCampanha() {

    const { handleSubmit, register, setValue } = useForm();
    const [type, setType] = useState(2);
    const { authenticated, user } = useContext(authContext)
    const [link, setLink] = useState('');
    const [imgCover, setImgCover] = useState(defaultCover);

    const [created, setCreated] = useState(false)

    const bearerToken = `${getLocalToken()}`;

    const submitCampaing = async (data: ISubCampaing) => {
        console.log('formulario', data)
        const image = data.cover

        const cover = await uploadImage(data.cover)
        console.log('link cover', cover)

        const newCampaing: ICampaingData = {
            title: data.title_campaing,
            description: data.description,
            value: data.value,
            campaign_cover: cover,
            date_limit: data.limit_date,
            created_by: user.id,
            type_camp: data.type_campaing,
        }
        console.log(newCampaing)

        const campaing = await axios.post(`${BASE_URL_API_LOCAL}/campaign`, newCampaing, { headers: { Authorization: bearerToken } })
        console.log('campanha criada', campaing.data)
        setCreated(true)

    }

    function setOn() {
        setType(form.ONLINE);
    }

    function setPres() {
        setType(form.PRES);
    }

    if (authenticated && created) {
        return (
            <Redirect to='/home' />
        )
    } else if (authenticated) {

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
                            <label htmlFor="">Título</label>
                            <input
                                {...register("title_campaing")}
                                className="input-text"
                                placeholder="Compra de ração"
                                type="text"
                                name="title_campaing"
                                id="title_campaing"
                                onChange={(e) => { setValue("title_campaing", e.target.value) }}
                            />
                            <label htmlFor="">Descrição</label>
                            <textarea
                                placeholder="Insira uma descrição"
                                className="input-text"
                                {...register("description")}
                                name="description"
                                id="description"
                                cols={30}
                                rows={3}
                                onChange={(e) => { setValue("description", e.target.value) }}
                            >

                            </textarea>

                            <div
                                className="date-value-container"
                                style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}
                            >
                                <label htmlFor="">Data limite</label>
                                <input
                                    {...register("limit_date")}
                                    className="input-text"
                                    name="limit_date"
                                    id="limit_date"
                                    type="date"
                                    onChange={(e) => { setValue("limit_date", e.target.value) }}
                                />
                                <label htmlFor="">{type === form.ONLINE && 'Valor'}</label>
                                <label htmlFor="">{type === form.PRES && 'Local'}</label>
                                {type === form.ONLINE &&
                                    <input
                                        {...register("value")}
                                        className="input-text"
                                        placeholder="R$ 0,00"
                                        name="value"
                                        type="number"
                                        id="value"
                                        onChange={(e) => { setValue("value", e.target.value) }}
                                    />}
                                {type === form.PRES &&
                                    <input
                                        {...register("value")}
                                        className="input-text"
                                        placeholder="Ex: Avenida Rui Barbosa"
                                        name="value"
                                        type="text"
                                        id="value"
                                        onChange={(e) => { setValue("value", e.target.value) }}
                                    />}
                            </div>

                            <div>
                                <label className="label-input-cover" htmlFor="cover">Carregar Arquivo</label>
                                <input
                                    {...register("cover")}
                                    placeholder="Compra de ração"
                                    className="input-file"
                                    name="cover"
                                    type="file"
                                    id="cover"
                                    hidden
                                    onChange={(e: any) => { setImgCover(e.target.files); setValue('cover', e.target.files) }}
                                />
                            </div>
                            {imgCover && typeof imgCover === 'object' && <img src={URL.createObjectURL(imgCover[0])} className="image-cover" alt="imagem de capa da campanha" />}
                            {imgCover && typeof imgCover !== 'object' && <img className="image-cover" src={defaultCover} alt="imagem de capa da campanha" />}

                            <Button type='submit'>Cadastrar campanha</Button>

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