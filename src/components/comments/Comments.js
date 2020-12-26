import React, {Component} from 'react';
import Comment from "../comment/Comment";
import {Route, Switch, withRouter} from "react-router-dom";
import FullComment from "../fullComment/FullComment"
import CommentService from "../../services/CommentService";

class Comments extends Component {
    commentService = new CommentService();
    state = {comments:[]};

    async componentDidMount(){
        const comments = await this.commentService.comments();
        this.setState({comments});
    }
    render() {
        const {comments} = this.state;
        const {match : {ulr}} = this.props;
        return (
            <div>
                {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        const {match:{params:{id}}} = props;
                        return <FullComment commentId={id} key={id}/>

                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Comments);