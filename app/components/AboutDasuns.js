import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";


const AboutDasuns = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/(screens)/blogList")}>
      <View style={styles.card}>
        <View>
          <Image
            source={require("../../assets/images/helper.jpg")}
            style={styles.image}
          />
        </View>

        <View style={styles.greenCotainer}>
          <Text style={styles.text}>Learn more about Dasuns</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 4,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    // fontWeight: 'bold',
    // opacity: 0.6,

    backgroundColor: "#37bea7",
    padding: 8,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  greenCotainer: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#37bea7",
    padding: 8,
  },
});

export default AboutDasuns;
