import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './commons';
import _ from 'lodash';
import PropTypes from 'prop-types';

class EmployeeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    UNSAFE_componentWillMount() {
        // take all employee and put in the reducer
        // hacking a bit
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate( { prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcomming shift is on ${shift}`);
    }

    onAccept() {
        const uid = this.props.employee.uid;
        this.props.employeeDelete({uid});   
    }

    onDecline() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>want
                </CardSection>
                
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift};
};

EmployeeEdit.propTypes = {
    employee: PropTypes.object,
    employeeUpdate: PropTypes.func,
    employeeSave: PropTypes.func,
    employeeDelete: PropTypes.func,
    name: PropTypes.string,
    phone: PropTypes.string,
    shift: PropTypes.string,
};

export default connect(mapStateToProps, 
    { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);