import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AssistiveTech from './AssistiveTech';
import RecommendSP from './RecommendSP';

const TwoCols = () => {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <AssistiveTech />

            </View>
            <View style={styles.column}>
                <RecommendSP />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Arrange columns horizontally
        justifyContent: 'space-between', // Space evenly between columns
        padding: 8,
    },
    column: {
        flex: 1, // Take equal width
        // marginRight: 8,
        backgroundColor: '#f0f0f0',
        padding: 8,
        // height: 500,
    },

});

export default TwoCols;
