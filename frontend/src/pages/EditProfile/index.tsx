import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
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
import qr from '../../assets/profile/lardoamorv2.png';
import defaultQr from '../../assets/profile/qrdefault.png'

interface IProfile {
  name?: string;
  email?: string;
  profile_pic: string;
  profile_cover: string;
  description?: string;
  url_picpay?: string;
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
  const [userQR, setUserQR] = useState(userProfile.url_picpay);
  const [edited, setEdited] = useState(false)

  const bearerToken = `${getLocalToken()}`;



  useEffect(() => {
    async function getProfile() {
      setStateLoading(true)
      await axios.get(`${BASE_URL_API_LOCAL}/user`, { headers: { Authorization: bearerToken } })
        .then((response) => {
          const {
            name,
            description,
            profile_pic,
            profile_cover,
            url_picpay
          } = response.data;

          setValue("name", name)
          setName(name);

          setValue("description", description)
          setUserDesc(description);

          setValue("profile_pic", profile_pic)
          setUserProfileImg(profile_pic)

          setValue("profile_cover", profile_cover)
          setUserProfileCover(profile_cover)

          setValue("url_picpay", url_picpay)
          setUserQR(url_picpay)

        });
    };
    getProfile();

  }, [id]);

  interface IProfileData {
    name: string;
    description: string;
    profile_pic: FileList;
    profile_cover: FileList;
    url_picpay: FileList;
  }

  const submitProfile = async (profileData: IProfileData) => {


    if (typeof profileData.profile_pic === 'string' && typeof profileData.profile_cover === 'string' && typeof profileData.url_picpay === 'string') {
      console.log(profileData)
      axios.put(`${BASE_URL_API_LOCAL}/user/update`, profileData, { headers: { Authorization: bearerToken } })
        .then((response) => {
          console.log(response.data)
        })
      setEdited(true)

    } else if (typeof profileData.profile_pic === 'string' && typeof profileData.profile_cover === 'string' && typeof profileData.url_picpay === 'object') {
      console.log(profileData)

      const url_picpay = await uploadImage(profileData.url_picpay)

      const profile = {
        name: profileData.name,
        description: profileData.description,
        profile_pic: profileData.profile_pic,
        profile_cover: profileData.profile_cover,
        url_picpay: url_picpay
      }

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
        profile_cover: user.profile_cover,
        description: profile.description,
        user_type: user.user_type,
        url_picpay: url_picpay
      })
      console.log('estado user atualizado', user)
      setEdited(true)

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
        url_picpay: user.url_picpay
      })
      console.log('estado user atualizado', user)
      setEdited(true)


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
        url_picpay: user.url_picpay
      })
      console.log('estado user atualizado', user)
      setEdited(true)

      //console.log(profileData.profile_cover)


    } else {
      /**Caso onde os dois sao objetos */
      const profile_pic = await uploadImage(profileData.profile_pic)
      // console.log('link profile_pic: ', profile_pic)

      const profile_cover = await uploadImage(profileData.profile_cover)
      // console.log('link profile_cover: ', profile_cover)

      const url_picpay = await uploadImage(profileData.url_picpay)

      const profile = {
        name: profileData.name,
        description: profileData.description,
        profile_pic: profile_pic,
        profile_cover: profile_cover,
        url_picpay: url_picpay
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
        url_picpay: url_picpay
      })
      console.log('estado user atualizado', user)
      setEdited(true)
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

  if (edited) {
    return (
      <Redirect to='/profile' />
    )
  } else if (userProfile) {
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
              {userProfileCover && typeof userProfileCover === 'object' && <img className="image-cover" alt="imagem do perfil" src={URL.createObjectURL(userProfileCover[0])} />}

              <label
                className="label-edit-profile"
                htmlFor="url_picpay">QR Code Picpay</label>
              <input
                {...register("url_picpay")}
                type="file"
                name="url_picpay"
                id="url_picpay"
                onChange={(e: any) => { setUserQR(e.target.files); setValue('url_picpay', e.target.files) }}
                hidden
              />
              {userQR && typeof userQR === 'string' && <img alt="profile" className="image-cover" src={userQR}></img>}
              {userQR === null && <img alt="profile" className="image-cover" src={defaultQr}></img>}
              {userQR && typeof userQR === 'object' && <img className="image-cover" alt="qrcode" src={URL.createObjectURL(userQR[0])} />}


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
