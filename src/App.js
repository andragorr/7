import React, {Component} from 'react';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments"
import './App.css'

import {NavLink, Route, Switch,} from "react-router-dom";

class App extends Component {

    render() {
        return (
                <div>
                    <ul>
                        <li>
                            <NavLink to={'/users'}>
                                to users page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/posts'}>
                                to posts page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/comments'}>
                                to comments page
                            </NavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path={'/users'} component={Users}/>
                            <Route path={'/posts'} component={Posts}/>
                            <Route path={'/comments'} component={Comments}/>
                        </Switch>
                    </div>
                </div>
        );
    }
}

export default App;
