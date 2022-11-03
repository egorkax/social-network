import React from 'react';
import s from './post.module.css'

export const Post = (props: any) => {
    return (
        <div>
            <img className={s.postAva}/>
            <span>{props.message}</span>
            <div>likes: {props.likes}</div>
        </div>
    );
};

