import React from 'react';
import s from "./profileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div className={s.blockAvatar}>
            <img className={s.avatar}/>
            <div className={s.blockInfo}>
                <div>Name</div>
                <div>
                    <div>Date of Birth</div>
                    <div>City</div>
                    <div>Education</div>
                    <div>Web Site</div>
                </div>
            </div>
        </div>

    );
};

