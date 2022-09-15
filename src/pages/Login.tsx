import React from "react";
import LoginForm from "../components/Login/LoginFormOverlay";
import BackgroundGradient from "../components/UI/BackgoundGradient/BackgroundGradient";

const Login = () => {
    return(
        <BackgroundGradient>
            <LoginForm />
        </BackgroundGradient>
    )
}

export default Login;