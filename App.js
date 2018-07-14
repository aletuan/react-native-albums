import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

class App extends Component {
    UNSAFE_componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyBFng9TeU_B8QnCW2Cp4oTb7p2WJ35RJUw',
            authDomain: 'manager-e1891.firebaseapp.com',
            databaseURL: 'https://manager-e1891.firebaseio.com',
            projectId: 'manager-e1891',
            storageBucket: 'manager-e1891.appspot.com',
            messagingSenderId: '1074891340519'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;