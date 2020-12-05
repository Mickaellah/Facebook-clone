// import React, {useState, useContext} from 'react';
// import {Context} from '../Context';
// import PostComments from '../components/PostComments';
// import PostLike from '../components/PostLike';

// export default function FeedItem() {
//     const {state, dispatch, addNewComment, handleNewComments} = useContext(Context);
//     const {posts, newComment, loading, users} = state;
//     const [like, setLike] = useState(0);

//     function updateLike() {
//         setLike(like === 0 ? like + 1 : like - 1);
//     }

//     return (
//         <div>
//             {loading && <p>Loading...</p>}
//             {
//                 posts.map((post) => {
//                     return (
//                         <article key={post.id} className="post">
//                             <div className="heading">
//                                 {users.map((user) => 
//                                     <div key={user.userId} className="user">
//                                         <img className="profile_image" id={user.userId} src={user.userProfilePhoto} alt="Profile" />
//                                         <h3 className="header">{user.userName}</h3>
//                                     </div>
//                                 )}
//                                 <p>{post.date}</p>
//                             </div>
//                             <div>
//                                 <p>{post.legend}</p>
//                                 <img src={`${post.image}`} alt="Post" />
//                                 <div className="likes">
//                                     {/* <button type="button" onClick={(e) => updateLike(e)} id={post.id} className="likebtn">Likes</button>
//                                     {
//                                         post.likes.map(love => {
//                                             return ( 
//                                                 <span key={love.likedId} className="likes_number">{like}</span>
//                                             )
//                                         })
//                                         } */}
//                                         {/* <PostLike /> */}
//                                 </div>
//                                 <div className="comments_container">
//                                     <PostComments />
//                                 </div>
//                                 <form onSubmit={(e) => addNewComment(e, post.id)}>
//                                     <input type="text" value={newComment} onChange={handleNewComments} name="comment" className="add_comment" placeholder="Add a comment..." required />
//                                     <input type="submit" className="submit_comment" placeholder="Post" />
//                                 </form>
//                             </div>
//                         </article>
//                     )
//                 })
//             }
//         </div>
//     )
// }
