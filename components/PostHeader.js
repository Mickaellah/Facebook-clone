import React, { useContext } from 'react';
import { PostContext } from '../components/Post';

export default function PostHeader() {
    const { post, currentUserObj } = useContext(PostContext);
    return (
        <div>
            <img src={currentUserObj.userProfilePhoto} alt="profile photo" />
            <span>{currentUserObj.userName}</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
    )
}
