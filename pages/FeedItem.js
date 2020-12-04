import React, {useState, useContext} from 'react';
import {Context} from '../Context';

export default function FeedItem() {
    const {state, dispatch, addNewComment, handleNewComments} = useContext(Context);
    const {posts, newComment, loading, users} = state;
    const [like, setLike] = useState(0);

    function updateLike() {
        setLike(like === 0 ? like + 1 : like - 1);
    }

    return (
        <div>
            {loading && <p>Loading...</p>}
            {
                posts.map((post) => {
                    return (
                        <article key={post.id} className="post">
                            <div className="heading">
                                {users.map((user) => 
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
                                    <button type="button" onClick={(e) => updateLike(e)} id={post.id} className="likebtn">Likes</button>
                                    {
                                        post.likes.map(love => {
                                            return ( 
                                                <span key={love.likedId} className="likes_number">{like}</span>
                                            )
                                        })
                                        }
                                </div>
                                <div className="comments_container">
                                    {users.map((user) => 
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
                                    <input type="text" value={newComment} onChange={handleNewComments} name="comment" className="add_comment" placeholder="Add a comment..." required />
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
