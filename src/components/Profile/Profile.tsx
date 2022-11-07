import React from 'react';
import s from './profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return (
        <div className={s.blockProfile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );

}