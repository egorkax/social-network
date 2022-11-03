import React from 'react';
import s from './name.module.css'
import {NavLink} from "react-router-dom";


export const Name = (props: any) => {
    const className = (navData: { isActive: boolean, isPending: boolean }) => (navData.isActive ? `${s.name} ${s.active}` : s.name)
    return (
        <div>
            <NavLink className={className} to={`/dialogs/${props.id}`}>
                <span className={s.dot}></span> {props.name}
            </NavLink>
        </div>
    );
};

