import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import DividerLine from "./DividerLine";

const Wallet = () => {
  const WalletTotal = 23100000;
  const SPTotalWallet = 11200000;
  const NumberOfSP = 22;
  const ClientTotalWallet = 21900000;
  const NumberOfClients = 116;

  const numberWithCommas = (number) => {
    // Format the number with commas
    return number.toLocaleString();
  };
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.secondaryText} className=" mt-2">
          Overall wallet balance
        </Text>
      </View>
      <View>
        <Text style={styles.greenHeader}>
          UGX {numberWithCommas(WalletTotal)}
        </Text>
      </View>
      <DividerLine />
      <View style={styles.containerSmall}>
        <View style={styles.cardMinor}>
          <View style={styles.column1}>
            <Text style={styles.head}>
              {" "}
              {NumberOfSP} Service provider wallets{" "}
            </Text>
            <Text style={styles.tertiary}>
              {" "}
              UGX {numberWithCommas(SPTotalWallet)}{" "}
            </Text>
          </View>
          <View style={styles.column2}>
            <Text style={styles.head}> {NumberOfClients} Client wallets</Text>
            <Text style={styles.tertiary}>
              {" "}
              UGX {numberWithCommas(ClientTotalWallet)}{" "}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 10,
    height: 200,
    // marginRight: 8,
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 4,
  },
  secondaryText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  greenHeader: {},
  tertiary: {
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.6,
    // marginBottom: 5,
  },
  head: {
    opacity: 0.6,
    fontSize: 12,
    marginBottom: 5,
  },
  cardMinor: {
    backgroundColor: "white",
    // borderRadius: 8,
    padding: 5,
    marginBottom: 8,
    flexDirection: "column",
  },

  column1: {
    flex: 1,
    marginRight: 4,
    // marginLeft: 4,
    marginBottom: 8,
    borderLeftWidth: 2,
    borderLeftColor: "purple",
    paddingLeft: 8,
  },
  column2: {
    flex: 1,
    marginRight: 4,
    // marginLeft: 4,
    // marginBottom: 8,
    borderLeftWidth: 2,
    borderLeftColor: "blue",
    paddingLeft: 8,
  },
});

export default Wallet;
