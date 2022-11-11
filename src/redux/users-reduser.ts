import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type UserType = {
    "name": string
    "id": number
    "photos": {
        "small": null
        "large": null
    },
    "status": null
    "followed": boolean
}


export type initialStateType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    isFollowing: Array<number>
}

let initialState: initialStateType = {
    users: [],
    pageSize: 8,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
    isFollowing: [],

};

export const usersReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {

        case "SET-USER": {
            return {...state, users: [...action.users]}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.newPage}
        }
        case "SET-FETCHING": {
            return {...state, isFetching: action.value}
        }
        case "FOLLOW-USER": {
            return {...state, users: state.users.map(e => e.id === action.userId ? {...e, followed: true} : e)}
        }
        case "UN-FOLLOW-USER": {
            return {...state, users: state.users.map(e => e.id === action.userId ? {...e, followed: false} : e)}
        }
        case "SET-FOLLOWING-PROGRESS": {

            return {
                ...state,
                isFollowing: action.isFetchingUser ? [...state.isFollowing, action.userId] : [...state.isFollowing.filter(e => e !== action.userId)]
            }
        }
        default:
            return state
    }
}
type ActionsType =
    ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setFollowingProgress>
    | ReturnType<typeof followUser>
    | ReturnType<typeof unFollowUser>


export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USER',
        users
    } as const
}

export const setTotalUsersCount = (value: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount: value
    } as const
}
export const setFetching = (value: boolean) => {
    return {
        type: 'SET-FETCHING',
        value
    } as const
}
export const setFollowingProgress = (isFetchingUser: boolean, userId: number) => {
    return {
        type: 'SET-FOLLOWING-PROGRESS',
        isFetchingUser,
        userId
    } as const
}
export const setCurrentPage = (newPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        newPage
    } as const
}
export const followUser = (userId: number) => {
    return {
        type: 'FOLLOW-USER',
        userId
    } as const
}
export const unFollowUser = (userId: number) => {
    return {
        type: 'UN-FOLLOW-USER',
        userId
    } as const
}

//thunk

export const followUserTC = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setFollowingProgress(true, userId))
        usersAPI.followUser(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followUser(userId))
                    dispatch(setFollowingProgress(false, userId))
                }
            })
    }
}
export const unFollowUserTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowingProgress(true, userId))
        usersAPI.unFollowUser(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unFollowUser(userId))
                    dispatch(setFollowingProgress(false, userId))
                }
            })
    }
}

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setFetching(false))
    usersAPI.getUsers(currentPage, pageSize)
        .then((res) => {
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsers(res.data.items))
            dispatch(setTotalUsersCount(res.data.totalCount))
            dispatch(setFetching(true))
        })
}

