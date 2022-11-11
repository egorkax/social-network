import React from 'react';
import s from './profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = (props: any) => {

    return (
        <div>
            <div className={s.blockProfile}>
                <ProfileInfo profile={props.profile} status={props.status}
                             updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        </div>
    );

}