import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/commons/Header';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import Button from './src/components/commons/Button';
import CardSection from './src/components/commons/CardSection';
import Spinner from './src/components/commons/Spinner';
import Card from './src/components/commons/Card';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { loggedIn: null };
    }   

    UNSAFE_componentWillMount() {
        let config = {
            apiKey: 'AIzaSyBlKmpuI_NW-a-nR07JyqOIaVubUNqFxWU',
            authDomain: 'auth-bfb98.firebaseapp.com',
            databaseURL: 'https://auth-bfb98.firebaseio.com',
            projectId: 'auth-bfb98',
            storageBucket: 'auth-bfb98.appspot.com',
            messagingSenderId: '187212839977'
        };
        firebase.initializeApp(config);

        // keep track the state of login/logout
        firebase.auth().onAuthStateChanged((user) => {
            // user reprent user when sign - in 
            // user reprent undefine when sign 0 - out
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    // helper function
    renderContent() {
        switch (this.state.loggedIn) {
        case true:
            return (
                <Card>
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                        Logout
                        </Button>
                    </CardSection>
                </Card>
            );
        case false:
            return <LoginForm />;
        default:
            return (
                <Card>
                    <CardSection>
                        <Spinner size="large" />
                    </CardSection>               
                </Card>
            );
        }
    }

    render() {
        return (
            <View>
                < Header headerText = "Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;