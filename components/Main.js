import React from 'react'

import {
	BrowserRouter as Router,
    Switch,
	Route,
} from 'react-router-dom';

import Header from './Header';

import Feed from '../pages/Feed';
import Add from '../pages/Add';
import Option from '../pages/Option';

export default function Main() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Feed />
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
