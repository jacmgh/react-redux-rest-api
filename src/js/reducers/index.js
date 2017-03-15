import {combineReducers} from 'redux';
import alertReducer from './alertReducer';
import userReducer from './userReducer';

const reducer = combineReducers({alertReducer, userReducer});

export default reducer;
