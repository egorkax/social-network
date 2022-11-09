import React from 'react';
import s from './users.module.css';
import {User} from "./User/User";
import {UserType} from "../../redux/users-reduser";
import {Paginator} from "../Paginator/Paginator";

type UsersType = {
    users: UserType[]
    totalUsersCount: number
    currentPage: number
    pageSize: number
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    onPageChanged: (newPage: number) => void
}

export const Users = (props: UsersType) => {


    const usersMap = props.users.map(e => <User key={e.id} name={e.name} status={e.status} id={e.id}
                                                ava={e.photos.small}
                                                followed={e.followed} follow={props.followUser}
                                                unFollow={props.unFollowUser}/>)


    return (

        <div className={s.blockUsersPage}>
            <div style={{height: '50px'}}>
                <Paginator totalUsersCount={props.totalUsersCount}
                           currentPage={props.currentPage}
                           pageSize={props.pageSize}
                           onPageChanged={props.onPageChanged}
                />
            </div>
            <div className={s.blockUsers}>{usersMap}</div>
        </div>
    );

}