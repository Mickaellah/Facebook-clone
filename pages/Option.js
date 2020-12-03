import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../Context';

export default function Option() {
    const {state, dispatch} = useContext(Context);
    const {users, currentUser} = state;
    const [userName, setUserName] = useState('');
    const [userProfilePhoto, setUerProfilePhoto] = useState('');

    const currentUserObject = users.find(user => user.userId === currentUser) || {
        userName: '',
        userProfilePhoto: '',
    };

    useEffect(() => {
        setUserName(currentUserObject.userName);
        setUerProfilePhoto(currentUserObject.userProfilePhoto);
    }, [users]);

    function handleOptions(e) {
        e.preventDefault();
        dispatch({type: "CURRENT_USER", userName, userProfilePhoto});
    }

    return (
        <div>
            <p>Options: </p>
            <form onSubmit={handleOptions}>
                <fieldset className="input_user_name">
                    <label className="userName">UserName: </label>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name="userName" placeholder="Type your username here" />
                </fieldset>
                <fieldset className="input_profile">
                    <label>Profile picture: </label>
                    <input value={userProfilePhoto} onChange={(e) => setUerProfilePhoto(e.target.value)} className="image_url" name="imageUrl" type="url" placeholder="Paste a URL here" />
                </fieldset>
                <div>
                    <button className="submitBttn" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}
