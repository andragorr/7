import React, {Component} from 'react';
import UserService from "../../services/UserService";
import User from "../user/User";
import FullUser from "../fullUser/FullUser";
import {Route, Switch, withRouter} from "react-router-dom";


class Users extends Component {
    userService = new UserService();
    state = {users:[]};

    async componentDidMount(){
        const users = await this.userService.users();
        this.setState({users});
    }
    render() {
        const {users} = this.state;
        const {match : {url}} = this.props;
        console.log(this.props)
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }

                <Switch>
                    <Route path={url + '/:id'} render={(props) =>  {
                        const {match: {params:{id}}} = props;
                        return <FullUser userId={id} key={id}/>;
                    }}/>
                </Switch>

            </div>
        );
    }
}

export default withRouter(Users);