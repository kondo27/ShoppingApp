import React from 'react';
import { StyleSheet, Text } from 'react-native';


class MemoList extends React.Component {
    render() {
        return (

            <view style={styles.memoList}>
                <view style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2021/12/24</Text>
                </view>


                <view style={styles.memoList}>
                    <view style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2021/12/24</Text>
                    </view>
                </view>

                <view style={styles.memoList}>
                    <view style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2021/12/24</Text>
                    </view>
                </view>

                <view style={styles.memoList}>
                    <view style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2021/12/24</Text>
                    </view>
                </view>

                <view style={styles.memoList}>
                    <view style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム</Text>
                        <Text style={styles.memoDate}>2021/12/24</Text>
                    </view>
                </view>

            </view>

        );
    }
}


const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
    },
    memoListItem: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4,

    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
    },

});




export default MemoList;
