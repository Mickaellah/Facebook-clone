import React from 'react'

import {
	BrowserRouter as Router,
    Switch,
	Route,
} from 'react-router-dom';

import Header from './Header';

import FeedItem from '../pages/FeedItem';
import Add from '../pages/Add';
import Option from '../pages/Option';

export default function Feed() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <FeedItem />
                    </Route>
                    <Route exact path="/add">
                        <Add />
                    </Route>
                    <Route path="/option">
                        <Option />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
