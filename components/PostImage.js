import React, {useContext} from 'react';
import {PostContext} from '../components/Post';

export default function PostImage() {
    const { post } = useContext(PostContext);
    return (
        <img 
            src={post.image}
            alt="Image post"
         />
    )
}
