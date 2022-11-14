import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import {ButtonIcons} from "../../../commons/icons/Button";
import s from './myPosts.module.css'
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsPropsType) => {

    let posts = props.postData.map(
        (e: { id: string; message: string; likes: number; }) => <Post key={e.id}
                                                                      message={e.message}
                                                                      likes={e.likes}/>
    )

    let newPostText = props.newPostText


    const onChangeValueInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    const onAddPost = () => {
        if(props.newPostText)
        props.addPost()
    }
    return (
        <div className={s.blockPosts}>
            <div className={s.blockAddPost}>
                <textarea className={s.inputText} value={newPostText} onChange={onChangeValueInput}/>
                <button className={s.button} onClick={onAddPost}>
                    <ButtonIcons/>
                    Post
                </button>
            </div>
            {posts}
        </div>
    );
};
