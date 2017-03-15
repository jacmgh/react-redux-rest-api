import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateUser, deleteUser} from '../actions/userActions';

class User extends React.Component {
    constructor(props) {
        super();

        this.state = {
            editMode: false,
            name: props.user.name
        };

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            editMode: !this.state.editMode
        });

        this.props.updateUser(this.props.user.id, this.state.name);
    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        if (this.state.editMode) {
            return (
                <form className="list-group-item active clearfix form-inline" onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} autoFocus/>
                    <span className="pull-right">
                        <button className="btn btn-default" type="submit">Edit</button>&nbsp;
                        <button className="btn btn-default" onClick={this.toggleEditMode}>Cancel</button>
                    </span>
                </form>
            );
        }
        return (
            <li className="list-group-item clearfix">
                {this.props.user.name}
                <span className="pull-right">
                    <button className="btn btn-primary" onClick={this.toggleEditMode}>Edit</button>&nbsp;
                    <button className="btn btn-danger" onClick={() => this.props.deleteUser(this.props.user.id)}>Delete</button>
                </span>
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateUser, deleteUser}, dispatch);
};

export default connect(null, mapDispatchToProps)(User);
