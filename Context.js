import React, {useEffect, createContext} from 'react';
import PostData from './PostData.json';
import UserData from './userData.json';

const Context = createContext();

function reducer(state, action) {
    switch (action.type) {
        case "LOAD_DATA": {
            return {
                ...state,
                loading: false,
                posts: PostData,
                users: UserData
            }
        }
        case "POST": {
            return {
                ...state,
               posts: state.posts = action.posts
            }
        }
        case "ADD_COMMENT": {
            const newComments = state.posts.map(post => {
                if (post.id == action.id) {
                    return {
                        ...post,
                        comments: [...post.comments, action.comment]
                    }
                }
                return post;
            })
            
            return {
                ...state,
                posts: newComments
            }
            
        }
        case "CURRENT_USER": {
            const newUser = state.users.map(user => {
                if (user.userId == state.currentUser) {
                    return {
                        ...user,
                        userName: action.userName,
                        userProfilePhoto: action.userProfilePhoto
                    }
                }
                return user;
            });
            return {
                ...state,
                users: newUser
            }
        }
        case "LIKE": {
            const newPosts = state.posts.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        likes: [...post.likes, action.newLike],
                    };
                }
                return post;
            });
            return {
                ...state,
                posts: newPosts,
            };
        }
        case "UNLIKE": {
            const newPosts = state.posts.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        likes: post.likes.filter(like => like.userId !== state.currentUser),
                    };
                }
                return post;
            });
            return {
                ...state,
                posts: newPosts,
            };
        }
    }
    return state
}

function ContextProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, {
        loading: true,
        posts: JSON.parse(localStorage.getItem('posts')) || [],
        comments: [], 
        comment: '',
        users: JSON.parse(localStorage.getItem('users')) || [],
        currentUser: 1,
    });

    let {posts, users} = state;


    useEffect(() => {
        setTimeout(() => {
            '';
            dispatch({type: "LOAD_DATA"});
        }, 1000);
    }, []);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    function addNewPost(e) {
        e.preventDefault();
        const {legend, image} = e.target;

        const newPost = {
            "id": Date.now(),
            "userName": "Clopedia",
            "date": new Date(Date.now()).toDateString(),
            "legend": legend.value,
            "image": image.value,
            "likes": [
                {
                    "userId": 1,
                    "likedId": new Date(),
                    "like": 0
                }
            ],
            "comments": []
        }
        

        posts = [...posts, newPost];
        dispatch({type: "POST", posts: posts});
        e.target.reset();
    }

    return (
        <Context.Provider value={{state, dispatch, addNewPost}}>
            {props.children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context};
