import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from './colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    label: {
        flex: 1,
        fontSize: 10,
        color: Colors.BLACK,
        fontFamily: 'Montserrat-Regular',
    },
    circle: {
        width: 34,
        height: 34,
        borderRadius: 17,
        borderWidth: 2,
        borderColor: Colors.GREY,
        backgroundColor: Colors.GREY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    indicator: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: Colors.PURPLE,
    },
});

class Checkbox1 extends Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: this.props.isChecked};
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this._handlePress()}
                style={[styles.container, this.props.style]}
                activeOpacity={0.7}>
                <View style={styles.circle} className="circle">
                    {this.props.isChecked && <View style={styles.indicator} />}
                </View>
                <Text style={styles.label}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }

    _handlePress = () => {
        if (!this.props.isDisabled && this.props.onPress) {
            this.props.onPress();
        }
    };
}

Checkbox1.propTypes = {
    label: PropTypes.string,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    style: PropTypes.object,

    onPress: PropTypes.func,
};

Checkbox1.defaultProps = {
    label: '',
    value: false,
    isDisabled: false,

    onPress: null,
};

export default Checkbox1;
