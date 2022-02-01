import React, { useState, useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../auth/api";
import Loading from "../../components/Loading";
import defaultImage from './default_image.png'
import { BASE_URL_API_LOCAL } from "../../utils/requests";
import axios from "axios";
import { getLocalToken } from "../../utils/getLocalToken/getLocalToken";
import { uploadImage } from "../../services/uploadImages";


interface ICampaing {
    id?: number;
    title: string;
    description: string;
    campaign_cover: string | object;
    dateLimit: string;
    typeCamp: number
    value?: number | null;
    active?: number;
    campaignTypeId?: number;
}

export default function EditCampaing() {
    /**
     * PEgar o id da url (ok)
     *
     * buscar os dados da campanha do server (ok)
     *
     * inserir os valores retornados nos respectivos campos (ok)
     */

    const { id }: any = useParams();
    const { register, handleSubmit, setValue } = useForm();
    const [loading, setLoading] = useState(true);
    const [campaing, setCampaing] = useState({} as ICampaing);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [values, setValues] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState(0)

    const [imgCover, setImgCover] = useState('')
    //const [imgCover, setImgCover] = useState('https://i.ibb.co/hy0T2BB/fundo-quiz.jpg')


    const token = `${getLocalToken()}`

    async function getDataCampaing(id: string) {
        setLoading(true);
        await axios.get(`${BASE_URL_API_LOCAL}/campaign/${id}`)
            .then((response) => {
                setCampaing(response.data);

                setTitle(response.data.title)
                setValue('title', response.data.title)

                setDescription(response.data.description)
                setValue('description', response.data.description)

                setValues(response.data.value)
                setValue('value', response.data.value)

                setDate(response.data.date_limit)
                setValue('dateLimit', response.data.date_limit)

                setType(response.data.campaignTypeId)
                setValue('typeCamp', response.data.campaignTypeId)

                setImgCover(response.data.campaign_cover);
                setValue('campaign_cover', response.data.campaign_cover)

                //console.log(response.data)
                setLoading(false);

                /**Falta adicionar os valores no register com o setValue quando os dados chegarem do server (ok)
                 * setar todos os valores no estado corespondente (data nao esta indo)
                 * fazer o tratamento da imagem:
                 *       se ela for um objeto -> retornar um objeto URL como antes e fazer upload
                 *       se formuma url só enviar
                 * ajustar o css dos inputs
                 * console dos dados do formulario enviado
                 * salvar alterações no banco de dados
                 */
            });
    }

    async function update(data: any) {
        console.log(data)
        console.log(typeof data.campaign_cover)

        if (typeof data.campaign_cover === 'string') {

            const res = await axios.put(`${BASE_URL_API_LOCAL}/campaign/${id}`, data, { headers: { Authorization: token } });
            console.log('Formulario', res.data)

        } else {
            const cover = await uploadImage(data.campaign_cover)


            const dataCampaign: ICampaing = {
                title: data.title,
                description: data.description,
                campaign_cover: cover,
                dateLimit: data.dateLimit,
                value: data.value,
                typeCamp: data.typecamp
            }
            console.log(dataCampaign)

            const res = await axios.put(`${BASE_URL_API_LOCAL}/campaign/${id}`, dataCampaign, { headers: { Authorization: token } });
            console.log('Formulario', res.data)

        }
    }

    useEffect(() => {
        getDataCampaing(id);
    }, [id]);

    if (campaing && campaing.campaignTypeId === 1) {
        return (
            <>
                <NavBar />
                <Menu />
                {/*{!loading ? console.log(campaing) : console.log("")}*/}
                <div className="edit-campaing-container">
                    <section className="card-edit-campaing-form">
                        <h1 className="title-form">
                            {" "}
                            Editar <br /> Campanha
                        </h1>

                        <form className="form-campaing" onSubmit={handleSubmit(update)}>
                            <input
                                {...register('title')}
                                className="input-text"
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={(e) => {
                                    setValue('title', e.target.value);
                                    setTitle(e.target.value)
                                }}
                                placeholder='Titulo da campanha'
                            />

                            <textarea
                                {...register('description')}
                                className="input-text-area"
                                rows={6}
                                name="description"
                                id="description"
                                value={description}
                                onChange={(e) => {
                                    setValue('description', e.target.value);
                                    setDescription(e.target.value)
                                }}
                                placeholder='Descrição da campanha'
                            />

                            <div
                                className="date-value-container"
                                style={{
                                    flexDirection: "row",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <input
                                    {...register("dateLimit")}
                                    value={date}
                                    className="input-text"
                                    id="dateLimit"
                                    placeholder="Data limite"
                                    type="date"
                                    name="dateLimit"
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                        setValue('dateLimit', e.target.value)
                                    }}
                                />
                                <input
                                    {...register("value")}
                                    className="input-text"
                                    value={values}
                                    id="value"
                                    placeholder="R$ 0,00"
                                    type="number"
                                    name="value"
                                    onChange={(e) => {
                                        setValue('value', e.target.value);
                                        setValues(e.target.value)
                                    }}
                                />
                                <input
                                    {...register('typeCamp')}
                                    type="number"
                                    value={campaing.campaignTypeId}
                                    hidden
                                />

                            </div>

                            <div>
                                <label className="label-input-file" htmlFor="cover">Carregar Arquivo</label>
                            </div>
                            {imgCover && typeof imgCover === 'string' && <img className="image-preview" src={imgCover} alt="cover" />}

                            {imgCover && typeof imgCover === 'object' && <img className="image-preview" src={URL.createObjectURL(imgCover[0])} alt="cover" />}

                            <input
                                {...register("campaign_cover")}
                                className="input-file"
                                id="cover"
                                placeholder="Compra de ração"
                                type="file"
                                name="campaign_cover"
                                onChange={(e: any) => {
                                    setImgCover(e.target.files);
                                    console.log(e.target.file)
                                    setValue('campaign_cover', e.target.files)
                                }}
                            />


                            <Button type='submit'>Salvar Alterações</Button>
                        </form>
                    </section>
                </div>
            </>
        );
    } else if (campaing && campaing.campaignTypeId === 2) {
        return (
            <>
                <NavBar />
                <Menu />
                <div className="edit-campaing-container">

                    <section className="card-edit-campaing-form">
                        <h1 className="title-form">
                            {" "}
                            Editar <br /> Campanha
                        </h1>

                        <form className="form-campaing" onSubmit={handleSubmit(update)}>
                            <input
                                {...register('title')}
                                className="input-text"
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={(e) => {
                                    setValue('title', e.target.value);
                                    setTitle(e.target.value)
                                }}
                                placeholder='Titulo da campanha'
                            />

                            <input
                                {...register('description')}
                                className="input-text"
                                type="text"
                                name="description"
                                id="description"
                                value={description}
                                onChange={(e) => {
                                    setValue('description', e.target.value);
                                    setDescription(e.target.value)
                                }}
                                placeholder='Descrição da campanha'
                            />
                            <div
                                className="date-value-container"
                                style={{
                                    flexDirection: "row",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <input
                                    {...register("dateLimit")}
                                    className="input-text"
                                    value="2021-12-26"
                                    id="dateLimit"
                                    placeholder="Data limite"
                                    type="date"
                                    name="dateLimit"
                                />
                                <input
                                    {...register("value")}
                                    value={values}
                                    id="value"
                                    placeholder="Local"
                                    className="input-text"
                                    type="text"
                                    name="value"
                                    onChange={(e) => {
                                        setValue('value', e.target.value);
                                        setValues(e.target.value)
                                    }}
                                />
                                <input
                                    {...register('typeCamp')}
                                    type="number"
                                    value={campaing.campaignTypeId}
                                    hidden
                                />

                            </div>

                            <div>
                                <label className="label-input-file" htmlFor="cover">Carregar Arquivo</label>
                            </div>
                            {imgCover && typeof imgCover === 'string' && <img className="image-preview" src={imgCover} alt="cover" />}

                            {imgCover && typeof imgCover === 'object' && <img className="image-preview" src={URL.createObjectURL(imgCover)} alt="cover" />}

                            <input
                                {...register("campaign_cover")}
                                className="input-file"
                                id="campaign_cover"
                                placeholder="Compra de ração"
                                type="file"
                                name="campaign_cover"
                                onChange={(e: any) => {
                                    setImgCover(e.target.files);
                                    console.log(e.target.files)
                                    setValue('campaign_cover', e.target.files)
                                }}
                            />


                            <Button type='submit'>Salvar Alterações</Button>
                        </form>
                    </section>
                </div>
            </>
        );
    } else {
        return <Loading />;
    }
}
