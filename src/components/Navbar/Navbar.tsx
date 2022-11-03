import React from 'react';
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";
import {SettingIcon} from "../../commons/icons/navIcons/Settings";
import {NewsIcon} from "../../commons/icons/navIcons/News";
import {MusicIcon} from "../../commons/icons/navIcons/Music";
import {DialogsIcons} from "../../commons/icons/navIcons/Dialogs";
import {ProfileIcon} from "../../commons/icons/navIcons/Profile";
import {UsersIcon} from "../../commons/icons/navIcons/Users";

export const Navbar = () => {

    const className = (navData: { isActive: boolean, isPending: boolean }) => (navData.isActive ? `${s.item} ${s.active}` : s.item)
    return (

        <nav className={s.blockNav}>
            <NavLink to={'/profile'}
                     className={className}>
                <ProfileIcon className={s.icon}/>
                PROFILE
            </NavLink>
            <NavLink to={'/dialogs'} className={className}>
                <DialogsIcons className={s.icon}/>
                MESSAGES
            </NavLink>
            <NavLink to={'/users'} className={className}>
                <UsersIcon className={s.icon}/>
                USERS
            </NavLink>
            <NavLink to={'/news'} className={className}>
                <NewsIcon className={s.icon}/>
                NEWS
            </NavLink>
            <NavLink to={'/music'} className={className}>
                <MusicIcon className={s.icon}
                />
                MUSIC
            </NavLink>
            <NavLink to={'/setting'} className={className}>
                <SettingIcon className={s.icon}/>
                SETTING
            </NavLink>
        </nav>
    );
};

