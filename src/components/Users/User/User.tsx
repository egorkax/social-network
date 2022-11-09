import React from 'react';
import s from './user.module.css';
import userAva from './../../../commons/icons/user/UserAva.svg'
import {NavLink} from "react-router-dom";


export const User = (props: any) => {

    return (
        <div className={s.blockUserInfo}>
            <NavLink to={`/profile/${props.id}`}>
                <img className={s.ava} src={props.ava ? props.ava : userAva}/>
            </NavLink>
            <div className={s.name}>{props.name}</div>
            <div className={s.status}>{props.status ? props.status : 'Some status...'}</div>
            <div className={s.id}>{props.id}</div>
            {props.followed ? <button onClick={() => props.unFollow(props.id)} className={s.button}>UnFollow</button> :
                <button onClick={() => props.follow(props.id)} className={s.button}>Follow</button>}


        </div>
    );
};

