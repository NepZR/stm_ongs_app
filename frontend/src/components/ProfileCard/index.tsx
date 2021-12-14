import React, { useEffect, useState } from "react";
import './styles.css';

export default function ProfileCard(props:any) {
    return (

        <div className="profile-card">  
            {props.children}
        </div>
    )
}