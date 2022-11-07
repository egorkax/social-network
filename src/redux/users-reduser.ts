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
}

let initialState: initialStateType = {
    users: [],
    pageSize: 8,
    currentPage: 1,

};

export const usersReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {

        case "SET-USER": {
            return {...state, users: [...action.users]}
        }
        case "FOLLOW-USER": {
            return {...state, users: state.users.map(e => e.id === action.userId ? {...e, followed: true} : e)}
        }
        case "UN-FOLLOW-USER": {
            return {...state, users: state.users.map(e => e.id === action.userId ? {...e, followed: false} : e)}
        }
        default:
            return state
    }
}
type ActionsType =
    ReturnType<typeof setUsersAC>
    | ReturnType<typeof followUserAC>
    | ReturnType<typeof unFollowUserAC>


export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USER',
        users
    } as const
}
export const followUserAC = (userId: number) => {
    return {
        type: 'FOLLOW-USER',
        userId
    } as const
}
export const unFollowUserAC = (userId: number) => {
    return {
        type: 'UN-FOLLOW-USER',
        userId
    } as const
}

