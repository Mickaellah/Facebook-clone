import React, {useContext} from 'react';
import {Context} from '../Context';
import { PostContext} from '../components/Post';

export default function PostAddComment() {
    const { state, dispatch } = useContext(Context);
    const { post } = useContext(PostContext);
    const { currentUser } = state;
    return (
        <form className="add_comment_form">
            <input type="text" placeholder="Type your comment here" required />
            <input className="submit_comment" type="submit" placeholder="Post" />
        </form>
    )
}
