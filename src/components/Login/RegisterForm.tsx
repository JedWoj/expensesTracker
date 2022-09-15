import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import classes from './RegisterForm.module.scss';

export type Popup = {
    popupHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm = ({ popupHandler }: Popup) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeat: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(2, "First name must be longer than 2 characters").max(15, "First name must be shorter than 15 characters").required("First name is required"),
            lastName: Yup.string().min(2, "Last name must be longer than 2 characters").max(20, "Last name must be shorter than 20 characters").required("Last name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().required("Please Enter your password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
            repeat: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Repeat password")
        }),
        onSubmit: () => {
            popupHandler(true);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className={classes.register}>
            <label htmlFor="firstName">
                First name
            </label>
            <input
                value={formik.values.firstName} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                className={classes.register__input} 
                type='text' id="firstName" 
            />
            {formik.touched.firstName && formik.errors.firstName ? <p className={classes.register__error}>{formik.errors.firstName}</p> : null}
            <label htmlFor="lastName">
                Last name
            </label>
            <input 
                value={formik.values.lastName} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                className={classes.register__input}
                type='text' id="lastName" 
            />
            {formik.touched.lastName && formik.errors.lastName ? <p className={classes.register__error}>{formik.errors.lastName}</p> : null}
            <label htmlFor="email">
                Your email
            </label>
            <input 
                value={formik.values.email} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                className={classes.register__input}
                type='email' id="email" 
            />
            {formik.touched.email && formik.errors.email ? <p className={classes.register__error}>{formik.errors.email}</p> : null}
            <label htmlFor="password">
                Your password
            </label>
            <input 
                value={formik.values.password} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                className={classes.register__input} 
                type='password' id="password" 
            />
            {formik.touched.password && formik.errors.password ? <p className={classes.register__error}>{formik.errors.password}</p> : null}
            <label htmlFor="repeat">
                Repeat password
            </label>
            <input 
                value={formik.values.repeat} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                className={classes.register__input} 
                type='password' id="repeat" 
            />
            {formik.touched.repeat && formik.errors.repeat ? <p className={classes.register__error}>{formik.errors.repeat}</p> : null}
            <div className={classes['register__btn-wrap']}>
                <button type="submit" className={classes.register__btn}>
                    Sign In
                </button>
                <button type="button" className={classes.register__btn}>
                    Cancel
                </button>            
            </div>
        </form>
    )
}

export default RegisterForm;