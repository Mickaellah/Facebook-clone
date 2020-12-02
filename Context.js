import React, {useState, useEffect} from 'react';
import PostData from './PostData.json';
import UserData from './userData.json';

const Context = React.createContext();

function ContextProvider(props) {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const [like, setLike] = useState(0);
    const [newPosts, setNewPosts] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const [newComments, setNewComments] = useState('');
    const [newName, setNewName] = useState('');
    const [newProfile, setNewProfile] = useState('');

    useEffect(() => {
        setPosts(PostData);
    }, [posts]);

    useEffect(() => {
        setUser(UserData);
    }, [user]);

    function updateLike(id) {
        // const id = e.target.id;
        // const findId = posts.find(post => post.id == id);
        // const favorite = findId.likes;
        console.log(id);
        posts.map(post => {
            if (post.id == id) {
                return {
                    ...post,
                    likes: post.likes + 1
                }
            }
            return post
        })
        console.log(likes);
        setLike([...posts]);

    }

    function addNewComment(e, id) {
        console.log()
        e.preventDefault();
        const {comment} = e.target;

        const newComment = {
            "id": Date.now(),
            "userId": 1606827064330,
            "comment": comment.value,
            "date": new Date(Date.now()).toDateString()
        }

        console.log(newComment);

        posts.map(post => {
            if (post.id == id) {
                return {
                    ...post,
                    comments: post.comments.push(newComment)
                }
            }
            return post;
        })
        setPosts([...posts]);
        e.target.reset();
    }

    function addNewPost(e) {
        e.preventDefault();

        const newPost = {
            "id": Date.now(),
            "userName": "Clopedia Nomenjanahary",
            "date": new Date(Date.now()).toDateString(),
            "legend": newPosts,
            "image": newUrl,
            "likes": [
                {
                    "userId": 1606827064330,
                    "likedId": Date.now(),
                    "like": 0
                }
            ],
            "comments": [
                {
                    "id": Date.now(),
                    "userId": 1606827064330,
                    "comment": "",
                    "date": new Date(Date.now()).toDateString()
                }
            ]
        }

        posts.push(newPost);

        setPosts([...posts]);
        e.target.reset();
    }

    function updateUserName(e, id) {
        e.preventDefault();
        const {userName, imageUrl} = e.target;

        const newUser = {
            "userId": 1606827064330,
            "userName": userName.value,
            "userProfilePhoto": imageUrl.value
        }

        posts.map(post => {
            if (post.userId = id) {
                return {
                    ...post,
                    userName: post.userName.push(newUser)
                }
            }
            return post;
        })

        setPosts([...posts]);

        console.log(newUser);
    }

    function handleChange(e) {
        setNewPosts(e.target.value);
    }

    function handleInput(e) {
        setNewUrl(e.target.value);
    }

    function handleNewComments(e) {
        setNewComments(e.target.value);
    }

    function typeNewName(e) {
        setNewName(e.target.value);
    }

    function typeNewUrlImage(e) {
        setNewProfile(e.target.value);
    }

    return (
        <Context.Provider value={{posts, user, updateLike, newPosts, handleChange, newUrl, handleInput, addNewPost, newComments, addNewComment, handleNewComments, newName, newProfile, typeNewName, typeNewUrlImage, updateUserName}}>
            {props.children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context};
