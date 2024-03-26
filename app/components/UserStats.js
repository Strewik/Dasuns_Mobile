import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserStats = () => {
    const userListData = [
        { label: 'Admins', count: 2, iconName: 'person' },
        { label: 'Service Users', count: 6, iconName: 'people' },
        { label: 'Service Providers', count: 5, iconName: 'business' },
        { label: 'Deactivated Users', count: 0, iconName: 'block' },
    ];

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Text style={styles.header}>Users</Text>
                {userListData.map((user, index) => (
                    <View key={index} style={styles.userContainer}>
                        <Icon name={user.iconName} size={20} color="#000000" />
                        <Text style={styles.userCount}>{user.count}</Text>
                        <Text style={styles.userLabel}>{user.label}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        paddingTop: 8,
        borderRadius: 10,
        marginTop: 8,
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 4,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 14,
        opacity: 0.6,
        marginBottom: 8,

    },
    container: {
        marginTop: 10,
        paddingHorizontal: 8,
        marginBottom: 14,
    },
    userContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 18,
    },
    userLabel: {
        marginLeft: 8,
        fontSize: 14,
        opacity: 0.6
    },
    userCount: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: 'bold',
        opacity: 0.6
    },
});

export default UserStats;
