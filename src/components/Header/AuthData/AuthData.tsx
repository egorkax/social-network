import React from 'react';
import s from './authData.module.css'
import {NavLink} from "react-router-dom";

export const AuthData = (props: any) => {
    return (
        <>
            {props.profileData ?
                <div className={s.blockAuth}>
                    <img className={s.ava}/>
                    <span>{props.profileData.login}</span>
                    <span>LogOut</span>
                </div>
                : <div className={s.blockAuth}>
                    <NavLink to={'/login'}>LogIn</NavLink>
                </div>}
        </>

    );
};

