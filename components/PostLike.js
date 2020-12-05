import React, {useContext} from 'react';
import {Context} from '../Context';
import {PostContext} from '../components/Post';

export default function PostLike() {
    const {state, dispatch} = useContext(Context);
    const { post } = useContext(PostContext);
    const {currentUser} = state;

    function likedOrNot() {
        return post.likes.some(like => like.userId === currentUser);
    }

    function updateLike() {
        const newLike = {
            likeId: Date.now(),
            userId: currentUser
        };
        dispatch({ type: "LIKE", newLike, id: post.id});
    }

    function unLikePost() {
        dispatch({type: "UNLIKE", id: post.is});
    }

    return (
        <div className="like">
            {likedOrNot() 
                ? (
                    <button onClick={unLikePost} className="button">Unlike</button>
                )
                : (
                    <button onClick={updateLike} className="button button_like">Like</button>
                )}
            <span className="post_likes">{post.likes.length}</span>
        </div>
    )
}
