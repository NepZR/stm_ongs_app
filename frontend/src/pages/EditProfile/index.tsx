import React, { useContext, useEffect, useState } from "react";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import authApi from "../../auth/authApi";
import "./styles.css";

import { authContext } from "../../AuthContext/AuthContext";
import { useParams } from "react-router";
import { CardEditProfile, Container, Title } from "./styles";
import { useForm } from "react-hook-form";
import { getLocalToken } from "../../utils/getLocalToken/getLocalToken";
import { pathToFileURL } from "url";
import Input from './../../components/Input'
import { uploadImage } from "../../services/uploadImages";
import api from "../../auth/api";
import axios from "axios";
import { BASE_URL_API_LOCAL } from "../../utils/requests";

interface IProfile {
  name?: string;
  email?: string;
  profile_pic: string;
  profile_cover: string;
  description?: string;
}

const perfil = 'https://i.ibb.co/Jk3GHd7/git.jpg'
const capa = 'https://i.ibb.co/hy0T2BB/fundo-quiz.jpg'

export default function EditProfile() {
  const { user: {
    id,
    name,
    email,
    reg_number,
    profile_pic,
    profile_cover,
    description
  }
  } = useContext(authContext);

  const { loading, setStateLoading, user, setUser } = useContext(authContext)
  const { handleSubmit, register, setValue, getValues } = useForm();
  const [userProfile, setUserProfile] = useState({} as IProfile);
  const [userName, setName] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [userProfileImg, setUserProfileImg] = useState(userProfile.profile_pic);
  const [userProfileCover, setUserProfileCover] = useState(userProfile.profile_cover);

  const bearerToken = `${getLocalToken()}`;

  async function getProfile() {
    setStateLoading(true)
    await axios.get(`${BASE_URL_API_LOCAL}/user`, { headers: { Authorization: bearerToken } })
      .then((response) => {
        const {
          name,
          description,
          profile_pic,
          profile_cover
        } = response.data;

        setValue("name", name)
        setName(name);

        setValue("description", description)
        setUserDesc(description);

        setValue("profile_pic", profile_pic)
        setUserProfileImg(profile_pic)

        setValue("profile_cover", profile_cover)
        setUserProfileCover(profile_cover)

      });
  };

  useEffect(() => {
    getProfile();

  }, []);

  interface IProfileData {
    name: string;
    description: string;
    profile_pic: FileList;
    profile_cover: FileList;
  }

  const submitProfile = async (profileData: IProfileData) => {


    if (typeof profileData.profile_pic === 'string' && typeof profileData.profile_cover === 'string') {
      console.log(profileData)
      axios.put(`${BASE_URL_API_LOCAL}/user/update`, profileData, { headers: { Authorization: bearerToken } })
        .then((response) => {
          console.log(response.data)
        })

    } else if (typeof profileData.profile_pic === 'object' && typeof profileData.profile_cover === 'string') {

      const profile_pic = await uploadImage(profileData.profile_pic)
      // console.log('link profile_pic: ', profile_pic)

      const profile = {
        name: profileData.name,
        description: profileData.description,
        profile_pic: profile_pic,
        profile_cover: profileData.profile_cover
      }
      console.log(profile)

      await axios.put(`${BASE_URL_API_LOCAL}/user/update`, profile, { headers: { Authorization: bearerToken } })
        .then((response) => {
          console.log(response.data)
        })
      setUser({
        id: user.id,
        name: profile.name,
        email: user.email,
        reg_number: user.reg_number,
        profile_pic: profile_pic,
        profile_cover: user.profile_cover,
        description: profile.description,
        user_type: user.user_type,
      })
      console.log('estado user atualizado', user)


      //console.log(profileData.profile_pic)

    } else if (typeof profileData.profile_pic === 'string' && typeof profileData.profile_cover === 'object') {

      const profile_cover = await uploadImage(profileData.profile_cover)
      // console.log('link profile_cover: ', profile_cover)

      const profile = {
        name: profileData.name,
        description: profileData.description,
        profile_pic: profileData.profile_pic,
        profile_cover: profile_cover
      }
      console.log(profile)

      axios.put(`${BASE_URL_API_LOCAL}/user/update`, profile, { headers: { Authorization: bearerToken } })
        .then((response) => {
          console.log(response.data)
        })

      setUser({
        id: user.id,
        name: profile.name,
        email: user.email,
        reg_number: user.reg_number,
        profile_pic: user.profile_pic,
        profile_cover: profile_cover,
        description: profile.description,
        user_type: user.user_type,
      })
      console.log('estado user atualizado', user)

      //console.log(profileData.profile_cover)


    } else {
      /**Caso onde os dois sao objetos */
      const profile_pic = await uploadImage(profileData.profile_pic)
      // console.log('link profile_pic: ', profile_pic)

      const profile_cover = await uploadImage(profileData.profile_cover)
      // console.log('link profile_cover: ', profile_cover)

      const profile = {
        name: profileData.name,
        description: profileData.description,
        profile_pic: profile_pic,
        profile_cover: profile_cover
      }
      console.log(profile)
      axios.put(`${BASE_URL_API_LOCAL}/user/update`, profile, { headers: { Authorization: bearerToken } })
        .then((response) => {
          console.log(response.data)
        })

      setUser({
        id: user.id,
        name: profile.name,
        email: user.email,
        reg_number: user.reg_number,
        profile_pic: profile_pic,
        profile_cover: profile_cover,
        description: profile.description,
        user_type: user.user_type,
      })
      console.log('estado user atualizado', user)
    }
  };

  const profileImage = {
    height: '100px',
    width: '100px',
    backgroundImage: `url(${userProfileImg}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const profileCover = {
    height: '300px',
    width: '100%',
    backgroundImage: `url(${userProfileCover}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  if (userProfile) {
    return (
      <>
        <NavBar />
        <Menu />

        <Container>
          <CardEditProfile>
            <Title> Editar Perfil</Title>
            <form
              className="form-edit-profile"
              onSubmit={handleSubmit(submitProfile)}
            >
              <label htmlFor="">Nome</label>
              <input
                {...register("name")}
                type="text"
                name="name"
                value={userName}
                onChange={(e) => { setName(e.target.value); setValue("name", e.target.value) }}
                className="input-form-edit"
              />
              <label htmlFor="">Descrição</label>
              <textarea
                {...register("description")}
                rows={4}
                cols={10}
                name="description"
                value={userDesc}
                onChange={(e) => { setUserDesc(e.target.value); setValue("description", e.target.value) }}
                className="input-form-edit-textarea"
              />
              <label
                className="label-edit-profile"
                htmlFor="profile_pic">Foto de perfil</label>
              <input
                {...register("profile_pic")}
                type="file"
                name="profile_pic"
                id="profile_pic"
                hidden
                onChange={(e: any) => { setUserProfileImg(e.target.files); setValue('profile_pic', e.target.files) }}
              />

              {userProfileImg && typeof userProfileImg === 'string' && <div className="image-profile" style={profileImage}></div>}
              {userProfileImg && typeof userProfileImg === 'object' && <img alt="profile" className="image-profile" src={URL.createObjectURL(userProfileImg[0])} />}


              <label
                className="label-edit-profile"
                htmlFor="profile_cover">Foto de capa</label>
              <input
                {...register("profile_cover")}
                type="file"
                name="profile_cover"
                id="profile_cover"
                onChange={(e: any) => { setUserProfileCover(e.target.files); setValue('profile_cover', e.target.files) }}
                hidden
              />
              {userProfileCover && typeof userProfileCover === 'string' && <img alt="profile" className="image-cover" style={profileCover}></img>}
              {userProfileCover && typeof userProfileCover === 'object' && <img className="image-cover" src={URL.createObjectURL(userProfileCover[0])} />}


              <Button type="submit">Salvar alterações</Button>
            </form>
          </CardEditProfile>
        </Container>
      </>
    );
  } else {
    return <Loading />
  }
}
