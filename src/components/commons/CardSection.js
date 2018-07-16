import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export const CardSection = (props) => {

    CardSection.propTypes = {
        children: PropTypes.array.isRequired,
        style: PropTypes.object,
    };

    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

// export default CardSection;