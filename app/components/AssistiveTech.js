import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";


const AssistiveTech = () => {
    const router = useRouter();

    return (

        <TouchableOpacity style={styles.card} onPress={() => router.push("/(screens)/activityDetails")}>
            <View style={styles.imageView}>
                <Image
                    source={require("../../assets/images/activity1.png")}
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={styles.secondaryText} >Activity</Text>
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        // margin: 16,
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
        marginBottom: 20,
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
    },
});


export default AssistiveTech;
