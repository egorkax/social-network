import React, {useEffect} from 'react';
import s from './users.module.css';
import {User} from "./User/User";
import {usersAPI} from "../../api/api";
import {setUsersAC} from "../../redux/users-reduser";
import {useAppDispatch, useAppSelector} from "../../redux/store";

export const Users = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.usersPage.users)


    useEffect(() => {
        usersAPI.getUsers(1, 8)
            .then((res) => {
                dispatch(setUsersAC(res.data.items))
            })

    }, [])
    const usersMap = users.map(e => <User key={e.id} name={e.name} status={e.status} id={e.id} ava={e.photos.small}/>)
    return (
        <div className={s.blockPeople}>
            {usersMap}
        </div>
    );

}