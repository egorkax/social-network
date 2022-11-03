import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {ButtonIcons} from "../../../commons/icons/Button";
import s from './myPosts.module.css'

export const MyPosts = (props: any) => {

    let posts = props.posts.postData.map(
        (e: { id: number; message: string; likes: number; }) => <Post id={e.id}
                                                                      message={e.message}
                                                                      likes={e.likes}/>
    )

    let newPostEl = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostEl.current !== null) props.addPost(newPostEl.current.value)
    }
    return (
        <div>
            <div className={s.blockAddPost}>
                <textarea className={s.inputText} ref={newPostEl}/>
                <button className={s.button} onClick={addPost}>
                    <ButtonIcons/>
                    Post
                </button>
            </div>
            {posts}
        </div>
    );
};
