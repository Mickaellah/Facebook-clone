import React, {useContext} from 'react';
import {Context} from '../Context';
import {PostContext} from '../components/Post';

export default function PostAddComment() {
    const { state, dispatch } = useContext(Context);
    const { post } = useContext(PostContext);
    const { currentUser } = state;
    return (
        <form>
            <input type="text" placeholder="Type your comment here" required />
            <button type="submit">Post</button>
        </form>
    )
}
