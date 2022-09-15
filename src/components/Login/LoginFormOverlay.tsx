import React from "react";
import LoginForm from "./RegisterForm";
import classes from './LoginFormOverlay.module.scss';

const LoginFormOverlay = () => {
    const handlePopup = () => {
        console.log('lol')
    }
    
    return(
        <div className={classes['login-form']}>
            <LoginForm popupHandler={handlePopup} />
        </div>
    )
}

export default LoginFormOverlay;