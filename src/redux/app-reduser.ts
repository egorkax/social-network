import {AppThunk} from "./store";
import {authMe} from "./auth-reduser";

let initialState: initialStateType = {
    initialized: false
};

//reducer
export const appReducer = (state: initialStateType = initialState, action: AppActionType): initialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED-SUCCESS": {

            return {...state, initialized: true}
        }

        default:
            return state
    }
}

//AC
export const setInitialized = () => (
    {type: 'SET-INITIALIZED-SUCCESS'})

//thunk
export const initializeApp = (): AppThunk => (dispatch) => {
    let promiseRes = dispatch(authMe())
    debugger
    Promise.all([promiseRes])
        .then(() => {
            debugger
            dispatch(setInitialized())
        })
}

//type
export type initialStateType = {
    initialized: boolean
}
export type AppActionType =
    ReturnType<typeof setInitialized>

