import React, {useContext} from 'react';
import {Context} from '../Context';

export default function Feed() {
    const context = useContext(Context);
    return (
        <div>
            {context.posts.map((post) => {
                return (
                    <article key={post.id} className="post">
                        <div>
                            <h3>{post.userName}</h3>
                            <p>{post.date}</p>
                        </div>
                        <div>
                            <p>{post.legend}</p>
                            <img src={`${post.image}`} alt="Post" />
                            <div className="likes">
                                <button type="button" className="likebtn">Likes</button>
                                <span className="likes_number">{post.likes}</span>
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        <div>
                                            <h4>{post.userName1}</h4>
                                            <span></span>
                                        </div>
                                        <div>
                                            <p>{post.comment1}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h4>{post.userName2}</h4>
                                            <span></span>
                                        </div>
                                        <div>
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
