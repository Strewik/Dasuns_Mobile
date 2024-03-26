import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import AssistiveTech from './AssistiveTech';
// import RecommendSP from './RecommendSP';

const SPWallet = () => {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <View >
                    <View>
                        <Text style={styles.secondaryText} className=" text-center mt-2">Wallet balance</Text>
                    </View>
                    <View>
                        <Text style={styles.greenHeader} className="text-[#37bea7] font-bold tracking-wider text-2xl text-center mt-3">
                            UGX 125,000
                        </Text>
                    </View>
                </View>

                <View style={styles.column}>
                    <View style={styles.cardMinor}>
                        <TouchableOpacity style={styles.columnMinor}>
                            <Text style={styles.secondaryText} >Deposit </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.columnMinor}>
                            <Text style={styles.secondaryText}>Withdraw </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    columnMinor: {
        flex: 1,
        // marginRight: 4,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderStyle: 'solid',
        borderRadius: 8,
        paddingRight: 26,
        paddingLeft: 26,
        paddingBottom: 8,
        paddingTop: 8,
        width: '100%',
    },
    card: {
        backgroundColor: 'white',
        paddingRight: 8,
        paddingLeft: 16,
        borderRadius: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        // marginLeft: 16,
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 4,
    },
    cardMinor: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        // marginBottom: 8,
        flexDirection: 'column',
        paddingBottom: 8,
    },
    secondaryText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        opacity: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 8,
    },
    greenHeader: {

    },

});


export default SPWallet;
