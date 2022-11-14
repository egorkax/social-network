import React, {ChangeEvent} from 'react';
import s from "./profileInfo.module.css";
import UserAva from './../../../commons/icons/user/UserAva.svg'
import {UserProfileType} from "../../../redux/profile-reduser";
import {Status} from "./Status/StatusFC";
import {NavLink} from "react-router-dom";
import Vk from './../../../commons/icons/contacts/VK.svg'
import Facebook from './../../../commons/icons/contacts/Facebook.svg'
import LinkedIn from './../../../commons/icons/contacts/LinkedIn.svg'
import GitHub from './../../../commons/icons/contacts/GitHub.svg'

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: any
    isOwner: boolean
    updatePhotoProfile: any

}


export const ProfileInfo = (props: ProfileInfoPropsType) => {

    const chosePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e.target.files)
            props.updatePhotoProfile(e.target.files[0])
            console.log(e.target.files[0])
        }

    }
    return (
        <>
            {props.profile ? <div className={s.blockProfile}>
                    <div className={s.blockPreview}>
                        <div>
                            <img className={s.smallAva}
                                 src={props.profile.photos.small === null ? UserAva : props.profile.photos.small}/>
                        </div>
                        <div>
                            <div className={s.name}>{props.profile.fullName ? props.profile.fullName : 'Some Name...'}</div>
                            <div className={s.status}>
                                {props.isOwner ? <Status status={props.status} updateStatus={props.updateStatus}/>
                                    : <span>{props.status || "No status"}</span>}
                            </div>

                        </div>

                    </div>
                    <div className={s.blockContent}>
                        <img className={s.avatar}
                             src={props.profile.photos.large === null ? UserAva : props.profile.photos.large}/>
                        {/*{props.isOwner && <input type={"file"} accept=".png, .jpg, .jpeg" onChange={chosePhoto}/>}*/}

                        <div className={s.blockInfo}>
                            <h3 className={s.title}>Personal Information</h3>
                            <div className={s.titleInfo}>About me:<span
                                className={s.desInfo}>{props.profile.aboutMe ? props.profile.aboutMe : ' No info...'}</span>
                            </div>
                            <div className={s.titleInfo}>UserID:<span
                                className={s.desInfo}>{props.profile.userId ? props.profile.userId : ' No info...'}</span>
                            </div>
                            <div className={s.titleInfo}>Looking for a
                                job:<span
                                    className={s.desInfo}>{props.profile.lookingForAJob ? props.profile.lookingForAJob : ' No info...'}</span>
                            </div>
                            <div className={s.titleInfo}>Job description:<span
                                className={s.desInfo}>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : ' No info...'}</span>
                            </div>
                            <div className={s.contacts}>
                                <div><img src={LinkedIn}/></div>
                                <div><img src={GitHub}/></div>
                                <div><img src={Facebook}/></div>
                                <div><img src={Vk}/></div>
                            </div>
                            {props.isOwner
                                ? <div className={s.editProfile}>
                                    <NavLink className={s.linkEdit} to={'/setting'}>edit profile</NavLink>
                                </div>
                                : ''}

                        </div>
                    </div>

                </div>
                : <div className={s.blockProfile}>
                    <div className={s.blockPreview}>
                        <img className={s.smallAva} src={UserAva}/>
                        <div>
                            <div className={s.name}>Some Name...</div>
                            <div className={s.status}><Status/></div>
                        </div>
                    </div>
                    <div className={s.blockContent}>
                        <img className={s.avatar}/>
                        <div className={s.blockInfo}>
                            <div className={s.about}>About me...</div>
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


