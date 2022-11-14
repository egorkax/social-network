import React from 'react';
import s from './user.module.css';
import userAva from './../../../commons/icons/user/UserAva.svg'
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../../redux/store";
import {followUserTC, unFollowUserTC} from "../../../redux/users-reduser";


export const User = (props: any) => {
    const dispatch = useAppDispatch()

    return (
        <div className={s.blockUserInfo}>
            <NavLink to={`/profile/${props.id}`}>
                <img className={s.ava} src={props.ava ? props.ava : userAva}/>
            </NavLink>
            <div className={s.name}>{props.name}</div>
            <div className={s.status}>{props.status ? props.status : 'Some status...'}</div>
            <div className={s.id}>{props.id}</div>
            {props.followed ? <button disabled={props.isFollowing.some((e: number) => e === props.id)}
                                      onClick={() => dispatch(unFollowUserTC(props.id))}
                                      className={s.button}>UnFollow</button> :
                <button disabled={props.isFollowing.some((e: number) => e === props.id)}
                        onClick={() => dispatch(followUserTC(props.id))}
                        className={s.button}>Follow</button>}


        </div>
    );
};

