import axios from 'axios';
import * as alertActions from './alertActions';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export const getUsers = () => {
    return dispatch => {
        return axios.get('http://fewd.pl/api/users')
        .then(response => {
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: alertActions.ALERT_FAILURE,
                payload: 'An error occurred while getting users'
            });
            console.log(err);
        });
    };
};

export const createUser = (userName) => {
    return dispatch => {
        return axios.post('http://fewd.pl/api/users', {
            id: Date.now(),
            name: userName
        })
        .then(response => {
            dispatch({
                type: CREATE_USER_SUCCESS,
                payload: response.data
            });
            dispatch({
                type: alertActions.ALERT_SUCCESS,
                payload: 'User successfully added'
            });
        })
        .catch(err => {
            dispatch({
                type: alertActions.ALERT_FAILURE,
                payload: 'An error occurred while adding new user'
            });
            console.log(err);
        });
    };
};

export const updateUser = (userId, userName) => {
    return dispatch => {
        return axios.patch(`http://fewd.pl/api/users/${userId}`, {
            name: userName
        })
        .then(response => {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: response.data
            });
            dispatch({
                type: alertActions.ALERT_SUCCESS,
                payload: 'User successfully updated'
            });
        })
        .catch(err => {
            dispatch({
                type: alertActions.ALERT_FAILURE,
                payload: 'An error occurred while updating a user'
            });
            console.log(err);
        });
    };
};

export const deleteUser = (userId) => {
    if (!confirm('Delete user?')) {
        return {type: false};
    }
    return dispatch => {
        return axios.delete(`http://fewd.pl/api/users/${userId}`)
        .then(response => {
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: response.data.id
            });
            dispatch({
                type: alertActions.ALERT_SUCCESS,
                payload: 'User successfully deleted'
            });
        })
        .catch(err => {
            dispatch({
                type: alertActions.ALERT_FAILURE,
                payload: 'An error occurred while deleting a user'
            });
            console.log(err);
        });
    };
};
