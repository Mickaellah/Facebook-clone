import React, {useState, useEffect} from 'react';
import PostData from './PostData.json';

const Context = React.createContext();

function ContextProvider(props) {
    const [posts, setPosts] = useState([]);
    const [like, setLike] = useState(0);
    const [newPosts, setNewPosts] = useState('');
    const [newUrl, setNewUrl] = useState('');

    useEffect(() => {
        setPosts(PostData);
    }, [posts]);

    function likes(e) {
        const id = e.target.id;
        const findId = posts.find(post => post.id == id);
        const favorite = findId.likes.count++;
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
            "likes": 0,
            "comment": [
                {
                    "id": Date.now(),
                    "profile": "",
                    "userName": "",
                    "comment": "",
                    "date": ""
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
        <Context.Provider value={{posts, likes, newPosts, handleChange, newUrl, handleInput, addNewPost}}>
            {props.children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context};
