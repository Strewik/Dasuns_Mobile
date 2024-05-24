import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ServiceBar = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                data: [10, 8, 12, 6, 14, 7, 9],
            },
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 0.4) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.2,
    };

    return (
        <View style={styles.card}>
            <View>
                <Text className="text-[#37bea7] font-bold  text-1xl  mt-1 ml-3">
                    Cumulative services
                </Text>
            </View>
            <BarChart
                style={{ marginVertical: 4, borderRadius: 16, margin: 16, }}
                data={data}
                width={'300'}
                height={200}
                yAxisSuffix=""
                fromZero
                chartConfig={chartConfig}
                verticalLabelRotation={0}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 10,
        margin: 16,
        marginBottom: 4,
        // marginRight: 16,
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
});

export default ServiceBar;
