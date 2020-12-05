import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {Context} from '../Context';

export default function Header() {
    const {state, dispatch} = useContext(Context);
    const {users, currentUser} = state;
    const currentUserObj = users.find(user => user.userId === currentUser);
    return (
        <div className="main_heading">
            <header>
                <h1>
                    OnjaBook
                </h1>
            </header>
            <nav>
                <ul className="navigation">
                    <li>
                        <Link to="/" className="link">
                            Feed
                        </Link>
                    </li>
                    <li>
                        <Link to="/add" className="link">
                            Add post
                        </Link>
                    </li>
                    <li className="list_item">
                        {
                            currentUserObj && (
                                <Link to="/option">
                                    <div className="options">
                                        <p className="username">{currentUserObj.userName}</p>
                                        <img 
                                            className="user_profile"
                                            src={currentUserObj.userProfilePhoto}
                                            alt="Profile photo"
                                        />
                                    </div>
                                </Link>
                            )
                        }
                    </li>
                </ul>
            </nav>
        </div>
    )
}
