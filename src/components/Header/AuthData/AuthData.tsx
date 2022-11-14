import React from 'react';
import s from './authData.module.css'
import {NavLink} from "react-router-dom";
import LogOut from "../../../commons/icons/logout.svg";

export const AuthData = (props: any) => {
    return (
        <div className={s.blockAuth}>
            {props.profileData
                ? <>
                    <div className={s.logOut} onClick={props.logOut}>LogOut<img src={LogOut}/></div>
                </>
                : <NavLink className={s.login} to={'/login'}>LogIn</NavLink>}
        </div>
    );
};

