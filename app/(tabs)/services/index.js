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

  const [modalVisible, setModalVisible] = useState({});

  const openModal = (id) => {
    setModalVisible({ ...modalVisible, [id]: true });
  };
  const closeModal = (id) => {
    setModalVisible({ ...modalVisible, [id]: false });
  };

  const services = [
    {
      id: "personalAssistance",
      image: "https://source.unsplash.com/random/300x150",
      title: "Personal Assistance",
      modalContent: "Content for Personal Assistance",
    },
    {
      id: "captioning",
      image: "https://source.unsplash.com/random/301x150",
      title: "Captioning",
      modalContent: "Content for Captioning",
    },
    {
      id: "localSign",
      image: "https://source.unsplash.com/random/302x150",
      title: "Local sign language",
      modalContent: "Content for local sign language",
    },
    {
      id: "internationalSign",
      image: "https://source.unsplash.com/random/303x150",
      title: "International sign language",
      modalContent: "Content for International sign language",
    },
    {
      id: "mobilityGuide",
      image: "https://source.unsplash.com/random/304x150",
      title: "Mobility guide",
      modalContent: "Content for mobility guide",
    },
    {
      id: "Tactile",
      image: "https://source.unsplash.com/random/305x150",
      title: "Tactile",
      modalContent: "Content for Tactile",
    },
  ];

  return (
    <ScrollView>
      <Text>ServicesScreen</Text>
      <View style={styles.container}>
        {services.map((service) => (
          <View key={service.id} style={styles.column}>
            <View style={styles.card}>
              <Image source={{ uri: service.image }} style={styles.cardImage} />
              <View style={styles.body}>
                <Text style={styles.header}>{service.title}</Text>
                <TouchableOpacity onPress={() => openModal(service.id)}>
                  <Text style={styles.readMoreLink}> Read More </Text>
                </TouchableOpacity>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleRequestService(service.id)}
                  >
                    <Text style={styles.buttonText}>Request Service </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible[service.id]}
                onRequestClose={() => closeModal(service.id)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text>{service.modalContent}</Text>
                    <Button
                      title="Close"
                      onPress={() => closeModal(service.id)}
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
    borderRadius: 20,
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
    height: 120,
    resizeMode: "cover",
    // borderRadius: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    paddingHorizontal: 8,
    marginTop: -16,
    backgroundColor: "#fff",
    borderRadius: 20,
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
