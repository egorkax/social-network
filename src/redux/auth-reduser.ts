import {authAPI} from "../api/api";
import {AppThunk} from "./store";

let initialState: initialStateType = {
    profileData: null,
    isAuth: false
};

//reducer
export const authReducer = (state: initialStateType = initialState, action: AuthActionType): initialStateType => {
    switch (action.type) {
        case "SET-PROFILE-DATA": {

            return {...state, profileData: action.profileData, isAuth: action.isAuth}
        }

        default:
            return state
    }
}

//AC
export const setProfileData = (profileData: ProfileDataType | null, isAuth: boolean) => (
    {type: 'SET-PROFILE-DATA', profileData, isAuth} as const)

//thunk
export const authMe = (): AppThunk => (dispatch) => {
    return authAPI.authMe()
        .then((res) => {

            if (res.data.resultCode === 0) {
                dispatch(setProfileData(res.data.data, true))
            }
        })
}

export const logIn = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    const loginData = {email, password, rememberMe}
    authAPI.login(loginData)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(authMe())
            }
        })
}

export const logOut = (): AppThunk => (dispatch) => {
    authAPI.logOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setProfileData(null, false))
            }
        })
}

//type
export type initialStateType = {
    profileData: null | ProfileDataType
    isAuth: boolean
}
export type ProfileDataType = {
    id: number | null
    login: string | null
    email: string | null
}
export type AuthActionType =
    ReturnType<typeof setProfileData>



