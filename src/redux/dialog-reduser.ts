//reducer
import {v1} from "uuid";

let initialState: initialStateType = {
    dialogsData: [
        {id: v1(), name: 'Egor'},
        {id: v1(), name: 'Polina'},
        {id: v1(), name: 'Anton'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Nadya'},
        {id: v1(), name: 'Maksim'},
    ],
    newMessageText: '',
    messagesData: [
        {id: v1(), message: 'Hi.Bla Bla Bla Bla'},
        {id: v1(), message: 'How are you?Bla Bla Bla Bla'},
        {id: v1(), message: 'Why are you?Bla Bla Bla Bla'},
    ]
};
export const dialogReducer = (state: initialStateType = initialState, action: DialogsActionType): initialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {...state, newMessageText: action.newText}
        }
        case "ADD-MESSAGE": {
            const newMessage: MessagesDataType = {
                id: v1(),
                message: state.newMessageText,
            };
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData.filter(e => state.messagesData.indexOf(e) !== 0), newMessage]
            }

        }

        default:
            return state
    }
}

//AC
export const addMessageAC = (): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const updateNewMessageTextAC = (newText: string): UpdateNewPostMessageActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    }
}

//type
export type initialStateType = {
    dialogsData: Array<DialogsDataType>
    newMessageText: string
    messagesData: Array<MessagesDataType>
}
export type MessagesDataType = {
    id: string
    message: string
}
export type DialogsDataType = {
    id: string
    name: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type UpdateNewPostMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}
export type DialogsActionType = AddMessageActionType | UpdateNewPostMessageActionType
