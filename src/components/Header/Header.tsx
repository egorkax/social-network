import React from 'react';
import logo from '../../commons/img/pngwing.com.png'
import s from './header.module.css'
import {SearchIcon} from "../../commons/icons/search";
import {AuthData} from "./AuthData/AuthData";

export const Header = (props: any) => {
    return (
        <header className={s.blockHeader}>
            <img src={logo} className={s.logo} alt={'logo'}/>
            <div className={s.blockInput}>
                <span className={s.icon}><SearchIcon/></span>
                <input type={"text"} placeholder={'Search'} className={s.input}/>
            </div>
            <AuthData profileData={props.profileData}/>
        </header>
    )

};

