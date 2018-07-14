import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './commons/ListItem';


class LibraryList extends Component {

    // TODO: pulling data from state object and show to UI
    // only way, to read data from state 
    render() {
        return (
            <FlatList 
                data={this.props.libraries}
                renderItem={({item}) => (
                    <ListItem library={item} />
                )}
                keyExtractor={library => library.id}
            />
        );
    }
}

const mapStateToProps = state => {
    //console.log(state);
    return { libraries : state.libraries };
};

export default connect(mapStateToProps)(LibraryList);