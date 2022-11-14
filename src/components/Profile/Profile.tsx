import React from 'react';
import s from './profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {updatePhotoProfile} from "../../redux/profile-reduser";

export const Profile = (props: any) => {
    return (
        <div>
            <div className={s.blockProfile}>
                <ProfileInfo profile={props.profile}
                             isOwner={props.isOwner}
                             status={props.status}
                             updateStatus={props.updateStatus}
                             updatePhotoProfile={props.updatePhotoProfile}/>
                <MyPostsContainer/>
            </div>
        </div>
    );

}