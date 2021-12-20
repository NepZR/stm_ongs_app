import React, {useContext} from "react";
import { useParams } from "react-router";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import './styles.css';
import { authContext } from "../../AuthContext/AuthContext";

export default function EditProfile() {
    
    const { id }: any = useParams();
    const { user: {}  } = useContext(authContext)

    return (
        <>
        <NavBar/>
        <Menu/>
        <h1>{id} Edit profile</h1>
        </>
    )
}