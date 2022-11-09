import React from 'react';
import s from './authData.module.css'

export const AuthData = (props:any) => {
    return (
        <>
            {props.profileData?
                <div className={s.blockAuth}>
                <img className={s.ava} />
                <span>LogOut</span>
            </div>
            : <div className={s.blockAuth}>
                    <span>LogIn</span>
                </div>}
        </>

    );
};

