import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import {employeeFetch } from '../actions';
import PropTypes from 'prop-types';
import _ from 'lodash';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {

    UNSAFE_componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        //nextProps is next set of props that component will be render with
        // this.props is still old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        // create data source
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    // convert object to array
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid};
    });

    return { employees };
};

EmployeeList.propTypes = {
    employeeFetch: PropTypes.func,
};

export default connect(mapStateToProps, {employeeFetch})(EmployeeList);