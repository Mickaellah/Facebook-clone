import React, {useContext} from 'react';
import {Context} from '../Context';

export default function PostLike() {
    const {state, dispacth} = useContext(Context);
    const {posts, currentUser} = state;

    return (
        <div className="like">
            <button className="button">Unlike</button>
            <button className="button button_like">Like</button>
            <span>{posts.likes}</span>
        </div>
    )
}
