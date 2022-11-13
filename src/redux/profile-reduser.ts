import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

let initialState: ProfilePagesTypes = {
    profile: null,
    newPostText: '',
    postData: [
        {id: v1(), message: 'Hi world', likes: 11},
        {id: v1(), message: 'What you lern?', likes: 22},
        {id: v1(), message: 'YO?', likes: 33},
        {id: v1(), message: '12345?', likes: 44}
    ],
    status: '',

};
//reducer
export const profileReducer = (state: ProfilePagesTypes = initialState, action: ProfileActionsType): ProfilePagesTypes => {
    switch (action.type) {
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }

        case "ADD-POST": {
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            return {...state, newPostText: '', postData: [newPost, ...state.postData]}
        }
        case "SET-USER-PROFILE": {

            return {...state, profile: action.profile}
        }
        case "SET-USER-STATUS": {
            return {...state, status: action.status}
        }

        default:
            return state
    }
}

//AC
export const addPostAC = () => (
    {type: 'ADD-POST'} as const)

export const updateNewPostTextAC = (newText: string) => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export const setUserProfile = (profile: UserProfileType) => (
    {type: 'SET-USER-PROFILE', profile} as const)

export const setUserStatus = (status: string) => {
    return {type: 'SET-USER-STATUS', status} as const
}

//thunk
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getUserProfile(userId)
        .then((res) => {
            dispatch(setUserProfile(res.data))
        })
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getUserStatus(userId)
        .then((res) => {
            dispatch(setUserStatus(res.data))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    usersAPI.updateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0)
                dispatch(setUserStatus(status))
        })
}

//type
export type ProfilePagesTypes = {
    postData: Array<PostType>
    newPostText: string
    profile: null | UserProfileType
    status: null | string

}
export type PostType = {
    id: string
    message: string
    likes: number
}
export type UserProfileType = {


    "aboutMe": null | string
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": {
        "small": null | string
        "large": null | string
    }
}
export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>





