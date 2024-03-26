import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StarRating from './StarRating1';

const Wallet = () => {

    const handleRatingPress = (rating) => {
        // Handle the selected rating (e.g., save it to state)
        console.log('Selected Rating:', rating);
    };

    return (

        <View style={styles.card}>
            <View>
                <Text style={styles.secondaryText} className="mt-2">Rating</Text>
            </View>
            <View>
                <Text style={styles.greenHeader} className="text-[#37bea7] font-bold tracking-wider text-4xl text-center mt-3">
                    4.9
                </Text>
            </View>
            <View>
                <View style={styles.cardMinor}>
                    <StarRating rating={3} onRatingPress={handleRatingPress} />
                </View>
            </View>
            <View>
                <Text className="mt-1 text-center mb-4">
                    4 ratings
                </Text>
            </View>
        </View>



    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 8,
        paddingBottom: 0,
        borderRadius: 10,
        // marginLeft: 16,
        marginTop: 8,
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
        color: '#000',
        fontWeight: 'bold',
        opacity: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenHeader: {

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


export default Wallet;
