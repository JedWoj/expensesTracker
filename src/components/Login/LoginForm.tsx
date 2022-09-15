import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import classes from "./LoginForm.module.scss";

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email format").required("Email is required"),
            password: Yup.string().required("Please Enter your password"),
        }),
        onSubmit: async () => {
            try {
                const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCgnTKKFeEU8oKSTUvnywA04EW4ZDxRHk',{
                method: 'POST',
                body: JSON.stringify({
                    email: formik.values.email,
                    password: formik.values.password,
                    returnSecureToken: true,}),
                headers: {
                        'Content-Type': 'application/json',
                    }})
                const data = await response.json();
                console.log(data);
                if(!response.ok) {
                    throw new Error(`Authentication failed:`);
                }
            }catch(err: unknown) {
                console.log(err)
            }    
        }
    });

    return(
        <form onSubmit={formik.handleSubmit} className={classes.login}>
            <label htmlFor="email">
                Email
            </label>
            <input 
                id="email" 
                type="email"
                className={classes.login__input}
                value={formik.values.email} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <p className={classes.login__error}>{formik.errors.email}</p> : null}
            <label htmlFor="password">
                Password
            </label>
            <input 
                id="password" 
                type="password" 
                className={classes.login__input}
                value={formik.values.password} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? <p className={classes.login__error}>{formik.errors.password}</p> : null}
            <button type="submit" className={classes.login__btn}>
                Login
            </button>
            <p className={classes.login__register}>
                If you don`t have account <Link to='/register'>SIGN UP HERE</Link>
            </p>
        </form>)
}

export default LoginForm;