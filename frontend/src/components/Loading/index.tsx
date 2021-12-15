import React from "react";
import "./styles.css";
import Lottie from 'react-lottie';
import LoadingLottie from '../../lotties/loading.json';

export default function Loading() {

    const imgProfile = 'https://avatars.githubusercontent.com/u/46870808?v=4'
  
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
    <>
        {/* <div className="loading-container">
            
            <Lottie 
                options={defaultOptions}
                height={100}
                width={100}
            />
            Carregando...
        </div> */}

            
            <Lottie 
                options={defaultOptions}
                height={100}
                width={100}
            />
            
    </>
  )
}
