import React, {useContext} from 'react';
import {Context} from '../Context';

import Hary from '../img/hary.jpg';

export default function FeedItem() {
    const context = useContext(Context);
    const {likes} = useContext(Context);
    return (
        <div>
            {
                context.posts.map((post) => {
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
                                    <span className="likes_number">{post.likes}</span>
                                </div>
                                <div className="comments_container">
                                    {post.comment.map((comment) => 
                                            <div>
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
                                    <input type="text" className="add_comment" placeholder="Add a comment..." />
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
