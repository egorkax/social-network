import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reduser";
import {MyPosts} from "./MyPosts";


let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

//type
type mapStateToPropsType = {
    postData: PostType[]
    newPostText: string
}
type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export type MyPostsPropsType=mapDispatchToPropsType & mapStateToPropsType
