import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ServicePieChart from "./ServicePieChart";

const ServiceMonth = (props) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.text}>All services</Text>
      </View>

      <View style={styles.container}>
        <View style={[styles.column, { flex: 1 }]}>
          <ServicePieChart />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    marginLeft: 16,
    marginBottom: 16,
    marginRight: 16,
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    opacity: 0.6,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  container: {
    flexDirection: "row", // Arrange columns horizontally
    padding: 8,
  },
  column: {
    padding: 8,
  },
  columnText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default ServiceMonth;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import ServicePieChart from './ServicePieChart';

// const ServiceMonth = (props) => {
//     return (

//         <TouchableOpacity style={styles.card}>
//             <View>
//                 <Text style={styles.text} className="text-[#37bea7] font-bold  text-1xl  mt-1">
//                     All services
//                 </Text>
//             </View>

//             <View style={styles.container}>
//                 <View style={[styles.column, { flex: 1 }]}>
//                     <ServicePieChart />
//                 </View>

//             </View>

//         </TouchableOpacity>

//     );
// };

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
//     text: {
//         fontSize: 16,
//         color: '#000',
//         fontWeight: 'bold',
//         opacity: 0.6,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//     },
//     image: {
//         width: 50,
//         height: 50,
//         // resizeMode: 'cover',
//         borderRadius: 8,
//     },
//     container: {
//         flexDirection: 'row', // Arrange columns horizontally
//         padding: 8,
//     },
//     column: {
//         // backgroundColor: '#3498db', // Example background color
//         padding: 8,
//         // margin: 8,
//     },
//     columnText: {
//         color: '#ffffff', // Example text color
//         fontSize: 16,
//     },
// });

// export default ServiceMonth;
