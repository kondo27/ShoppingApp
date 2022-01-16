import React from 'react';
import { StyleSheet, Text } from 'react-native';


class CircleButton extends React.Component {
    render() {
        return (
            <view style={styles.CircleButton}>
                <Text style={styles.CircleButtonTitle}>+</Text>
                {this.props.children}
            </view>

        )
    }
}


const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#E31676',
        borderRadius: 24,
        justifyContent: 'center',
        alignContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    circleButtonTitle: {
        fontSize: 32,
        lineHeight: 32,
        color: '#fff',
    },
});

export default CircleButton;
