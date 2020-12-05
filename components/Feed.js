import React, {useContext} from 'react';
import { Context } from '../Context';
import { Post } from '../components/Post';

import PostLike from '../components/PostLike';
import PostComment from '../components/PostComments';
import PostDescription from '../components/PostDescription';
import PostImage from '../components/PostImage';
import PostHeader from '../components/PostHeader';
import PostAddComment from '../components/PostAddComment';

export default function Feed() {
    const {state, dispatch} = useContext(Context);
    const {posts} = state;
    
    return (
        <div className="post">
            {posts.map((post) => (
                <Post key={post.id} post={post}>
                    <PostHeader />
                    <PostDescription>{post.legend}</PostDescription>
                    <PostImage/>
                    <PostLike />
                    <PostComment />
                    <PostAddComment />
                </Post>
            ))}
        </div>
    )
}
