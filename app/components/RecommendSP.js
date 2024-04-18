import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const RecommendSP = () => {
    return (


        <TouchableOpacity style={styles.card}>
            <View style={styles.imageView}>
                <Image
                    source={require("../../assets/images/recommend.png")}
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={styles.secondaryText} >Recommend service provider</Text>
            </View>

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
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
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 8,
        opacity: 0.6,
        margin: 10,
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default RecommendSP;
