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

    useEffect(() => {
        setPosts(PostData);
    }, [posts]);

    useEffect(() => {
        setUser(UserData);
    }, [user]);

    function likes(e) {
        const id = e.target.id;
        const findId = posts.find(post => post.id == id);
        const favorite = findId.likes;

        console.log(favorite);
        setLike(favorite);
    }

    function addNewComment(e, id) {
        e.preventDefault();
        const {comment} = e.target;

        const newComment = {
            id: Date.now(),
            profile: "",
            userName: "",
            comment: comment.value,
            date: ""
        }

        posts.map(post => {
            if (post.id === id) {
                post.comment.push(newComment);
                setPosts([...post]);
            }
        })
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
                    "userId": Date.now(),
                    "likedId": Date.now(),
                    "like": 0
                }
            ],
            "comments": [
                {
                    "id": Date.now(),
                    "userId": Date.now(),
                    "comment": "",
                    "date": new Date(Date.now()).toDateString()
                }
            ]
        }

        posts.push(newPost);

        setPosts([...posts]);
        e.target.reset();
    }

    function handleChange(e) {
        setNewPosts(e.target.value);
    }

    function handleInput(e) {
        setNewUrl(e.target.value);
    }

    return (
        <Context.Provider value={{posts, user, likes, newPosts, handleChange, newUrl, handleInput, addNewPost}}>
            {props.children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context};
