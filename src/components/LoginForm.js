import React, { Component } from 'react';
import Button from './commons/Button';
import Card from './commons/Card';
import CardSection from './commons/CardSection';
import Input from './commons/Input';
import { Text, View } from 'react-native';
import Spinner from './commons/Spinner';
import {
    emailChanged,
    passwordChanged,
    loginUser,
} from '../actions';

import { connect } from 'react-redux';

class LoginForm extends Component {
    emailChanged(text) {
        this.props.emailChanged(text);
    }

    passwordChanged(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        // call action creator
        this.props.loginUser({email, password});
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        } else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                Loggin
                </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        placeholder='email@gmail.com' 
                        value={this.props.email}
                        onChangeText={this.emailChanged.bind(this)}/>
                </CardSection>
                <CardSection>
                    <Input 
                        label='Password'    
                        secureTextEntry
                        placeholder='password'
                        value={this.props.password}
                        onChangeText={this.passwordChanged.bind(this)}/>           
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};