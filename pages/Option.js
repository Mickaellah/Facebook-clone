import React, {useContext} from 'react';
import {Context} from '../Context';

export default function Option() {
    const {newName, newProfile, typeNewName, typeNewUrlImage,updateUserName} = useContext(Context);
    return (
        <div>
            <p>Options: </p>
            <form onSubmit={updateUserName}>
                <fieldset className="input_user_name">
                    <label className="userName">UserName: </label>
                    <input value={newName} onChange={typeNewName} type="text" name="userName" placeholder="Type your username here" />
                </fieldset>
                <fieldset className="input_profile">
                    <label>Profile picture: </label>
                    <input value={newProfile} onChange={typeNewUrlImage} className="image_url" name="imageUrl" type="url" placeholder="Paste a URL here" />
                </fieldset>
                <div>
                    <button className="submitBttn" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}
