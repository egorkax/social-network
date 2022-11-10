import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {addMessageAC, DialogsDataType, MessagesDataType, updateNewMessageTextAC} from "../../redux/dialog-reduser";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../commons/hoc/withAuthRedirect";


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

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


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