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

    return (
        <Context.Provider value={{posts, likes}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};
