import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react';
import RequestService from '../../components/RequestService';
import SPWallet from '../../components/SPWallet';
import RecommendSP from '../../components/RecommendSP';
import AppointmentsMin from '../../components/AppointmentsMin';
import Rating from '../../components/Rating';
import ServiceMonth from '../../components/ServiceMonth';
import ServiceBar from '../../components/ServiceBar';
import ActivityMin from '../../components/ActivityMin';
import AverageRating from '../../components/AverageRating';


const DashboardScreen = () => {

  const handleRatingPress = (rating) => {
    // Handle the selected rating (e.g., save it to state)
    console.log('Selected Rating:', rating);
  };

  const averageRating = 3.5; // Replace with your actual average rating

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          <View>
            <TouchableOpacity>
              <SPWallet />
            </TouchableOpacity>
          </View>

        </View>

      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <AppointmentsMin />
        </View>
        <View style={styles.column}>
          <AverageRating averageRating={averageRating} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ServiceBar />
      </View>
      <View >
        <ServiceMonth />
      </View>
      <View>
        <ActivityMin />
      </View>
    </ScrollView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange columns horizontally
    justifyContent: 'space-between', // Space evenly between columns
    // padding: 8,
  },
  column: {
    flex: 1, // Take equal width
    marginRight: 8, // Add margin between columns
    backgroundColor: '#f0f0f0', // Optional: Add background color for better visibility
    // padding: 8, // Optional: Add padding for better spacing
  },




});