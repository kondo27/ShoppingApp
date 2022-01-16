import React from 'react';
import { StyleSheet, Text } from 'react-native';


import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
    render() {
        return (
            <view style={styles.container}>

                <MemoList />
                <CircleButton>+</CircleButton>
            </view>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100 %",
    },


});

export default MemoListScreen;
