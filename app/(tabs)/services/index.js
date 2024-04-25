import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";

const ServicesScreen = () => {
  const router = useRouter();

  const handleRequestService = (service) => {
    router.push(`/services/RequestServiceScreen`, { params: { service } });
    console.log(`Requested service`);
  };



  const services = [
    {
      id: "personalAssistance",
      image: require("./Personal-Assistant.jpg"),
      title: "Personal Assistance",
      modalContent: "Content for Personal Assistance",
    },
    {
      id: "captioning",
      image: require("../../../assets/images/Closed-Caption.jpg"),
      title: "Captioning",
      modalContent: "Content for Captioning",
    },
    {
      id: "localSign",
      image: require("../../../assets/images/signLanguage.jpg"),
      title: "Local sign language",
      modalContent: "Content for local sign language",
    },
    {
      id: "internationalSign",
      image: require("../../../assets/images/International-signLanguage.jpg"),
      title: "International sign language",
      modalContent: "Content for International sign language",
    },
    {
      id: "mobilityGuide",
      image: require("../../../assets/images/Mobility-Guide.jpg"),
      title: "Mobility guide",
      modalContent: "Content for mobility guide",
    },
    {
      id: "Tactile",
      image: require("../../../assets/images/Mobility-Guide.jpg"),
      title: "Tactile",
      modalContent: "Content for Tactile",
    },
  ];

  const [modalVisible, setModalVisible] = useState(Array(services.length).fill(false));

  const openModal = (index) => {
    const newModalVisible = [...modalVisible];
    newModalVisible[index] = true;
    setModalVisible(newModalVisible);
  };

  const closeModal = (index) => {
    const newModalVisible = [...modalVisible];
    newModalVisible[index] = false;
    setModalVisible(newModalVisible);
  };
  
  return (
    <ScrollView>
      <View style={styles.container}>
        {services.map((service, index) => (
          <View key={service.id} style={styles.column}>
            <View style={styles.card}>
              <Image source={service.image} style={styles.cardImage} />
              <View style={styles.body}>
                <Text style={styles.header}>{service.title}</Text>
                <TouchableOpacity onPress={() => openModal(index)}>
                  <Text style={styles.readMoreLink}> Read More </Text>
                </TouchableOpacity>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleRequestService(service.id)}
                  >
                    <Text style={styles.buttonText}>Book Service </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible[index]}
                onRequestClose={() => closeModal(index)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text>{service.modalContent}</Text>
                    <Button
                      title="Close"
                      onPress={() => closeModal(index)}
                    />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ServicesScreen;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     paddingHorizontal: 10,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   cardImage: {
//     width: 150,
//     height: 150,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     resizeMode: 'cover',
//   },
//   body: {
//     padding: 10,
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,





// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Button,
//   ScrollView,
//   Modal,
// } from "react-native";
// import { useRouter } from "expo-router";

// const ServicesScreen = () => {
//   const router = useRouter();

//   const handleRequestService = (service) => {
//     router.push(`/services/RequestServiceScreen`, { params: { service } });
//     console.log(`Requested service`);
//   };

//   const [modalVisible, setModalVisible] = useState({});

//   const openModal = (id) => {
//     setModalVisible({ ...modalVisible, [id]: true });
//   };
//   const closeModal = (id) => {
//     setModalVisible({ ...modalVisible, [id]: false });
//   };

//   const services = [
//     {
//       id: "personalAssistance",
//       // image: "./Personal-Assistant.jpg",
//       image: require("./Personal-Assistant.jpg"),
//       title: "Personal Assistance",
//       modalContent: "Content for Personal Assistance",
//     },
//     {
//       id: "captioning",
//       image: require("../../../assets/images/Closed-Caption.jpg"),
//       title: "Captioning",
//       modalContent: "Content for Captioning",
//     },
//     {
//       id: "localSign",
//       image: require("../../../assets/images/signLanguage.jpg"),
//       title: "Local sign language",
//       modalContent: "Content for local sign language",
//     },
//     {
//       id: "internationalSign",
//       image: require("../../../assets/images/International-signLanguage.jpg"),
//       title: "International sign language",
//       modalContent: "Content for International sign language",
//     },
//     {
//       id: "mobilityGuide",
//       image: require("../../../assets/images/Mobility-Guide.jpg"),
//       title: "Mobility guide",
//       modalContent: "Content for mobility guide",
//     },
//     {
//       id: "Tactile",
//       image: require("../../../assets/images/Mobility-Guide.jpg"),
//       title: "Tactile",
//       modalContent: "Content for Tactile",
//     },
//   ];

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         {services.map((service) => (
//           <View key={service.id} style={styles.column}>
//             <View style={styles.card}>
//               {/* <Image source={{ uri: service.image }} style={styles.cardImage} /> */}
//               <Image source={service.image} style={styles.cardImage} />
//               <View style={styles.body}>
//                 <Text style={styles.header}>{service.title}</Text>
//                 <TouchableOpacity onPress={() => openModal(service.id)}>
//                   <Text style={styles.readMoreLink}> Read More </Text>
//                 </TouchableOpacity>
//                 <View style={styles.btnContainer}>
//                   <TouchableOpacity
//                     style={styles.button}
//                     onPress={() => handleRequestService(service.id)}
//                   >
//                     <Text style={styles.buttonText}>Book Service </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <Modal
//                 transparent={true}
//                 animationType="slide"
//                 visible={modalVisible[service.id]}
//                 onRequestClose={() => closeModal(service.id)}
//               >
//                 <View style={styles.modalContainer}>
//                   <View style={styles.modalContent}>
//                     <Text>{service.modalContent}</Text>
//                     <Button
//                       title="Close"
//                       onPress={() => closeModal(service.id)}
//                     />
//                   </View>
//                 </View>
//               </Modal>
//             </View>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  column: {
    flexBasis: "48%",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "white",
    // padding: 8,
    borderRadius: 10,
    marginLeft: 8,
    marginTop: 8,
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    // borderRadius: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    paddingBottom: 10,
    marginTop: -16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 5,
    paddingVertical: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    opacity: 0.6,
    marginVertical: 8,
    // marginRight: 16,
  },
  readMoreLink: {
    color: "#37BEA7",
    marginBottom: 8,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#37BEA7",
    padding: 10,
    borderRadius: 5,
    // margin: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
