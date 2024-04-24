import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useRouter } from "expo-router";

import ServiceCarousel from "../../components/ServiceCarousel";
import Wallet from "../../components/Wallet";
import TwoCols from "../../components/TwoCols";
import AboutDasuns from "../../components/AboutDasuns";

const HomeScreen = () => {
    const router = useRouter();
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <ServiceCarousel />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => router.push("/services")}>
                        <Text style={styles.buttonText}>Request Service </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Wallet />
                </View>
                <View>
                    <TwoCols />
                </View>
                <View>
                    <AboutDasuns />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight,

    },
    secondaryText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        opacity: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#37BEA7',
        padding: 16,
        borderRadius: 10,
        // margin: 8,

    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HomeScreen;