import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DashWallet = () => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.secondaryText}>Wallet balance</Text>
          </View>
          <View>
            <Text style={styles.greenHeader}>UGX 125,000</Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.cardMinor}>
            <TouchableOpacity style={styles.columnMinor}>
              <Text style={styles.secondaryText}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.columnMinor}>
              <Text style={styles.secondaryText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: "space-between",
    paddingTop: 10,
    // height:'60%'
  },
  columnMinor: {
    flex: 1,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 8,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 13,
    paddingTop: 13,
    width: "100%",
  },
  card: {
    backgroundColor: "white",
    paddingRight: 8,
    paddingLeft: 8,
    borderRadius: 10,
    marginLeft: 16,
    marginRight: 1,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardMinor: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    flexDirection: "column",
    paddingBottom: 8,
  },
  secondaryText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    opacity: 0.4,
    textAlign: "center",
  },
  greenHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#37bea7",
    textAlign: "center",
    marginTop: 10,
  },
});

export default DashWallet;

// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// const DashWallet = () => {
//   return (
//     <View style={styles.card}>
//       <View>
//         <Text style={styles.secondaryText} className=" text-center mt-2">
//           Wallet balance
//         </Text>
//       </View>
//       <View>
//         <Text
//           style={styles.greenHeader}
//           className="text-[#37bea7] font-bold tracking-wider text-xl text-center mt-5"
//         >
//           UGX 125,000
//         </Text>
//       </View>
//       <View>
//         <View style={styles.cardMinor}>
//           <TouchableOpacity style={styles.column}>
//             <Text style={styles.secondaryText}>Deposit </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.column}>
//             <Text style={styles.secondaryText}>Withdraw </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "white",
//     padding: 8,
//     borderRadius: 10,
//     marginLeft: 16,
//     marginTop: 16,
//     // marginLeft: 16,
//     // Shadow properties for iOS
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     // Elevation for Android
//     elevation: 4,
//   },
//   secondaryText: {
//     fontSize: 16,
//     color: "#000",
//     fontWeight: "bold",
//     opacity: 0.4,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   greenHeader: {},
//   cardMinor: {
//     backgroundColor: "white",
//     borderRadius: 8,
//     padding: 5,
//     marginBottom: 8,
//     flexDirection: "column",
//     // paddingBottom: 16,
//   },
//   column: {
//     flex: 0,
//     marginRight: 4,
//     marginLeft: 4,
//     borderWidth: 1,
//     borderColor: "rgba(0, 0, 0, 0.2)",
//     borderStyle: "solid",
//     padding: 8,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
// });

// export default DashWallet;
