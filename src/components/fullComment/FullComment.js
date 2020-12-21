import React, {Component} from 'react';
import CommentService from "../../services/CommentService";

class FullComment extends Component {
    state = {post:null};
    commentService = new CommentService();
    async componentDidMount(){
        const {commentId} = this.props;
        const comment = await this.commentService.comment(commentId);
        this.setState({comment});
    }
    render() {
        const {comment}= this.state;
        return (
            <div>
                {comment && <div>{comment.id}-{comment.name}</div>}

            </div>
        );
    }
}

export default FullComment;