import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {AppThunk} from "./store";

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
    updatedStatus: false

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
        case "SET-PROFILE-PHOTO": {

            return state.profile ? {
                    ...state, profile: {
                        ...state.profile, photos: {
                            ...state.profile?.photos,
                            small: action.photo, large: action.photo
                        }
                    }
                }
                : state
        }
        case "SET-UPDATE-PROFILE": {
            return state.profile ? {...state, profile: {...state.profile, ...action.profile}} : state
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
export const setProfilePhoto = (photo: string) => {
    return {type: 'SET-PROFILE-PHOTO', photo} as const
}
export const setUpdateProfile = (profile: UpdateUserProfileType) => {
    return {type: 'SET-UPDATE-PROFILE', profile} as const
}

//thunk
export const getUserProfile = (userId: number): AppThunk => async (dispatch) => {
    let res = await usersAPI.getUserProfile(userId)
    dispatch(setUserProfile(res.data))
}
export const updateProfile = (profile: UpdateUserProfileType): AppThunk => async (dispatch, getState) => {
    const userId = getState().auth.profileData?.id
    let res = await profileAPI.updateProfile(profile)
    if (res.data.resultCode === 0) {
        getUserProfile(userId ? userId : 0)
    }

}

export const getUserStatus = (userId: number): AppThunk => async (dispatch) => {
    let res = await usersAPI.getUserStatus(userId)
    dispatch(setUserStatus(res.data))
}

export const updateStatusTC = (status: string): AppThunk => async (dispatch) => {
    let res = await usersAPI.updateStatus(status)
    if (res.data.resultCode === 0)
        dispatch(setUserStatus(status))
}
export const updatePhotoProfile = (photoFile: any): AppThunk => async (dispatch) => {
    let res = await profileAPI.savePhoto(photoFile)
    if (res.data.resultCode === 0) {
        dispatch(setProfilePhoto(res.data.data))
    }

}

//type
export type ProfilePagesTypes = {
    postData: Array<PostType>
    newPostText: string
    profile: UserProfileType | null
    status: null | string
    updatedStatus: boolean

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
export type UpdateUserProfileType = {
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
}
export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setProfilePhoto>
    | ReturnType<typeof setUpdateProfile>





