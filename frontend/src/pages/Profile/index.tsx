import React, { useEffect, useState } from "react";
import "./styles.css";
import { useContext } from "react";
import { authContext } from "../../AuthContext/AuthContext";
import authApi from "../../auth/authApi";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import Card from "../../components/Card";
import ProfileCard from "../../components/ProfileCard";
import ProfileImages from "../../components/ProfileCard/ProfileImages";
import styled from "styled-components";
import Campaing from './../../components/Campaign';
import { Redirect } from 'react-router'

interface IProfile {
  uuid: string;
  username: string;
  email: string;
  user_type: number;
}

export default function Profile() {
  const {
    user: { uuid,profile_cover, profile_pic},
  } = useContext(authContext);
  const { authenticated, loading, setStateLoading } = useContext(authContext);
  const [userProfile, setUserProfile] = useState<IProfile | null>();
  const token = localStorage.getItem("stmongs-token");
  const bearerToken = `Bearer ${token}`;

  const Description = styled.p`
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.5px 2rem 2rem 2rem;
    border-color: var(--border-input);
    font-weight: bold;
    color: var(--purple);
  `;

  const Contate = styled.p`
    font-size: 1em;
    font-weight: bold;
    text-align: right;
    margin-right: 2rem;
    color: var(--title-grey);
    margin-bottom: 1rem;
  `;

  const Title = styled.h1`
    font-size: 2em;
    font-weight: 900;
    text-align: right;
    margin-top: 3rem;
    margin-right: 2rem;
    color: var(--purple);
  `;

  const Label = styled.h1`
    font-size: 1.5em;
    text-align: left;
    margin-top: 0.5rem;
    margin-left: 2rem;
    color: var(--purple);
  `;

  const EditProfile = styled.a`
    border-radius: 10px;
    text-align: right;
    margin-right: 2rem;
    text-decoration: none;
    color: var(--purple);
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
  `;

  useEffect(() => {
    setStateLoading(true);
    authApi
      .get(`/users/${uuid}`, { headers: { Authorization: bearerToken } })
      .then((response) => {
        setUserProfile(response.data);
        console.log(response.data);
        setStateLoading(false);
      });
  }, []);

  if(!authenticated){
    return <Redirect to="sign-in"/>
  } else {
    return (
      <>
        <NavBar />
        <Menu />
  
        <div className="profile-container">
          <ProfileCard>
            <ProfileImages 
              cover={profile_cover}
              profile={profile_pic}
            />
  
            <Container>
              <Title>{`${userProfile?.username}`}</Title>
              <Contate>{`${userProfile?.email}`}</Contate>
              <EditProfile href={`/profile-edit/${uuid}`}>
                Editar Perfil
              </EditProfile>
                
            </Container>
            <Label>Sobre</Label>
            <Description>
              Olá, somos a ONG União Animal, somos uma ONG que reune pessoas que
              adotam a causa dos animais e buscam cuidá-los e ajudar a encontrar
              um bom lar para eles. Recentemente resgatamos caezinhos ainda
              filhotes, mas precisamos ter ração suficiente para alimentá-los,
              junto aos demais que já estavam sob nossos cuidados. Agradecemos
              toda ajuda que puder oferecer.
            </Description>
  
            
          </ProfileCard>
        </div>
      </>
    );

  }

  
}
