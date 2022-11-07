import {v1} from "uuid";

let initialState: ProfilePagesTypes = {
    profile: null,
    newPostText: '',
    postData: [
        {id: v1(), message: 'Hi world', likes: 11},
        {id: v1(), message: 'What you lern?', likes: 22},
        {id: v1(), message: 'YO?', likes: 33},
        {id: v1(), message: '12345?', likes: 44}
    ]
};


//reducer
export const profileReducer = (state: ProfilePagesTypes = initialState, action: ActionsType): ProfilePagesTypes => {
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

        default:
            return state
    }
}


//AC
export const addPostAC = () => (
    {type: 'ADD-POST'} as const)

export const updateNewPostTextAC = (newText: string) => (
    {type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)


//type
export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>


export type ProfilePagesTypes = {
    postData: Array<PostType>
    newPostText: string
    profile: null | UserProfileType

}
export type PostType = {
    id: string
    message: string
    likes: number
}
export type UserProfileType = {
    "aboutMe": string
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
        "small": undefined | string
        "large": undefined | string
    }
}

