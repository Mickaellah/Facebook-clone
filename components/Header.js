import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header>
                <h1>
                    OnjaBook
                </h1>
            </header>
            <nav>
                <Link to="/">
                    Feed
                </Link>
                <Link to="/add">
                    Add post
                </Link>
                <Link to="/option">
                    Option
                </Link>
            </nav>
        </div>
    )
}
