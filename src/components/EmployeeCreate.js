import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './commons';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import PropTypes from 'prop-types';


class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Friday' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Picker 
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate( { prop: 'shift', value: day })}                    
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                  Create
                    </Button>
                </CardSection>                                          
            </Card>
        );
    }
}

EmployeeCreate.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    employeeUpdate: PropTypes.func,
    employeeCreate: PropTypes.func,
    shift: PropTypes.string,
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);