import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// import RequestService from '../../components/RequestService';
import WalletOverall from "../../components/WalletOverall";
import UserStats from "../../components/UserStats";
import AppointmentsMin from "../../components/AppointmentsMin";
import TopServices from "../../components/TopServices";
import ServiceMonth from "../../components/ServiceMonth";
import ServiceBar from "../../components/ServiceBar";
import ActivityMin from "../../components/ActivityMin";

const AdminDashScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.column}>
            <View>
              <View>
                <WalletOverall />
              </View>
            </View>
          </View>
          <View style={styles.column}>
            <View>
              <View style={styles.card}>
                <UserStats />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserAppointments")}
            >
              <AppointmentsMin />
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TopServices />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ServiceBar />
        </View>
        <View>
          <ServiceMonth />
        </View>
        <View>
          <ActivityMin />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange columns horizontally
    justifyContent: "space-between", // Space evenly between columns
    // padding: 8,
    marginHorizontal: 16,
  },
  column: {
    flex: 1, // Take equal width
    marginRight: 8, // Add margin between columns
    backgroundColor: "#f0f0f0", // Optional: Add background color for better visibility
    // padding: 8, // Optional: Add padding for better spacing
  },
});

export default AdminDashScreen;
