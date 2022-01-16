import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class BodyText extends React.Component {
    render() {
        return (
            <View>

                <Text style={styles.text}>Hello</Text>

            </View>


        );
    }


}


const styles = StyleSheet.create({

    text: {
        color: "#DDD",
        backgroundColor: "#eee"
    }
})

export default BodyText;
