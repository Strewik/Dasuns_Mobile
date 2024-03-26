// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   Image,
//     TouchableOpacity,
//     TextInput,
//   View,
//   Text,
//   StatusBar,
// } from "react-native";

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from "react-native/Libraries/NewAppScreen";
// import OverlappingContainers from "../components/OverlappinContainers";

// const ProfileScreen = () => {
//   return (
//     <>
//       <OverlappingContainers />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: "absolute",
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: "400",
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: "700",
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: "600",
//     padding: 4,
//     paddingRight: 12,
//     textAlign: "right",
//   },
// });

// export default ProfileScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  //   // Replace 'your-api-endpoint' with your actual API endpoint
  //   axios.get('your-api-endpoint')
  //     .then(response => {
  //       setUserData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, []);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  // const handleFieldChange = (fieldName, value) => {
  //   // Assuming there's a saveUserField function to update the field on the server
  //   // You should replace it with your actual function to save changes
  //   axios.put('your-api-endpoint', { [fieldName]: value })
  //     .then(response => {
  //       // Update the local state with the updated user data
  //       setUserData(response.data);
  //     })
  //     .catch(error => {
  //       console.error(`Error updating ${fieldName}:`, error);
  //     });
  // };

  // if (!userData) {
  //   // Loading state or placeholder while waiting for data
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  // const isServiceProvider = userData.userType === 'serviceProvider';
  isServiceProvider = true;

  return (
    <ScrollView>
      <View style={styles.banner}></View>
      <View style={styles.container}>
        {/* Profile Picture */}
        <Image
          //           // source={{ uri: userData.profilePicture }}
          style={styles.profilePicture}
          source={require("../../../assets/images/prince.jpg")}
        />

        {/* User Type */}
        <Text style={styles.userType}>
          {/* {userData.userType} */}
          service Provider
        </Text>

        {/* Basic Information */}
        <View style={styles.userInfoContainer}>
          <View style={styles.name}>
            <FieldItem
              // label="Name:"
              // value={userData.name}
              value="Kapere Doe"
              isEditing={isEditing}
              onSave={(value) => handleFieldChange("name", value)}
            />
          </View>

          <FieldItem
            label="Email:"
            // value={userData.email}
            value="kapere@mail.com"
            isEditing={isEditing}
            onSave={(value) => handleFieldChange("email", value)}
          />

          <FieldItem
            label="Date of Birth:"
            // value={userData.dateOfBirth}
            value="20 Jan 1980"
            isEditing={isEditing}
            onSave={(value) => handleFieldChange("dateOfBirth", value)}
          />

          <FieldItem
            label="Telephone Number:"
            // value={userData.telephoneNumber}
            value=" 07309869235"
            isEditing={isEditing}
            onSave={(value) => handleFieldChange("telephoneNumber", value)}
          />

          <FieldItem
            label="Address:"
            // value={userData.address}
            value="20 SS Rd, 31406 Kitala"
            isEditing={isEditing}
            onSave={(value) => handleFieldChange("address", value)}
          />
        </View>

        {/* Service Provider Information (if applicable) */}
        {isServiceProvider && (
          <View style={styles.serviceProviderInfoContainer}>
            <FieldItem
              label="Date Joined:"
              // value={userData.dateJoined}
              value="31 Mar 2019"
              isEditing={isEditing}
              onSave={(value) => handleFieldChange("dateJoined", value)}
            />

            <FieldItem
              label="Service Provider ID:"
              // value={userData.serviceProviderId}
              value="SPID2356"
              isEditing={isEditing}
              onSave={(value) => handleFieldChange("serviceProviderId", value)}
            />

            <FieldItem
              label="Services Provided:"
              // value={userData.servicesProvided}
              value="Captioning"
              isEditing={isEditing}
              onSave={(value) => handleFieldChange("servicesProvided", value)}
            />

            <FieldItem
              label="Overall Rating:"
              // value={userData.overallRating}
              value="4 Stars"
              isEditing={isEditing}
              onSave={(value) => handleFieldChange("overallRating", value)}
            />
            <TouchableOpacity
              style={styles.buttonText}
              onPress={() => navigation.navigate("CompleteSPProfile")}
            >
              <Text>Complete Profile</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Edit button */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Text style={styles.editButtonText}>
            {isEditing ? "Save" : "Edit"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const FieldItem = ({ label, value, isEditing, onSave }) => {
  const [fieldValue, setFieldValue] = useState(value);

  const handleSave = () => {
    onSave(fieldValue);
  };

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      {isEditing ? (
        <TextInput
          style={styles.editableField}
          value={fieldValue}
          onChangeText={setFieldValue}
        />
      ) : (
        <Text style={styles.value}>{fieldValue}</Text>
      )}
      {isEditing && (
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    position: "relative",
    // marginTop: -60,
  },
  banner: {
    height: "25%",
    backgroundColor: "#37BEA7",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: -70,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  userType: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userInfoContainer: {
    width: "100%",
    marginBottom: 20,
  },
  serviceProviderInfoContainer: {
    width: "100%",
  },
  fieldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    // fontWeight: "bold",
    marginRight: 10,
    color: "f0f0f0",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  editableField: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
  },
  saveButton: {
    color: "blue",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#37BEA7",
    padding: 10,
    borderRadius: 5,
    margin: 8,
    width: "40%",
  },
  editButton: {
    backgroundColor: "#37BEA7",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "40%",
    alignItems: "center",
  },
  editButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default UserProfileScreen;
