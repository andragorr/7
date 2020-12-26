import React, {Component} from 'react';
import Comment from "../comment/Comment";
import {Route, withRouter} from "react-router-dom";
import FullComment from "../fullComment/FullComment"
import CommentService from "../../services/CommentService";

class Comments extends Component {
    commentService = new CommentService();
    state = {comments:[]};

    componentDidMount(){
       this.commentService
           .comments()
           .then(comments=>
               this.setState({comments})
           )

    }
    render() {
        const {comments} = this.state;
        const {match : {url}} = this.props;
        return (
            <div>
                {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
                    <Route path={url + '/:id'} render={(props) => {
                        const {match:{params:{id}}} = props;
                        return <FullComment commentId={id} key={id}/>

                    }}/>
            </div>
        );
    }
}

export default withRouter(Comments);
