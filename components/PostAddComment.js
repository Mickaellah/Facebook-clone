import React, {useState, useContext} from 'react';

import {Context} from '../Context';
import { PostContext} from '../components/Post';

export default function PostAddComment() {
    const [ newComment, setNewComment ] = useState('');
    const { state, dispatch } = useContext(Context);
    const { post } = useContext(PostContext);
    const { currentUser } = state;

    function addNewComment(e) {
        e.preventDefault();

        const newComment = {
            id: Date.now(),
            userId: currentUser,
            comment: newComment,
            date: Date.now()
        }

        dispatch({type: "ADD_COMMENT", id: post.id, newComment});
        setNewComment('');
    }

    // function handleNewComments(e) {
    //     e.preventDefault();
    //     dispatch({type: "ADD_COMMENT", comments: e.target.value})
    // }

    return (
        <form onSubmit={addNewComment} className="add_comment_form">
            <input 
                type="text" 
                value={newComment} 
                onChange={(e) => setNewComment(e.target.value)} 
                placeholder="Type your comment here" 
                required
             />
            <input className="submit_comment" type="submit" placeholder="Post" />
        </form>
    )
}
