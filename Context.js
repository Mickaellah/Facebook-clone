import React, {useState, useEffect} from 'react';
import PostData from './PostData.json';

const Context = React.createContext();

function ContextProvider(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(PostData);
    }, [posts]);

    return (
        <Context.Provider value={{posts}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};
