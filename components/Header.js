import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {Context} from '../Context';

export default function Header() {
    const {state, dispatch} = useContext(Context);
    const {users} = state;
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
                            users.map((user) => {
                                return (
                                    <Link to="/option" key={user.userId} className="link link_user">
                                        <p className="username">{user.userName}</p>
                                        <img className="user_profile" src={user.userProfilePhoto} alt="User profile" />
                                    </Link>
                                )
                            })
                        }
                    </li>
                </ul>
            </nav>
        </div>
    )
}
