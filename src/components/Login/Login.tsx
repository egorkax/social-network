import React from 'react';
import {Navigate, NavLink} from "react-router-dom";
import s from './login.module.css'
import {useFormik} from "formik";

export const Login = (props: any) => {
    if (props.isAuth) return <Navigate to={'/profile'}/>
    return (
        <div className={s.blockLogin}>
            <h1>Sign In</h1>
            <div className={s.blockInfoLogIn}>
                You can enter:
                <div className={s.someInfo}>
                    <div> Email: free@samuraijs.com</div>
                    <div> Password: free</div>
                </div>

            </div>
            <SignInForm logIn={props.logIn}/>
            <div className='add-reg-block'>
            </div>
        </div>
    );
}

export const SignInForm = (props: any) => {
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



