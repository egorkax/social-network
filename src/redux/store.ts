import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {profileReducer} from "./profile-reduser";
import {dialogReducer} from "./dialog-reduser";
import {usersReducer} from "./users-reduser";
import {authReducer} from "./auth-reduser";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth:authReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));


//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AllActionsType = any
export type DispatchType = ThunkDispatch<AppRootStateType, unknown, AllActionsType>
//hooks
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionsType>
//hooks
export const useAppDispatch = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


// @ts-ignore
window.store = store;

