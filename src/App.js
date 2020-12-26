import React, {Component} from 'react';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments"

import {BrowserRouter as Router, Link, Route, Switch,} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>

            <div>
              <ul>
                <li>
                  <Link to={'/users'}>
                      to users page
                  </Link>
                </li>
                  <li>
                      <Link to={'/posts'}>
                          to posts page
                      </Link>
                  </li>
                  <li>
                      <Link to={'/comments'}>
                          to comments page
                      </Link>
                  </li>
              </ul>
              <div>
              <Switch>
                <Route path={'/users'} render={(props) => {
                    return <Users/>;
                }}>
                  </Route>

              </Switch>
                  <Switch>
                      <Route path={'/posts'} render={(props) => {
                          return <Posts/>;
                      }}>
                      </Route>
                  </Switch>
                  <Switch>
                      <Route path={'/comments'} render={(props) => {
                          return <Comments/>
                      }}>
                      </Route>
                  </Switch>

              </div>

            </div>
            </Router>
        );
    }
}

export default App;