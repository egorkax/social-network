let initialState: initialStateType = {
    profileData: null
};


//reducer
export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET-PROFILE-DATA": {
            debugger
            return {...state, profileData: action.profileData}
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
}


