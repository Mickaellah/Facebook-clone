import React, {useContext} from 'react';
import {Context} from '../Context';

export default function FeedItem() {
    const {state, dispatch, updateLike, user, addNewComment, handleNewComments} = useContext(Context);
    const {posts} = state;
    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <article key={post.id} className="post">
                            <div className="heading">
                                {user.map((user) => 
                                    <div key={user.userId} className="user">
                                        <img className="profile_image" id={user.userId} src={user.userProfilePhoto} alt="Profile" />
                                        <h3 className="header">{user.userName}</h3>
                                    </div>
                                )}
                                <p>{post.date}</p>
                            </div>
                            <div>
                                <p>{post.legend}</p>
                                <img src={`${post.image}`} alt="Post" />
                                <div className="likes">
                                    <button type="button" onClick={(e) => updateLike(e, post.id)} id={post.id} className="likebtn">Likes</button>
                                    {
                                        post.likes.map(like => {
                                            return ( 
                                                <span key={like.likedId} className="likes_number">{like.like}</span>
                                            )
                                        })
                                        }
                                </div>
                                <div className="comments_container">
                                    {user.map((user) => 
                                        <div className="friends" key={user.userId}>
                                            <img className="profile_image" id={user.userId} src={user.userProfilePhoto} alt="profile picture" />
                                            <h4 className="user_name">{user.userName}</h4>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {post.comments.map((comment) => 
                                        <div className="friends"  key={comment.id}>
                                            <p>{comment.comment}</p>
                                            <span className="dateOfComment">{comment.date}</span>
                                        </div>
                                    )}
                                </div>
                                <form onSubmit={(e) => addNewComment(e, post.id)}>
                                    <input type="text" value={state.newComment} onChange={handleNewComments} name="comment" className="add_comment" placeholder="Add a comment..." required />
                                    <input type="submit" className="submit_comment" placeholder="Post" />
                                </form>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}
