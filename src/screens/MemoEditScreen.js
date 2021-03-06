import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
    render() {
        return (
            <view style={styles.container}>
                <TextInput style={styles.memoEditInput} multiline value="Hi" />
                <CircleButton name="check" />
            </view>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100 %",
    },
    memoEditInput: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    },


});

export default MemoEditScreen;
