import * as alertActions from '../actions/alertActions';

const alertReducer = (state = null, action) => {
    switch (action.type) {
        case alertActions.ALERT_SUCCESS:
            return {
                message: action.payload,
                className: 'success'
            };
        case alertActions.ALERT_FAILURE:
            return {
                message: action.payload,
                className: 'warning'
            };
        default:
            return state;
    }
};

export default alertReducer;
