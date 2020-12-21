import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "../post/Post";
import FullPost from "../fullPost/FullPost";
import {Route, Switch, withRouter} from "react-router-dom";


class Posts extends Component {
    postService = new PostService();
    state = {posts:[]};

    async componentDidMount(){
        const posts = await this.postService.posts();
        this.setState({posts});
    }
    render() {
        const {posts} = this.state;
        const {match : {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                    const {match:{params:{id}}} = props;
                    return <FullPost postId={id} key={id}/>

                        }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Posts);