import React, {useState, useContext} from 'react';
import {Context} from '../Context';

function Add() {
    const [ newLegend, setNewLegend ] = useState('');
    const [ imagePost, setImagePost ] = useState('https://www.postoast.com/wp-content/uploads/2018/10/Miah-Dhanani-Photos-11.jpg');

    const { state, dispatch } = useContext(Context);
    const { currentUser } = state;

    function addNewPost(e) {
        e.preventDefault();

        const newPost = {
            "id": Date.now(),
            "userId": currentUser,
            "userName": "Clopedia",
            "date": Date.now(),
            "legend": newLegend,
            "image": imagePost,
            "likes": [],
            "comments": []
        }

        dispatch({type: "POST", newPost: newPost});
        e.target.reset();
    }   

    return (
        <form onSubmit={addNewPost} className="submit_form" >
            <div>
                <fieldset className="textarea">
                    <label>New post: </label>
                    <textarea id="legend" value={newLegend} onChange={(e) => setNewLegend(e.target.value)} className="statu" name="legend" rows="6" placeholder="Say what's on your mind..." required />
                </fieldset>
                <fieldset className="input_profile">
                    <label>Picture url: </label>
                    <input id="image" value={imagePost} onChange={(e) => setImagePost(e.target.value)} type="text" className="image_url" name="image" type="url" required />
                </fieldset>
            </div>
            <button className="submitBttn" type="submit">Post</button>
        </form>
    )
}

export default Add
