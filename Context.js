import React, {useEffect} from 'react';
import PostData from './PostData.json';
import UserData from './userData.json';

const Context = React.createContext();

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

    function addNewComment(e, id) {
        e.preventDefault();
        const {comment} = e.target;

        const newComment = {
            "id": Date.now(),
            "userId": 1606827064330,
            "comment": comment.value,
            "date": new Date(Date.now()).toDateString()
        }

        dispatch({type: "ADD_COMMENT", comment: newComment, id: id});
        e.target.reset();
    }

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

    function handleNewComments(e) {
        e.preventDefault();
        dispatch({type: "ADD_COMMENT", comments: e.target.value})
    }

    return (
        <Context.Provider value={{state, dispatch, handleNewComments, addNewPost, addNewComment}}>
            {props.children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context};
