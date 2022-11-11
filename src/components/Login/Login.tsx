import React from 'react';
import {NavLink} from "react-router-dom";
import s from './login.module.css'
import {useFormik} from "formik";

export const Login = (props: any) => {
    return (
        <div className={s.blockLogin}>
            <h1>Sign In</h1>
            <SignupForm logIn={props.logIn}/>
            <div className='add-reg-block'>
                <p>Already have an account?</p>
                <NavLink className='underlinedLink' to={'/registration'}>Sign Up</NavLink>
            </div>
        </div>
    );
}

export const SignupForm = (props: any) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: values => {
            console.log(values)
            props.logIn(values.email, values.password, values.rememberMe)
        },
    })
    console.log('formik:', formik)
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    placeholder="email"
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div>
                <input
                    placeholder='password'
                    id='password'
                    name='password'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div>
                <input
                    id='rememberMe'
                    type='checkbox'
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}/> Remember me
            </div>
            <button type='submit'>
                Sign in
            </button>
        </form>

    );
}



