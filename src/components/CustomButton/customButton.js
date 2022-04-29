import React from "react";
import { Text, Pressable} from 'react-native';
import styles from './style.js';

const customButton = ({ onPress, text, type="PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container,styles[`container_${type}`]]}>
            <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

export default customButton;