import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {ButtonIcons} from "../../../commons/icons/Button";
import s from './myPosts.module.css'

export const MyPosts = (props: any) => {
    console.log(props)


    let posts = props.posts.postData.map(
        (e: { id: number; message: string; likes: number; }) => <Post id={e.id}
                                                                      message={e.message}
                                                                      likes={e.likes}/>
    )

    let newPostText = props.posts.newPostText
    let newPostEl = useRef<HTMLTextAreaElement>(null)


    const onChangeValueInput = () => {
        let newText
        if (newPostEl.current !== null) newText = newPostEl.current.value
        props.updatePost(newText)
    }
    return (
        <div>
            <div className={s.blockAddPost}>
                <textarea className={s.inputText} ref={newPostEl} value={newPostText} onChange={onChangeValueInput}/>
                <button className={s.button} onClick={props.addPost}>
                    <ButtonIcons/>
                    Post
                </button>
            </div>
            {posts}
        </div>
    );
};
