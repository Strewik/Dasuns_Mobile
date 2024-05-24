import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AverageStarRating from './AverageStarRating';

const App = () => {
    const averageRating = 3.0; // Replace with your actual average rating from db
    const numberRatitings = 12
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.secondaryText} >Ratings</Text>
            </View>
            <View>
                <Text style={styles.greenHeader}>
                    {averageRating}
                </Text>
            </View>
            <AverageStarRating averageRating={averageRating} />
            <View>
                <Text style={styles.secondaryText}>
                    {numberRatitings} ratings
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        marginVertical: 16,
        marginRight: 8,
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 4,
    },
    secondaryText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        opacity: 0.4,
        textAlign: "center",
    },
    greenHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#37bea7",
        textAlign: "center",
        marginVertical: 10,
      },
    cardMinor: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 5,
        marginBottom: 8,
        flexDirection: 'column',
        // paddingBottom: 16,
    },
    column: {
        flex: 0,
        marginRight: 4,
        marginLeft: 4,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderStyle: 'solid',
        padding: 8,
        borderRadius: 8,
        marginBottom: 16,

    },


});

export default App;
