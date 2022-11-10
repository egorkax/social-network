import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {addMessageAC, DialogsDataType, MessagesDataType, updateNewMessageTextAC} from "../../redux/dialog-reduser";
import {Dialogs} from "./Dialogs";


let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        newMessageText: state.dialogPage.newMessageText,
        messagesData: state.dialogPage.messagesData,
        isAuth: state.auth.isAuth

    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText))
        }

    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

//type
type mapStateToPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newMessageText: string
    isAuth: boolean
}
type mapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}
export type DialogsPropsType = mapDispatchToPropsType & mapStateToPropsType