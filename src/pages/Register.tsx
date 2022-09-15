import React from "react";
import RegisterForm from "../components/Login/RegisterForm";
import BackgroundGradient from "../components/UI/BackgoundGradient/BackgroundGradient";

const Register = () => {
    const handlePopup = () => {
        console.log('lol')
    }
    
    return(
        <BackgroundGradient>
            <RegisterForm popupHandler={handlePopup} />
        </BackgroundGradient>
    )
}

export default Register;