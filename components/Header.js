import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
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
                        <Link to="/option" className="link">
                            Option
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
