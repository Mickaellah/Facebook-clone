import React, {useContext} from 'react'

import { Context } from '../Context'; 
import { PostContext } from '../components/Post';

export default function PostComments() {
    const { post } = useContext(PostContext);
    const {state} = useContext(Context);
    const {users} = state;

    return (
        <div>
            {
                post.comments.map(comment => {
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
