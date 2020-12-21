import React, {Component} from 'react';
import PostService from "../../services/PostService";

class FullPost extends Component {
    state = {post:null};
    postService = new PostService();
    async componentDidMount() {
        const {postId} = this.props;
        const post = await this.postService.post(postId);
        this.setState({post});
    }
    render() {
        const {post} = this.state;
        return (
            <div>
                {post && <div>{post.id}-{post.title}</div>}
            </div>
        );
    }
}

export default FullPost;