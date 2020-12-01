import React, {useState, useEffect} from 'react';
import PostData from './PostData.json';

const Context = React.createContext();

function ContextProvider(props) {
    const [posts, setPosts] = useState([]);
    const [like, setLike] = useState(0);

    useEffect(() => {
        setPosts(PostData);
    }, [posts]);

    function likes(e) {
        const id = e.target.id;
        const findId = posts.find(post => post.id == id);
        const favorite = findId.likes++;
        setLike(favorite);
    }

    function addNewPost(e) {
        e.preventDefault();
        const [legend, image] = e.target;

        const newPost = {
            id: Date.now(),
            likes: 0,
            userName: "Clopedia Nomenjanahary",
            date: Date.now(),
            legend: legend.value,
            image: image.value,
            comment: [
                {
                    profile: "",
                    userName: "",
                    comment: "",
                    date: ""
                }
            ]
        }

        posts.push(newPost);

        setPosts([...posts]);
        console.log(posts);
    }

    return (
        <Context.Provider value={{posts, likes, addNewPost}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};
