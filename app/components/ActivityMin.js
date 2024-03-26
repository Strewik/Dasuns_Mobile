// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ActivityMin = () => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.text} className="text-[#37bea7] font-bold  text-1xl  mt-1">
//                     Activity
//                 </Text>
//     </View>
//   )
// }

// export default ActivityMin

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#fff',
//         padding: 8,
//         borderRadius: 10,
//         marginLeft: 16,
//         marginBottom: 16,
//         marginRight: 16,
//         marginTop: 8,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // Shadow properties for iOS
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         // Elevation for Android
//         elevation: 4,
//     },
//     title:{
//         fontSize: 14,
//         color: '#000',
//         fontWeight: 'bold',
//         opacity: 0.6,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//     },
// })



import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const ColoredDotList = () => {
    // Sample data for the list
    const data = [
        { id: '1', color: 'purple', title: 'New service request', Desc: 'Personal Assistance', time: '5 min ago' },
        { id: '2', color: '#37bea7', title: 'Payment sent', Desc: 'UGX 120,000 for service', time: 'yesterday' },
        { id: '3', color: 'blue', title: 'New service request', Desc: 'Sign langugae', time: '1 Dec 2023' },
    ];

    // Render each item in the list
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.bit}>
                <View style={[styles.coloredDot, { backgroundColor: item.color }]} />
                <View ><Text style={styles.title}>{item.title}</Text></View></View>
            <View style={styles.element}><Text style={styles.text}>{item.Desc}</Text>
                <Text style={styles.text}>{item.time}</Text></View>
        </View>
    );
    const renderSeparator = () => <View style={styles.separator} />;
    return (
        <View style={styles.card}>
            <View>
                <Text className="text-[#37bea7] font-bold  text-1xl  mt-1">
                    Activity
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    coloredDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    card: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 10,
        marginLeft: 16,
        marginBottom: 16,
        marginRight: 16,
        marginTop: 8,
        // justifyContent: 'center',
        // alignItems: 'center',
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 4,
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
        marginLeft: 20,
        marginRight: 20,
        opacity: 0.2,
    },
    bit: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    element: {
        marginLeft: 20,
    },
    title: {
        opacity: 0.6,
        fontSize: 13,
        fontWeight: 'bold',

    },
    text: {
        opacity: 0.6,
        fontSize: 12,
        // fontWeight: 'bold',

    }
});

export default ColoredDotList;
