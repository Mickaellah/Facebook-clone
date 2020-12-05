import React, { useContext } from 'react';
import { PostContext } from '../components/Post';

export default function PostHeader() {
    const { post, currentUserObj } = useContext(PostContext);
    // console.log(currentUserObj.userName);
    // console.log(currentUserObj);
    return (
        <div className="header">
            <img 
                className="user_profile" 
                src={currentUserObj.userProfilePhoto} 
                alt="profile photo"
            />
            <h4>{currentUserObj.userName}</h4>
            <span className="post_date">
                {new Date(post.date).toLocaleDateString()}
            </span>
        </div>
    )
}
