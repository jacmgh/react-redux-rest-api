import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createUser} from '../actions/userActions';

class AddUser extends React.Component {
    constructor() {
        super();

        this.state = {
            userName: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.userName.trim()) {
            this.props.createUser(this.state.userName);
            this.setState({userName: ''});
        }
    }

    handleChange(e) {
        this.setState({userName: e.target.value});
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">Add new user</h2>
                </div>
                <form className="panel-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <label htmlFor="name" className="input-group-addon">Name:</label>
                            <input className="form-control" type="text" id="name" name="name" onChange={this.handleChange} value={this.state.userName} required/>
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="submit">Add user</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createUser}, dispatch);
};

export default connect(null, mapDispatchToProps)(AddUser);
