import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const ServicePieChart = () => {
    const staticData = [
        { value: 20, svg: { fill: '#e57373' }, key: 'Personal assistance' },
        { value: 30, svg: { fill: '#81c784' }, key: 'Mobility guide' },
        { value: 10, svg: { fill: '#64b5f6' }, key: 'Captioning' },
        { value: 15, svg: { fill: '#ffb74d' }, key: 'Tactile sign language' },
        { value: 5, svg: { fill: '#9575cd' }, key: 'Ugandan sign language' },
        { value: 20, svg: { fill: '#f06292' }, key: 'International sign language' },
    ];

    const renderList = () => {
        return staticData.map((item) => (
            <View key={item.key} style={styles.listItem}>
                <View style={[styles.colorSquare, { backgroundColor: item.svg.fill }]} />
                <Text style={styles.listItemText}>{item.key}</Text>
            </View>
        ));
    };

    return (
        <View style={styles.container}>
            <View style={[styles.chartContainer, { flex: 4 }]}>
                <PieChart style={styles.pieChart} data={staticData} outerRadius={'95%'} innerRadius={5} />
            </View>
            <View style={[styles.listContainer, { flex: 5 }]}>{renderList()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    chartContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    pieChart: {
        height: 100,
        width: 100,
    },
    listContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'flex-start',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 3,
    },
    colorSquare: {
        width: 7,
        height: 7,
        marginRight: 8,
    },
    listItemText: {
        fontSize: 14,
        opacity: 0.6
    },
});

export default ServicePieChart;
