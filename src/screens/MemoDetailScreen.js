import React from 'react';
import { StyleSheet, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    render() {
        return (
            <view style={styles.container}>
                <view style={styles.memoHeader}>

                    <view>
                        <text style={styles.memoHeaderTitle}>
                            講座のアイデア
                        </text>
                        <text style={styles.memoHeaderDate}>
                            2022/01/15
                        </text>

                    </view>

                </view >

                <view style={styles.memoContent} >
                    <text>講座のアイデアです</text>
                </view>

                <CircleButton color="white" style={styles.editButton}> + </CircleButton>


            </view >

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",

    },
    memoHeader: {
        height: "200",
        backgroundColor: "#173113C",
        justifyContent: "center",
        padding: 10,

    },
    memoHeaderTitle: {
        fontSize: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: "#fff",
    },
    memoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: "#fff",
        flex: 1,

    },
    editButton: {
        top: 75,

    },



});

export default MemoDetailScreen;
