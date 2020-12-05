import React, {useContext} from 'react';
import {Context} from '../Context';

const PostContext = React.createContext();

function Post({ post, children }) {
    const {state} = useContext(Context);
    const {users} = state;
    const currentUserObj = users.find(user => user.userId === post.userId);
    return (
        <PostContext.Provider value={{ post, currentUserObj }}>
            <div>{children}</div>
        </PostContext.Provider>
    )
}

export { Post, PostContext }
