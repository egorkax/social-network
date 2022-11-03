import React from 'react';
import s from './message.module.css'


export const Message = (props: any) => {
    return (
        <div className={s.blockMessage}>

            <div className={s.iconName}>
                <div>name</div>
            </div>
            <div className={s.message}>
                <span>{props.message} </span>
            </div>

        </div>
    );
};

