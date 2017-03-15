import React from 'react';
import {connect} from 'react-redux';

class Alert extends React.Component {
    render() {
        if (!this.props.alert) {
            return null;
        }
        return (
            <div className={`alert alert-${this.props.alert.className} text-center`}>
                {this.props.alert.message}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {alert: state.alertReducer};
};

export default connect(mapStateToProps)(Alert);
