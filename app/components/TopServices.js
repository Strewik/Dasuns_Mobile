import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { ProgressBar } from 'react-native-progress';
import { Bar } from 'react-native-progress';

const ServiceUsageProgressBar = () => {
    const servicesData = [
        { label: 'Personal Assistance', percentage: 30, color: '#3498db' },
        { label: 'Mobility Guide', percentage: 15, color: '#2ecc71' },
        { label: 'Captioning', percentage: 10, color: '#e74c3c' },
        { label: 'Tactile Sign', percentage: 20, color: '#f39c12' },
        // { label: 'Ugandan Sign Language', percentage: 5, color: '#9b59b6' },
        // { label: 'International Sign Language', percentage: 20, color: '#e8ge22' },
    ];

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Text style={styles.graphTitle}>Top services</Text>
                {servicesData.map((service, index) => (
                    <View key={index} style={styles.progressBarContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.serviceLabel}>{service.label}</Text>
                            <Text style={styles.percentageLabel}>{`${service.percentage}%`}</Text>
                        </View>
                        <Bar
                            progress={service.percentage / 100}
                            width={null}
                            height={3}
                            color={service.color}
                            style={styles.progressBar}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        // paddingTop: 8,
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
    container: {
        marginTop: 10,
        paddingHorizontal: 8,
    },
    graphTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        opacity: 0.6
    },
    progressBarContainer: {
        marginBottom: 8,
    },
    serviceLabel: {
        marginBottom: 8,
        fontSize: 12,
    },
    progressBar: {
        // marginTop: 8,
    },
    percentageLabel: {
        // marginTop: 8,
        fontSize: 12,
        color: 'gray',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    }
});

export default ServiceUsageProgressBar;




// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { ProgressBar } from 'react-native-progress';

// const TopServices = () => {
//     const servicesData = [
//         { label: 'Service A', percentage: 20, color: '#3498db' },
//         { label: 'Service B', percentage: 15, color: '#2ecc71' },
//         { label: 'Service C', percentage: 10, color: '#e74c3c' },
//         { label: 'Service D', percentage: 25, color: '#f39c12' },
//         { label: 'Service E', percentage: 5, color: '#9b59b6' },
//         { label: 'Service F', percentage: 25, color: '#e67e22' },
//     ];

//     return (
//         <View style={styles.container}>
//             <Text style={styles.graphTitle}>Service Usage Distribution</Text>
//             {servicesData.map((service, index) => (
//                 <View key={index} style={styles.progressBarContainer}>
//                     <Text style={styles.serviceLabel}>{service.label}</Text>
//                     <ProgressBar
//                         progress={service.percentage / 100}
//                         width={null}
//                         height={20}
//                         color={service.color}
//                         style={styles.progressBar}
//                     />
//                     <Text style={styles.percentageLabel}>{`${service.percentage}%`}</Text>
//                 </View>
//             ))}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 20,
//         paddingHorizontal: 16,
//     },
//     graphTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
//     progressBarContainer: {
//         marginBottom: 16,
//     },
//     serviceLabel: {
//         marginBottom: 8,
//         fontSize: 16,
//     },
//     progressBar: {
//         marginTop: 8,
//     },
//     percentageLabel: {
//         marginTop: 8,
//         fontSize: 14,
//         color: 'gray',
//     },
// });

// export default TopServices;






// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { ProgressBar } from 'react-native-progress';

// const TopServices = () => {
//     const servicesData = [
//         { label: 'Service A', percentage: 20, color: '#3498db' },
//         { label: 'Service B', percentage: 15, color: '#2ecc71' },
//         { label: 'Service C', percentage: 10, color: '#e74c3c' },
//         { label: 'Service D', percentage: 25, color: '#f39c12' },
//         { label: 'Service E', percentage: 5, color: '#9b59b6' },
//         { label: 'Service F', percentage: 25, color: '#e67e22' },
//     ];

//     return (
//         <View style={styles.container}>
//             <Text style={styles.graphTitle}>Service Usage Distribution</Text>
//             {servicesData.map((service, index) => (
//                 <View key={index} style={styles.progressBarContainer}>
//                     <Text style={styles.serviceLabel}>{service.label}</Text>
//                     <ProgressBar
//                         progress={service.percentage / 100}
//                         width={null}
//                         height={20}
//                         color={service.color}
//                         style={styles.progressBar}
//                     />
//                     <Text style={styles.percentageLabel}>{`${service.percentage}%`}</Text>
//                 </View>
//             ))}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 20,
//         paddingHorizontal: 16,
//     },
//     graphTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
//     progressBarContainer: {
//         marginBottom: 16,
//     },
//     serviceLabel: {
//         marginBottom: 8,
//         fontSize: 16,
//     },
//     progressBar: {
//         marginTop: 8,
//     },
//     percentageLabel: {
//         marginTop: 8,
//         fontSize: 14,
//         color: 'gray',
//     },
// });

// export default TopServices;
