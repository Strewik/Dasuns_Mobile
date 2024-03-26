import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AppointmentsMin = () => {
    return (

        <View style={styles.card}>
            <View>
                <Text style={styles.secondaryText} className="mt-2 font-bold">Appointments</Text>
            </View>

            <View>
                <View style={styles.cardMinor}>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.secondaryText} >Next Appointment </Text>
                        <Text style={styles.text} >10th Jan 2024 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.secondaryText}>History </Text>
                        <Text style={styles.text}>3 Entries </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>



    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        marginLeft: 16,
        marginTop: 8,
        marginLeft: 16,
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 4,
    },
    secondaryText: {
        fontSize: 14,
        color: '#000',
        // fontWeight: 'bold',
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
        paddingBottom: 19,
    },
    column: {
        // flex: 0,
        // marginRight: 4,
        // marginLeft: 4,
        borderTopWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderStyle: 'solid',
        padding: 8,
        // backgroundColor: '#F0F0F0',

        // marginBottom: 16,

    },


});


export default AppointmentsMin;
