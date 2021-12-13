import React, { useState, useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../auth/authApi";

interface ICampaing {
    id_campaing: number;
    name: "";
    description: "";
    active: number;
    creation_date: "";
    end_date: "";
    created_by: number;
    campaing_type: number;
    value: number;
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
    const [campaing, setCampaing] = useState<ICampaing>({
        id_campaing: 1,
        name: "",
        description: "",
        active: 1,
        creation_date: "",
        end_date: "",
        created_by: 0,
        campaing_type: 1,
        value: 0,
    });

    async function getDataCampaing(id: string) {
        await api.get(`/campaings/${id}`).then((response) => {
            setCampaing(response.data);
            setLoading(false);
        });
    }

    async function update(data: any) {
        await api.put(`/campaings/${id}`, data);
    }

    useEffect(() => {
        getDataCampaing(id);
    }, [id]);

    if (loading === false && campaing.campaing_type === 1) {
        return (
            <>
                <NavBar />
                <Menu />
                {!loading ? console.log(campaing) : console.log("")}
                {campaing.campaing_type}
                <div className="edit-campaing-container">
                    <section className="card-edit-campaing-form">
                        <h1 className="title-form">
                            {" "}
                            Editar <br /> Campanha
                        </h1>

                        <form className="form-campaing" onSubmit={handleSubmit(update)}>
                            <Input
                                value={campaing.name}
                                id="title-campaing"
                                label="Titulo da Campanha"
                                placeholder="Compra de ração"
                                type="text"
                                name="title-campaing"
                            />
                            <Input
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
                                    value="2021-12-26"
                                    id="limit-date"
                                    label="Data limite"
                                    placeholder=""
                                    type="date"
                                    name="limit-date"
                                />
                                <Input
                                    value={campaing.value}
                                    id="value"
                                    label="Valor"
                                    placeholder="R$ 0,00"
                                    type="number"
                                    name="value"
                                />
                            </div>

                            <div className="input-file-container">
                                <label htmlFor="cover">Carregar Arquivo</label>
                                <input
                                    className="input-file"
                                    id="cover"
                                    placeholder="Compra de ração"
                                    type="file"
                                    name="cover"
                                />
                            </div>

                            <Button>Salvar Alterações</Button>
                        </form>
                    </section>
                </div>
            </>
        );
    } else if (loading === false && campaing.campaing_type === 2) {
        return (
            <>
                <NavBar />
                <Menu />
                <div className="edit-campaing-container">
                    {campaing.campaing_type}
                    <section className="card-edit-campaing-form">
                        <h1 className="title-form">
                            {" "}
                            Editar <br /> Campanha
                        </h1>

                        <form className="form-campaing" onSubmit={handleSubmit(update)}>
                            <Input
                                value={campaing.name}
                                id="title-campaing"
                                label="Titulo da Campanha"
                                placeholder="Compra de ração"
                                type="text"
                                name="title-campaing"
                            />
                            <Input
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
                                    value={campaing.end_date}
                                    id="limit-date"
                                    label="Data limite"
                                    placeholder=""
                                    type="date"
                                    name="limit-date"
                                />
                                <Input
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
                                    className="input-file"
                                    id="cover"
                                    placeholder="Compra de ração"
                                    type="file"
                                    name="cover"
                                />
                            </div>

                            <Button>Salvar Alterações</Button>
                        </form>
                    </section>
                </div>
            </>
        );
    } else {
        return <h1>LOading</h1>;
    }
}
