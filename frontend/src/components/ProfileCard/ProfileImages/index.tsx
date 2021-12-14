import React from "react";
import './styles.css';
import cover from './../../../assets/profile/cover.png';
import profile from './../../../assets/profile/profile.png';


export default function ProfileImages() {
    return (

        <div className="profile-images-container">
            <img className="cover" src={cover} alt="cover" />
            <div className="profile-image-container">
                <img className="profile" src={profile} alt="profile" />
            </div>
        </div>
    )
}