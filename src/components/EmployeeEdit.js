import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './commons';
import _ from 'lodash';
import PropTypes from 'prop-types';

class EmployeeEdit extends Component {
    UNSAFE_componentWillMount() {
        // take all employee and put in the reducer
        // hacking a bit
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate( { prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        console.log(name, phone, shift);
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
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift};
};

EmployeeEdit.propTypes = {
    employee: PropTypes.array,
    employeeUpdate: PropTypes.func,
    name: PropTypes.string,
    phone: PropTypes.string,
    shift: PropTypes.string,
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);