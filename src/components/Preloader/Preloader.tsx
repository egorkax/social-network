import React from "react";
import loader from '../../../src/commons/icons/loader.svg'
import style from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={style.wrapper}>
            <img src={loader} alt=''/>
        </div>
    )
}