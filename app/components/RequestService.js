import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Svg, { Path } from "react-native-svg";

const RequestService = (props) => {
    return (

        <TouchableOpacity style={styles.card}>
            <View>
                <Image
                    source={require("../../assets/images/circleplus.png")}
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={styles.text} className="text-[#37bea7] font-bold  text-1xl  mt-1">
                    Request for Service
                </Text>
            </View>

        </TouchableOpacity>



    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#37bea7',
        padding: 8,
        borderRadius: 10,
        marginTop: 16,
        marginBottom: 6,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 4,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 3,
        fontWeight: 'bold',
        // opacity: 0.4,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        // resizeMode: 'cover', 
        borderRadius: 8,
    },
});


export default RequestService;
