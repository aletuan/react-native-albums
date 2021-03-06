import React, { Component } from 'react';
import CardSection from './CardSection';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from 'actions';
import PropTypes from 'prop-types';

class ListItem extends Component {

    UNSAFE_componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        //console.log(this.props);
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }

    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1}}>{library.description}</Text>
                </CardSection>
            );
        }
    }
}

ListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    library: PropTypes.object,
    expanded: PropTypes.bool,
    selectLibrary: PropTypes.func,
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);