import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './commons';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

class EmployeeListItem extends Component {

    onRowPress() {
        // action navigation
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

EmployeeListItem.propTypes = {
    name: PropTypes.string,
    employee: PropTypes.object
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default EmployeeListItem;