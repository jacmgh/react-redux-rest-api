import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUsers} from '../actions/userActions';
import User from './User';

class UserList extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">User list</h2>
                </div>
                <ul className="panel-body list-group">
                    {this.props.users.map(user => (
                        <User key={user.id} user={user}/>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {users: state.userReducer};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getUsers}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
