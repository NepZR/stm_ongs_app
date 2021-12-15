import React from "react";
import './styles.css';
import coverDefault from './../../../assets/profile/cover.png';
import profileDefault from './../../../assets/profile/profile.png';
const cover2 = 'https://i.ibb.co/wy3Qs4k/git.jpg'

export default function ProfileImages({cover, profile}: any) {
    return (

        <div className="profile-images-container">
            <img className="cover" src={cover || coverDefault} alt="cover" />
            <div className="profile-image-container">
                <img className="profile" src={profile || profileDefault} alt="profile" />
                
            </div>
        </div>
    )
}