import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { CardSection, Input } from './commons';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import PropTypes from 'prop-types';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
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

            </View>
        );
    }
}

EmployeeForm.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    shift: PropTypes.string,
    employeeUpdate: PropTypes.func,
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);