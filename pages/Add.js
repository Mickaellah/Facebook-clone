import React, {useContext} from 'react';

import {Context} from '../Context';

export default function Add() {
    const {newPosts, handleChange, newUrl, handleInput, addNewPost} = useContext(Context);
    return (
        <form onSubmit={addNewPost} className="submit_form" >
            <div>
                <fieldset className="textarea">
                    <label>New post: </label>
                    <textarea id="legend" value={newPosts} onChange={handleChange} className="statu" name="legend" rows="6" placeholder="Say what's on your mind..." required />
                </fieldset>
                <fieldset className="input_profile">
                    <label>Picture url: </label>
                    <input id="image" type="text" value={newUrl} onChange={handleInput} className="image_url" name="image" type="url" required />
                </fieldset>
            </div>
            <button className="submitBttn" type="submit">Post</button>
        </form>
    )
}
