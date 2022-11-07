import React, {ChangeEvent} from 'react';
import s from './dialogs.module.css';
import {Name} from "./Name/Name";
import {Message} from "./Message/Message";
import {ButtonIcons} from "../../commons/icons/Button";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {
    const nameDialogs = props.dialogsData.map((e: { name: string; id: string; }) => <Name name={e.name}
                                                                                          key={e.id}/>)
    const messages = props.messagesData.map((e: { id: string; message: string; }) => <Message key={e.id}
                                                                                              message={e.message}/>)
    let newMessageText = props.newMessageText

    const onChangeValueInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }
    const onAddPost = () => {
        props.addMessage()
    }
    return (
        <div className={s.blockMessages}>
            <div>
                {nameDialogs}
            </div>
            <span className={s.line}></span>
            <div>
                {messages}

                <div className={s.blockAddPost}>
                    <textarea className={s.inputText} value={newMessageText} onChange={onChangeValueInput}/>
                    <button className={s.button} onClick={onAddPost}>
                        <ButtonIcons/>
                        Post
                    </button>
                </div>
            </div>

        </div>
    );

}