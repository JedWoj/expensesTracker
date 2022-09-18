import React, {useState} from "react";
import { useAppDispatch } from "../../hooks";
import userSlice from "../../store/userSlice";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { loginAccount } from "../../lib/login-account";
import classes from "./LoginForm.module.scss";

const LoginForm = () => {
    const [error, setError] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
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
                const {email, password} = formik.values;
                const data = await loginAccount(email,password);
                dispatch(userSlice.actions.logIn(data.localId));
                navigate('/overview');
            } catch (error: unknown) {
                setError(true);
            }
        }
    });

    return(
        <>
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
            </form>
            {error && <p className={classes.login__invalid}>Login failed!</p>}
        </>)
}

export default LoginForm;