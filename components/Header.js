import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {Context} from '../Context';

export default function Header() {
    const {user} = useContext(Context);
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
                    <li>
                        {
                            user.map((user) => {
                                return (
                                    <Link to="/option" key={user.userId} className="link link_user">
                                        <p className="user_name">{user.userName}</p>
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
