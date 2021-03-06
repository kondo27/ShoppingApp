import React from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import FontAwsome from '../../assets/fonts/fa-solid-900.ttf';


const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus: '\uf067',
    check: '\uf00c'
}, 'FontAwsome');

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    }


    async componentDidMount() {
        await Font.loadAsync({
            FontAwsome: FontAwsome
        });

        this.setState({ fontLoaded: true })
    }


    render() {
        const { name, style, color } = thi.props;

        let bgColor = "#E31676";
        let textColor = "#fff";

        if (color === "white") {
            bgColor = "#fff";
            textColor = "#E31676";

        }

        return (
            <view style={[styles.CircleButtonTitle, style, { backgroundColor: bgColor }]}>
                {
                    this.state.fontLoaded ? (
                        <CustomIcon name={name} style={[styles.CircleButtonTitle, { color: textColor }]} />
                    ) : null
                }
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
        borderRadius: 24,
        justifyContent: 'center',
        alignContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    circleButtonTitle: {
        fontFamily: 'FontAwsome',
        fontSize: 24,
        lineHeight: 32,
        color: '#fff',
    },
});

export default CircleButton;
