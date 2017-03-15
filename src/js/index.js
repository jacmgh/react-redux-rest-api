import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AddUser from './components/AddUser';
import Alert from './components/Alert';
import UserList from './components/UserList';
import reducer from './reducers/';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
    <div className="container">
        <h1 className="page-header">User Management</h1>
        <div className="row">
            <div className="col-lg-5">
                <Alert/>
                <AddUser/>
            </div>
            <div className="col-lg-7">
                <UserList/>
            </div>
        </div>
    </div>
);

render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'));
