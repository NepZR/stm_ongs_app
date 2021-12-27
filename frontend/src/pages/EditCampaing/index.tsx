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

interface ICampaing {
    id_campaing: number;
    name: string;
    description: string;
    active: number;
    image_cover: string;
    creation_date: string;
    end_date: string;
    created_by: number;
    campaing_type: number;
    value: number;
    cover?: string;
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
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(true);
    const [campaing, setCampaing] = useState({} as ICampaing);
    const [imgCover, setImgCover] = useState('')
    //const [imgCover, setImgCover] = useState('https://i.ibb.co/hy0T2BB/fundo-quiz.jpg')


    async function getDataCampaing(id: string) {
        setLoading(true);
        await api.get(`/campaings/${id}`).then((response) => {
            setCampaing(response.data);
            setImgCover(response.data.image_cover);
            console.log(response.data)
            setLoading(false);
        });
    }

    async function update(data: any) {
        //await api.put(`/campaings/${id}`, data);
        console.log(data)
    }

    useEffect(() => {
        getDataCampaing(id);
    }, []);

    if (campaing && campaing.campaing_type === 1) {
        return (
            <>
                <NavBar />
                <Menu />
                {!loading ? console.log(campaing) : console.log("")}
                <div className="edit-campaing-container">
                    <section className="card-edit-campaing-form">
                        <h1 className="title-form">
                            {" "}
                            Editar <br /> Campanha
                        </h1>

                        <form className="form-campaing" onSubmit={handleSubmit(update)}>
                            <Input
                                {...register("title-campaing")}
                                value={campaing.name}
                                id="title-campaing"
                                label="Titulo da Campanha"
                                placeholder="Compra de ração"
                                type="text"
                                name="title-campaing"
                            />
                            <Input
                                {...register("description")}
                                value={campaing.description}
                                id="description"
                                label="Descrição"
                                placeholder="Compra de ração"
                                type="text"
                                name="description"
                            />
                            <div
                                className="date-value-container"
                                style={{
                                    flexDirection: "row",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Input
                                    {...register("limit-date")}
                                    value="2021-12-26"
                                    id="limit-date"
                                    label="Data limite"
                                    placeholder=""
                                    type="date"
                                    name="limit-date"
                                />
                                <Input
                                    {...register("value")}
                                    value={campaing.value}
                                    id="value"
                                    label="Valor"
                                    placeholder="R$ 0,00"
                                    type="number"
                                    name="value"
                                />
                            </div>

                            <div>
                                <label className="label-input-file" htmlFor="cover">Carregar Arquivo</label>
                            </div>
                            {imgCover && typeof imgCover === 'string' && <img className="image-preview" src={imgCover} alt="cover" />}

                            {imgCover && typeof imgCover === 'object' && <img className="image-preview" src={URL.createObjectURL(imgCover)} alt="cover" />}

                            <input
                                {...register("cover")}
                                className="input-file"
                                id="cover"
                                placeholder="Compra de ração"
                                type="file"
                                name="cover"
                                onChange={(e: any) => setImgCover(e.target.files[0])}
                            />


                            <Button type='submit'>Salvar Alterações</Button>
                        </form>
                    </section>
                </div>
            </>
        );
    } else if (campaing && campaing.campaing_type === 2) {
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
                            <Input
                                {...register("title-campaing")}
                                value={campaing.name}
                                id="title-campaing"
                                label="Titulo da Campanha"
                                placeholder="Compra de ração"
                                type="text"
                                name="title-campaing"
                            />
                            <Input
                                {...register("description")}
                                value={campaing.description}
                                id="description"
                                label="Descrição"
                                placeholder="Compra de ração"
                                type="text"
                                name="description"
                            />
                            <div
                                className="date-value-container"
                                style={{
                                    flexDirection: "row",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Input
                                    {...register("limit-date")}
                                    value={campaing.end_date}
                                    id="limit-date"
                                    label="Data limite"
                                    placeholder=""
                                    type="date"
                                    name="limit-date"
                                />
                                <Input
                                    {...register("value")}
                                    value={campaing.value}
                                    id="value"
                                    label="Local"
                                    placeholder="Local"
                                    type="text"
                                    name="value"
                                />
                            </div>

                            <div className="input-file-container">
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
