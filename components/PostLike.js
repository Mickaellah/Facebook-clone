import React, {useContext} from 'react';
import {Context} from '../Context';

export default function PostLike() {
    const {state, dispacth} = useContext(Context);
    const {posts, currentUser} = state;

    return (
        <div>
            <button>Unlike</button>
            <button>Like</button>
            <span>{posts.likes}</span>
        </div>
    )
}
