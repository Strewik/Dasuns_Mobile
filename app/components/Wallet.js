import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
const Wallet = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.card}>
      <TouchableOpacity onPress={() => router.push("/(screens)/")}>
      <View onPress={() => navigation.navigate("Trasactions")}>
        <Text style={styles.secondaryText} className=" text-center mt-2">
          Wallet balance
        </Text>
      </View>
      <View>
        <Text
          style={styles.greenHeader}
        >
          UGX 125,000
        </Text>
      </View>
      <View>
        <View style={styles.cardMinor}>
          <View style={styles.column}>
            <Text style={styles.secondaryText}>Deposit </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.secondaryText}>Withdraw </Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 16,// Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,// Elevation for Android
    elevation: 4,
  },
  secondaryText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    opacity: 0.4,
    justifyContent: "center",
    textAlign: "center",
  },
  greenHeader: {
    color: "#37BEA7",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardMinor: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    marginBottom: 8,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    marginRight: 4,
    marginLeft: 4,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderStyle: "solid",
    padding: 8,
    borderRadius: 8,
  },
});

export default Wallet;

