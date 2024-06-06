import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress';

const ServiceUsageProgressBar = () => {
  // Sample service request amounts
  const serviceRequests = {
    'Personal Assistance': 300,
    'Mobility Guide': 150,
    'Captioning': 100,
    'Tactile Sign': 200,
    'Ugandan Sign Language': 50,
    'International Sign Language': 200,
  };

  // Function to calculate percentages
  const calculatePercentages = (requests) => {
    const totalRequests = Object.values(requests).reduce((sum, value) => sum + value, 0);
    const percentages = {};
    for (let [service, count] of Object.entries(requests)) {
      percentages[service] = Math.round((count / totalRequests) * 100);
    }
    return percentages;
  };

  // Calculate the percentages
  const percentages = calculatePercentages(serviceRequests);

  // Define the services data with dynamic percentages
  const servicesData = [
    { label: 'Personal Assistance', percentage: percentages['Personal Assistance'], color: '#3498db' },
    { label: 'Mobility Guide', percentage: percentages['Mobility Guide'], color: '#2ecc71' },
    { label: 'Captioning', percentage: percentages['Captioning'], color: '#e74c3c' },
    { label: 'Tactile Sign', percentage: percentages['Tactile Sign'], color: '#f39c12' },
    { label: 'Ugandan Sign Language', percentage: percentages['Ugandan Sign Language'], color: '#9b59b6' },
    { label: 'International Sign Language', percentage: percentages['International Sign Language'], color: '#e8e22e' },
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

export default ServiceUsageProgressBar;


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        // paddingTop: 8,
        borderRadius: 10,
        marginTop: 16,
        marginLeft:8,
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





