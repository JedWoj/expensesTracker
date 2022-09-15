import React from "react";
import { Link } from "react-router-dom";
import classes from "./LoginForm.module.scss";

const LoginForm = () => {
    return(
        <form className={classes.login}>
            <label>
                Email
            </label>
            <input className={classes.login__input}/>
            <label>
                Password
            </label>
            <input type="password" className={classes.login__input}/>
            <button type="submit" className={classes.login__btn}>
                Login
            </button>
            <p className={classes.login__register}>
                If you don`t have account <Link to='/register'>SIGN UP HERE</Link>
            </p>
        </form>)
}

export default LoginForm;