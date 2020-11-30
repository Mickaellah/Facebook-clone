import React, {useContext} from 'react';
import {Context} from '../Context';

export default function Feed() {
    const context = useContext(Context);
    return (
        <div>
            {context.posts.map((post) => {
                return (
                    <article key={post.id}>
                        <div>
                            <p>{post.userName}</p>
                            <p>{post.date}</p>
                        </div>
                        <div>
                            <p>{post.legend}</p>
                            <img src={`${post.image}`} alt="Post" />
                            <div className="likes">
                                <button type="button">Likes</button>
                                <span>{post.likes}</span>
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        <div>
                                            <p>{post.userName1}</p>
                                            <span></span>
                                        </div>
                                        <div>
                                            <p>{post.comment1}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <p>{post.userName2}</p>
                                            <span></span>
                                        </div>
                                        <div>
                                            <p>{post.comment2}</p>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div>
                                <input type="text" placeholder="Add a comment..." />
                                <input type="submit" placeholder="Post" />
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
