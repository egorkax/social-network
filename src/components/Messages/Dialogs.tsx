import React from 'react';
import s from './dialogs.module.css';
import {Name} from "./Name/Name";
import {Message} from "./Message/Message";


export const Dialogs = (props: any) => {
    const nameDialogs = props.dialogs.dialogsData.map((e: { name: string; id: number; }) => <Name name={e.name}
                                                                                                  id={e.id}/>)
    const messages = props.dialogs.messagesData.map((e: { id: number; message: string; }) => <Message id={e.id}
                                                                                                      message={e.message}/>)
    return (
        <div className={s.blockMessages}>
            <div>
                {nameDialogs}
            </div>
            <span className={s.line}></span>
            <div>
                {messages}
            </div>
        </div>
    );

}