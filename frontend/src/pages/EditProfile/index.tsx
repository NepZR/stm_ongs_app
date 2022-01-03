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

interface IProfile {
  name: string;
  email: string;
  profile_pic: string;
  profile_cover: string;
  description_text: string;
}

export default function EditProfile() {
  const { id }: any = useParams();
  const { loading, setStateLoading } = useContext(authContext)
  const { handleSubmit, register, setValue, getValues } = useForm();
  const [userProfile, setUserProfile] = useState({} as IProfile);
  const [userProfileImg, setUserProfileImg] = useState(userProfile.profile_pic);
  const [userProfileCover, setUserProfileCover] = useState(userProfile.profile_cover);
  const [userName, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  // const [userProfPic, setProfPic] = useState();
  // const [userCover, setProfCover] = useState();
  const [userDesc, setUserDesc] = useState('');


  const bearerToken = getLocalToken();

  const profileImage = {
    height: '100px',
    width: '100px',
    backgroundImage: `url(${userProfile.profile_pic}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const profileCover = {
    height: '300px',
    width: '100%',
    backgroundImage: `url(${userProfile.profile_cover}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  async function getProfile(id: string) {
    setStateLoading(true)
    await authApi.get(`/users/${id}`, { headers: { Authorization: bearerToken } })
      .then((response) => {
        setUserProfile(response.data);
        console.log("useffect", response.data);
        setName(response.data.name)
        setValue('name', response.data.name)

        setUserEmail(response.data.email)
        setValue('email', response.data.email)

        setUserDesc(response.data.description_text)
        setValue('description_text', response.data.description_text)

        setUserProfileImg(response.data.profile_pic)
        setValue('profile_pic', response.data.profile_pic)

        setUserProfileCover(response.data.profile_cover)
        setValue('profile_cover', response.data.profile_cover)
        setStateLoading(false)
      });
  };

  useEffect(() => {
    getProfile(id);
  }, []);

  interface IProfileData {
    name: string;
    email: string;
    description_text: string;
    profile_pic: FileList;
    profile_cover: FileList;
  }

  const submitProfile = async (profileData: IProfileData) => {


    if (typeof profileData.profile_pic === 'string' && typeof profileData.profile_cover === 'string') {
      // api.put(`/user/${id}`, profileData)
      //   .then((response) => {
      //     console.log(response.data)
      //   })
      console.log(profileData)
    } else if (typeof profileData.profile_pic === 'object' && typeof profileData.profile_cover === 'string') {

      const profile_pic = await uploadImage(profileData.profile_pic)
      // console.log('link profile_pic: ', profile_pic)

      const profile = {
        name: profileData.name,
        email: profileData.email,
        description_text: profileData.description_text,
        profile_pic: profile_pic,
        profile_cover: profileData.profile_cover
      }
      console.log(profile)

      //console.log(profileData.profile_pic)

    } else if (typeof profileData.profile_pic === 'string' && typeof profileData.profile_cover === 'object') {

      const profile_cover = await uploadImage(profileData.profile_cover)
      // console.log('link profile_cover: ', profile_cover)

      const profile = {
        name: profileData.name,
        email: profileData.email,
        description_text: profileData.description_text,
        profile_pic: profileData.profile_pic,
        profile_cover: profile_cover
      }
      console.log(profile)

      //console.log(profileData.profile_cover)


    } else {
      /**Caso onde os dois sao objetos */
      const profile_pic = await uploadImage(profileData.profile_pic)
      // console.log('link profile_pic: ', profile_pic)

      const profile_cover = await uploadImage(profileData.profile_cover)
      // console.log('link profile_cover: ', profile_cover)

      const profile = {
        name: profileData.name,
        email: profileData.email,
        description_text: profileData.description_text,
        profile_pic: profile_pic,
        profile_cover: profile_cover
      }
      console.log(profile)
      // api.put(`/user/${id}`, profile)
      //   .then((response) => {
      //     console.log(response.data)
      //   })
    }
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
                onChange={(e) => setName(e.target.value)}
                className="input-form-edit"
              />
              <label htmlFor="">Descrição</label>
              <textarea
                {...register("description_text")}
                rows={4}
                cols={10}
                name="description_text"
                value={userDesc}
                onChange={(e) => setUserDesc(e.target.value)}
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

              {userProfileImg && typeof userProfileImg === 'string' && <img className="image-profile" src={userProfileImg} />}
              {userProfileImg && typeof userProfileImg === 'object' && <img className="image-profile" src={URL.createObjectURL(userProfileImg[0])} />}

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
              {userProfileCover && typeof userProfileCover === 'string' && <div className="image-cover" style={profileCover}></div>}
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
