import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ProfileActionsType, profileReducer} from "./profile-reduser";
import {dialogReducer, DialogsActionType} from "./dialog-reduser";
import {UsersActionType, usersReducer} from "./users-reduser";
import {AuthActionType, authReducer} from "./auth-reduser";
import {AppActionType, appReducer} from "./app-reduser";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));


//types
export type AllActionsType =
    AuthActionType
    | ProfileActionsType
    | DialogsActionType
    | UsersActionType
    | AppActionType
export type AppRootStateType = ReturnType<typeof rootReducer>
export type DispatchType = ThunkDispatch<AppRootStateType, unknown, AllActionsType>
//hooks
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionsType>
//hooks
export const useAppDispatch = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


// @ts-ignore
window.store = store;

