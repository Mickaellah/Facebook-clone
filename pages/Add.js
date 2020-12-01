import React, {useContext} from 'react';

import {Context} from '../Context';

export default function Add() {
    const {addNewPost} = useContext(Context);
    return (
        <form onSubmit={addNewPost} className="submit_form" >
            <div>
                <fieldset className="textarea">
                    <label>New post: </label>
                    <textarea id="legend" className="statu" name="legend" rows="6" placeholder="Say what's on your mind..." />
                </fieldset>
                <fieldset className="input_profile">
                    <label>Picture url: </label>
                    <input id="image" className="image_url" name="image" type="url" />
                </fieldset>
            </div>
            <button className="submitBttn" type="submit">Post</button>
        </form>
    )
}
