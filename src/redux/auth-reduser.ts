import {Dispatch} from "redux";
import {authAPI} from "../api/api";

let initialState: initialStateType = {
    profileData: null,
    isAuth: false
};


//reducer
export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET-PROFILE-DATA": {

            return {...state, profileData: action.profileData, isAuth: true}
        }

        default:
            return state
    }
}


//AC
export const setProfileData = (profileData: ProfileDataType) => (
    {type: 'SET-PROFILE-DATA', profileData} as const)


//type
export type ActionsType =
    ReturnType<typeof setProfileData>

export type ProfileDataType = {
    id: number | null
    login: string | null
    email: string | null
}

export type initialStateType = {
    profileData: ProfileDataType | null
    isAuth: boolean
}

export const authMe = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then((res) => {

            if (res.data.resultCode === 0) {
                dispatch(setProfileData(res.data.data))
            }
        })
}

export const logIn = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    const loginData = {email, password, rememberMe}
    authAPI.login(loginData)
        .then((res) => {
            debugger
        })
}

