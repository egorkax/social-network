import React from 'react';
import s from './user.module.css';
import userAva from './../../../commons/icons/user/UserAva.svg'


export const User = (props: any) => {

    return (
        <div className={s.blockUserInfo}>
            <img className={s.ava} src={props.ava ? props.ava : userAva}/>
            <div className={s.name}>{props.name}</div>
            <div className={s.status}>{props.status ? props.status : 'Some status...'}</div>
            <div className={s.id}>{props.id}</div>
            <button className={s.button}>Follow</button>

        </div>
    );
};

