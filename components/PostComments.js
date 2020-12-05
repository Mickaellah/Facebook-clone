import React, {useContext} from 'react'

import {Context} from '../Context'; 

export default function PostComments() {
    const {state} = useContext(Context);
    const {posts} = state;
    console.log(posts);
    console.log(posts.comments);
    return (
        <div>
            {
                posts.comments.map(comment => {
                    const commenter = users.find(user => user.userId === comment.userId);
                    return (
                        <div key={comment.id}>
                            <div>
                                <img src={commenter.userProfilePhoto} alt="commenter profile photo" />
                                <h4>{commenter.userName}</h4>
                                <span>{comment.date}</span>
                            </div>
                            <p>{comment.comment}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
