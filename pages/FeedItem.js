import React, {useContext} from 'react';
import {Context} from '../Context';

import Hary from '../img/hary.jpg';

export default function FeedItem() {
    const context = useContext(Context);
    const {likes} = useContext(Context);
    return (
        <div>
            {context.posts.map((post) => {
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
                            <nav className="comments_container">
                                <ul>
                                    <li>
                                        <div className="friends">
                                            <img className="first_coment" src={post.profile1} alt="pofile1"/>
                                            <h4>{post.userName1}</h4>
                                            <span className="date">{post.date}</span>
                                        </div>
                                        <div className="comments">
                                            <p>{post.comment1}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="friends">
                                            <img src={post.profile2} className="second_comment" alt="pofile1"/>
                                            <h4>{post.userName2}</h4>
                                            <span className="date">{post.date}</span>
                                        </div>
                                        <div className="comments">
                                            <p>{post.comment2}</p>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div>
                                <input type="text" className="add_comment" placeholder="Add a comment..." />
                                <input type="submit" className="submit_comment" placeholder="Post" />
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
