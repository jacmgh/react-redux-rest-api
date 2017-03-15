import * as userActions from '../actions/userActions';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case userActions.GET_USERS_SUCCESS:
            return action.payload;
        case userActions.CREATE_USER_SUCCESS:
            return [action.payload, ...state];
        case userActions.UPDATE_USER_SUCCESS:
            return state.map(user => {
                if (user.id !== action.payload.id) {
                    return user;
                }
                return Object.assign({}, user, action.payload);
            });
        case userActions.DELETE_USER_SUCCESS:
            return state.filter(user => user.id !== action.payload);
        default:
            return state;
    }
};

export default userReducer;
