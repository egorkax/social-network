import React from 'react';
import s from "./profileInfo.module.css";
import UserAva from './../../../commons/icons/user/UserAva.svg'
import {UserProfileType} from "../../../redux/profile-reduser";

type ProfileInfoPropsType = {
    profile: UserProfileType
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <>
            {props.profile ? <div className={s.blockProfile}>
                    <div className={s.blockPreview}>
                        <img className={s.smallAva}
                             src={props.profile.photos.small === null ? UserAva : props.profile.photos.small}/>
                        <div className={s.name}>{props.profile.fullName ? props.profile.fullName : 'Some Name...'}</div>
                        <div className={s.about}>{props.profile.aboutMe ? props.profile.aboutMe : 'About me...'}</div>
                    </div>
                    <div className={s.blockContent}>
                        <img className={s.avatar} src={props.profile.photos.large ? props.profile.photos.large : ''}/>
                        <div className={s.blockInfo}>
                            <div>UserID:{props.profile.userId ? props.profile.userId : 'Some id...'}</div>
                            <div>lookingForAJob:{props.profile.lookingForAJob ? props.profile.lookingForAJob : 'some info...'}</div>
                            <div>lookingForAJobDescription:{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Some info...'}</div>
                            <div className={s.contacts}>
                                contacts
                                <div>github</div>
                                <div>vk</div>
                                <div>facebook</div>
                                <div>instagram</div>
                                <div>mainLink</div>
                            </div>
                        </div>
                    </div>

                </div>
                : <div className={s.blockProfile}>
                    <div className={s.blockPreview}>
                        <img className={s.smallAva} src={UserAva}/>
                        <div>
                            <div className={s.name}>Some Name...</div>
                            <div className={s.about}>About me...</div>
                        </div>
                    </div>
                    <div className={s.blockContent}>
                        <img className={s.avatar}/>
                        <div className={s.blockInfo}>
                            <div>UserID:Some id...</div>
                            <div>lookingForAJob: Some info...</div>
                            <div>lookingForAJobDescription:Some info...</div>
                            <div className={s.contacts}>
                                contacts
                                <div>github</div>
                                <div>vk</div>
                                <div>facebook</div>
                                <div>instagram</div>
                                <div>mainLink</div>
                            </div>
                        </div>
                    </div>

                </div>
            }

        </>

    );
};


