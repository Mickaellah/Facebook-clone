import React, {useContext} from 'react';
import {Context} from '../Context';

export default function FeedItem() {
    const {posts, likes} = useContext(Context);
    const Hary = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRVk4ezrG1w_tYe3iURo8AiI1YhfqQmIW_g&usqp=CAU";
    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <article key={post.id} className="post">
                            <div className="heading">
                                <img className="profile_image" src={Hary} alt="Profile" />
                                <h3 className="header">{post.userName}</h3>
                                <p>{post.date}</p>
                            </div>
                            <div>
                                <p>{post.legend}</p>
                                <img src={`${post.image}`} alt="Post" />
                                <div className="likes">
                                    <button type="button" onClick={likes} id={post.id} className="likebtn">Likes</button>
                                    {
                                        post.likes.map(like => {
                                            return (
                                                <span key={like.likedId} className="likes_number">{post.count}</span>
                                            )
                                        })
                                    }
                                </div>
                                <div className="comments_container">
                                    {post.comments.map((comment) => 
                                        <div key={comment.id}>
                                            <div className="friends">
                                                <img className="profile_picture" src={comment.profile} alt="profile picture" />
                                                <h4>{comment.userName}</h4>
                                                <span className="date">{comment.date}</span>
                                            </div>
                                                <div>
                                                    <p className="comments">
                                                        {comment.comment}
                                                    </p>
                                                </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <input type="text" name="comment" className="add_comment" placeholder="Add a comment..." required />
                                    <input type="submit" className="submit_comment" placeholder="Post" />
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}
