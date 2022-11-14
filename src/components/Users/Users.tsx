import React, {useEffect} from 'react';
import s from './users.module.css';
import {User} from "./User/User";
import {getUsers, setPageSizeUsers} from "../../redux/users-reduser";
import {Paginator} from "../Paginator/Paginator";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Preloader} from "../Preloader/Preloader";


export const Users = () => {
    const dispatch = useAppDispatch()

    const users = useAppSelector(state => state.usersPage.users);
    const currentPage = useAppSelector(state => state.usersPage.currentPage);
    const pageSize = useAppSelector(state => state.usersPage.pageSize);
    const totalUsersCount = useAppSelector(state => state.usersPage.totalUsersCount);
    const isFetching = useAppSelector(state => state.usersPage.isFetching);
    const isFollowing = useAppSelector(state => state.usersPage.isFollowing);

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
        return () => {
            dispatch(setPageSizeUsers(8))
        }
    }, [])

    const onPageChanged = (value: number) => {
        dispatch(getUsers(value, pageSize))
        debugger
    }
    const onChangedShowUsers = (pageSize: number) => {
        dispatch(getUsers(currentPage, pageSize))
    }


    const usersMap = users.map(e => <User key={e.id} name={e.name} status={e.status} id={e.id}
                                          ava={e.photos.small}
                                          followed={e.followed}
                                          isFollowing={isFollowing}/>)


    return (

        <div className={s.blockUsersPage}>
            <div style={{height: '50px'}}>
                <Paginator totalUsersCount={totalUsersCount}
                           currentPage={currentPage}
                           pageSize={pageSize}
                           onPageChanged={onPageChanged}
                           onChangedShowUsers={onChangedShowUsers}
                />
            </div>
            {isFetching
                ? <div className={s.blockUsers}>{usersMap}</div>
                : <Preloader/>}

        </div>
    );

}