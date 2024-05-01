import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter,  } from "expo-router";

const App = () => {

  const router = useRouter();

  let isServiceProvider = true;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [editMode, setEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    profileUrl: "https://example.com/profile",
    email: "janedoe@mail.com",
    name: "Jane Doe",
    phoneNum: "+1234567890",
    address: "123 Main Street, City, Country",
    dob: "15-05-1995",
    gender: "Female",
    disability: "Deaf",
    password: "****************",
    account: "User-D0005U",
    nin: "CF94052109ZMRK",
    service: "Personal guide",
    natID: "Approved",
    expertEvidence: "Approved",
    workdays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    workHrStart: "07:00am",
    workHrEnd: "10:00pm",
  });

  const handleEdit = (fieldName) => {
    setEditMode(fieldName);
  };

  const handleSave = () => {
    // TODO add logic to save the edited profile data
    // For now, let's log the edited profile data
    console.log("Edited Profile:", editedProfile);
  };
  return (
    <ScrollView style={styles.container}>
      {/* Background */}
      <View style={styles.background}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={{ alignItems: "center", marginBottom: 60 }}>
          <Image
            style={styles.profilePicture}
            source={require("../../../assets/images/prince.jpg")}
          />
          <Text>Name</Text>
          <Text>{editedProfile.name}</Text>
          <Text>Account</Text>
          <Text>{editedProfile.account}</Text>
        </View>
        {/* Your content here */}

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <View style={styles.content}>
            <ScrollView>
              <Text style={styles.text_label}>Email:</Text>
              {editMode === "email" ? (
                <View style={styles.editableField}>
                  <TextInput
                    style={styles.text_input}
                    value={editedProfile.email}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, email: text })
                    }
                  />
                  <TouchableOpacity onPress={() => handleSave()}>
                    <MaterialIcons name="save" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.editableField}>
                  <Text style={styles.text_data}>{editedProfile.email}</Text>
                  <TouchableOpacity onPress={() => handleEdit("email")}>
                    <MaterialIcons name="edit" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.divider}></View>

              <Text style={styles.text_label}>Phone number:</Text>
              {editMode === "phoneNum" ? (
                <View style={styles.editableField}>
                  <TextInput
                    style={styles.text_input}
                    value={editedProfile.phoneNum}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, phoneNum: text })
                    }
                  />
                  <TouchableOpacity onPress={() => handleSave()}>
                    <MaterialIcons name="save" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.editableField}>
                  <Text style={styles.text_data}>{editedProfile.phoneNum}</Text>
                  <TouchableOpacity onPress={() => handleEdit("phoneNum")}>
                    <MaterialIcons name="edit" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.divider}></View>

              <Text style={styles.text_label}>Address:</Text>
              {editMode === "address" ? (
                <View style={styles.editableField}>
                  <TextInput
                    style={styles.text_input}
                    value={editedProfile.address}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, address: text })
                    }
                  />
                  <TouchableOpacity onPress={() => handleSave()}>
                    <MaterialIcons name="save" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.editableField}>
                  <Text style={styles.text_data}>{editedProfile.address}</Text>
                  <TouchableOpacity onPress={() => handleEdit("address")}>
                    <MaterialIcons name="edit" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.divider}></View>

              <Text style={styles.text_label}>Date of birth:</Text>
              {editMode === "dob" ? (
                <View style={styles.editableField}>
                  <TextInput
                    style={styles.text_input}
                    value={editedProfile.dob}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, dob: text })
                    }
                  />
                  <TouchableOpacity onPress={() => handleSave()}>
                    <MaterialIcons name="save" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.editableField}>
                  <Text style={styles.text_data}>{editedProfile.dob}</Text>
                  <TouchableOpacity onPress={() => handleEdit("dob")}>
                    <MaterialIcons name="edit" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.divider}></View>

              <Text style={styles.text_label}>Gender:</Text>
              {editMode === "gender" ? (
                <View style={styles.editableField}>
                  <TextInput
                    style={styles.text_input}
                    value={editedProfile.gender}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, gender: text })
                    }
                  />
                  <TouchableOpacity onPress={() => handleSave()}>
                    <MaterialIcons name="save" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.editableField}>
                  <Text style={styles.text_data}>{editedProfile.gender}</Text>
                  <TouchableOpacity onPress={() => handleEdit("gender")}>
                    <MaterialIcons name="edit" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.divider}></View>

              <Text style={styles.text_label}>Nature of disability:</Text>
              {editMode === "disability" ? (
                <View style={styles.editableField}>
                  <TextInput
                    style={styles.text_input}
                    value={editedProfile.disability}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, disability: text })
                    }
                  />
                  <TouchableOpacity onPress={() => handleSave()}>
                    <MaterialIcons name="save" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.editableField}>
                  <Text style={styles.text_data}>
                    {editedProfile.disability}
                  </Text>
                  <TouchableOpacity onPress={() => handleEdit("disability")}>
                    <MaterialIcons name="edit" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.divider}></View>

              <Text style={styles.text_label}>Phone number:</Text>
              {editMode === "phoneNum" ? (
                <View style={styles.editableField}>
                  <TextInput
                    style={styles.text_input}
                    value={editedProfile.phoneNum}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, phoneNum: text })
                    }
                  />
                  <TouchableOpacity onPress={() => handleSave()}>
                    <MaterialIcons name="save" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.editableField}>
                  <Text style={styles.text_data}>{editedProfile.phoneNum}</Text>
                  <TouchableOpacity onPress={() => handleEdit("phoneNum")}>
                    <MaterialIcons name="edit" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.divider}></View>

              {/* Repeat the same pattern for other fields */}

              {isServiceProvider && (
                <>
                  <TouchableOpacity
                    onPress={toggleCollapse}
                    style={styles.header}
                  >
                    <Text style={styles.title}>KYC</Text>
                    <Text>{isCollapsed ? "+" : "-"}</Text>
                  </TouchableOpacity>
                  <View style={styles.divider}></View>
                  {!isCollapsed && (
                    <View>
                      <Text style={styles.text_label}>NIN:</Text>
                      {editMode === "nin" ? (
                        <View style={styles.editableField}>
                          <TextInput
                            style={styles.text_input}
                            value={editedProfile.nin}
                            onChangeText={(text) =>
                              setEditedProfile({ ...editedProfile, nin: text })
                            }
                          />
                          <TouchableOpacity onPress={() => handleSave()}>
                            <MaterialIcons
                              name="save"
                              size={16}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <View style={styles.editableField}>
                          <Text style={styles.text_data}>
                            {editedProfile.nin}
                          </Text>
                          <TouchableOpacity onPress={() => handleEdit("nin")}>
                            <MaterialIcons
                              name="edit"
                              size={16}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      <View style={styles.divider}></View>

                      <Text style={styles.text_label}>NIN:</Text>
                      {editMode === "nin" ? (
                        <View style={styles.editableField}>
                          <TextInput
                            style={styles.text_input}
                            value={editedProfile.nin}
                            onChangeText={(text) =>
                              setEditedProfile({ ...editedProfile, nin: text })
                            }
                          />
                          <TouchableOpacity onPress={() => handleSave()}>
                            <MaterialIcons
                              name="save"
                              size={16}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <View style={styles.editableField}>
                          <Text style={styles.text_data}>
                            {editedProfile.nin}
                          </Text>
                          <TouchableOpacity onPress={() => handleEdit("nin")}>
                            <MaterialIcons
                              name="edit"
                              size={16}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      <View style={styles.divider}></View>
                    </View>
                  )}
                </>
              )}

              <View>
                <TouchableOpacity onPress={() => router.push("/profile/CompleteSPProfile")}>
                  <Text>Complete SP Profile</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.signout}>
                <Text>Sign Out</Text>
              </View>
            </ScrollView>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#009387",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginTop: -30,
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "black",
    marginTop: 10,
    opacity: 0.4,
  },
  profilePicture: {
    // marginTop: 4000,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
  text_header: {
    color: "#009387",
    fontWeight: "bold",
    fontSize: 20,
  },
  text_data: {
    color: "#05375a",
    fontSize: 18,
  },
  text_label: {
    opacity: 0.6,
    fontSize: 14,
  },
  editableField: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    // backgroundColor: "#f0f0f0",
    alignItems: "center",
    marginTop: 10,
  },
  signout: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   Image,
//   ScrollView,
// } from "react-native";
// import React from "react";
// import * as Animatable from "react-native-animatable";

// const App = () => {
//   return (
//     <View>
//       <View style={styles.container}>
//         <StatusBar backgroundColor="#009387" barStyle="light-content" />
//         <View style={styles.head}>
//           <View style={(alignItems = "center")}>
//             <Image
//               style={styles.profilePicture}
//               source={require("./assets/prince.jpg")}
//             />
//           </View>
//           <Text>Name</Text>
//           <Text>some cool name</Text>
//           <Text>Account holder</Text>
//           <Text>Star rating</Text>
//         </View>
//         <View style={styles.body}>
//           <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//             <ScrollView>
//               <Text style={styles.text_header}>Personal data</Text>
//               <Text style={styles.text_label}>Email:</Text>
//               <Text style={styles.text_data}>john@mail.com</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Phone number:</Text>
//               <Text style={styles.text_data}>0752 123456</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Address:</Text>
//               <Text style={styles.text_data}>Gayaza, Kasangati</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Date of birth:</Text>
//               <Text style={styles.text_data}>14/07/1994</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Gender:</Text>
//               <Text style={styles.text_data}>Male</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Nature of disability:</Text>
//               <Text style={styles.text_data}>Blindness</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Change password</Text>
//               <Text style={styles.text_data}>************</Text>
//               <View style={styles.divider}></View>
//               <View>

//                 <Text>Sign Out</Text>
//               </View>
//             </ScrollView>
//           </Animatable.View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#009387",
//   },
//   head: {
//     backgroundColor: "green",
//     paddingBottom: 40,
//     alignContent: "center",
//   },
//   body: {
//     backgroundColor: "gold",
//     // backgroundColor: "#fff",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 30,
//     paddingVertical: 30,
//     marginTop: -30,
//   },
//   profilePicture: {
//     // marginTop: 4000,
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//     marginTop: 20,
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "fff",
//   },
//   divider: {
//     width: "90%",
//     height: 1,
//     backgroundColor: "black",
//     marginTop: 10,
//     opacity: 0.4,
//   },
// });

// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow strict-local
// //  */

// // import React from "react";
// // import {
// //   SafeAreaView,
// //   StyleSheet,
// //   ScrollView,
// //   Image,
// //     TouchableOpacity,
// //     TextInput,
// //   View,
// //   Text,
// //   StatusBar,
// // } from "react-native";

// // import {
// //   Header,
// //   LearnMoreLinks,
// //   Colors,
// //   DebugInstructions,
// //   ReloadInstructions,
// // } from "react-native/Libraries/NewAppScreen";
// // import OverlappingContainers from "../components/OverlappinContainers";

// // const ProfileScreen = () => {
// //   return (
// //     <>
// //       <OverlappingContainers />
// //     </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   scrollView: {
// //     backgroundColor: Colors.lighter,
// //   },
// //   engine: {
// //     position: "absolute",
// //     right: 0,
// //   },
// //   body: {
// //     backgroundColor: Colors.white,
// //   },
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: "600",
// //     color: Colors.black,
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: "400",
// //     color: Colors.dark,
// //   },
// //   highlight: {
// //     fontWeight: "700",
// //   },
// //   footer: {
// //     color: Colors.dark,
// //     fontSize: 12,
// //     fontWeight: "600",
// //     padding: 4,
// //     paddingRight: 12,
// //     textAlign: "right",
// //   },
// // });

// // export default ProfileScreen;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import axios from "axios";
// import { useNavigation } from "@react-navigation/native";

// const UserProfileScreen = () => {
//   const navigation = useNavigation();
//   const [userData, setUserData] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // useEffect(() => {
//   //   // Replace 'your-api-endpoint' with your actual API endpoint
//   //   axios.get('your-api-endpoint')
//   //     .then(response => {
//   //       setUserData(response.data);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching user data:', error);
//   //     });
//   // }, []);

//   const handleEditPress = () => {
//     setIsEditing(!isEditing);
//   };

//   // const handleFieldChange = (fieldName, value) => {
//   //   // Assuming there's a saveUserField function to update the field on the server
//   //   // You should replace it with your actual function to save changes
//   //   axios.put('your-api-endpoint', { [fieldName]: value })
//   //     .then(response => {
//   //       // Update the local state with the updated user data
//   //       setUserData(response.data);
//   //     })
//   //     .catch(error => {
//   //       console.error(`Error updating ${fieldName}:`, error);
//   //     });
//   // };

//   // if (!userData) {
//   //   // Loading state or placeholder while waiting for data
//   //   return (
//   //     <View style={styles.loadingContainer}>
//   //       <Text>Loading...</Text>
//   //     </View>
//   //   );
//   // }

//   // const isServiceProvider = userData.userType === 'serviceProvider';
//   isServiceProvider = true;

//   return (
//     <ScrollView>
//       <View style={styles.banner}></View>
//       <View style={styles.container}>
//         {/* Profile Picture */}
//         <Image
//           //           // source={{ uri: userData.profilePicture }}
//           style={styles.profilePicture}
//           source={require("../../../assets/images/prince.jpg")}
//         />

//         {/* User Type */}
//         <Text style={styles.userType}>
//           {/* {userData.userType} */}
//           service Provider
//         </Text>

//         {/* Basic Information */}
//         <View style={styles.userInfoContainer}>
//           <View style={styles.name}>
//             <FieldItem
//               // label="Name:"
//               // value={userData.name}
//               value="Kapere Doe"
//               isEditing={isEditing}
//               onSave={(value) => handleFieldChange("name", value)}
//             />
//           </View>

//           <FieldItem
//             label="Email:"
//             // value={userData.email}
//             value="kapere@mail.com"
//             isEditing={isEditing}
//             onSave={(value) => handleFieldChange("email", value)}
//           />

//           <FieldItem
//             label="Date of Birth:"
//             // value={userData.dateOfBirth}
//             value="20 Jan 1980"
//             isEditing={isEditing}
//             onSave={(value) => handleFieldChange("dateOfBirth", value)}
//           />

//           <FieldItem
//             label="Telephone Number:"
//             // value={userData.telephoneNumber}
//             value=" 07309869235"
//             isEditing={isEditing}
//             onSave={(value) => handleFieldChange("telephoneNumber", value)}
//           />

//           <FieldItem
//             label="Address:"
//             // value={userData.address}
//             value="20 SS Rd, 31406 Kitala"
//             isEditing={isEditing}
//             onSave={(value) => handleFieldChange("address", value)}
//           />
//         </View>

//         {/* Service Provider Information (if applicable) */}
//         {isServiceProvider && (
//           <View style={styles.serviceProviderInfoContainer}>
//             <FieldItem
//               label="Date Joined:"
//               // value={userData.dateJoined}
//               value="31 Mar 2019"
//               isEditing={isEditing}
//               onSave={(value) => handleFieldChange("dateJoined", value)}
//             />

//             <FieldItem
//               label="Service Provider ID:"
//               // value={userData.serviceProviderId}
//               value="SPID2356"
//               isEditing={isEditing}
//               onSave={(value) => handleFieldChange("serviceProviderId", value)}
//             />

//             <FieldItem
//               label="Services Provided:"
//               // value={userData.servicesProvided}
//               value="Captioning"
//               isEditing={isEditing}
//               onSave={(value) => handleFieldChange("servicesProvided", value)}
//             />

//             <FieldItem
//               label="Overall Rating:"
//               // value={userData.overallRating}
//               value="4 Stars"
//               isEditing={isEditing}
//               onSave={(value) => handleFieldChange("overallRating", value)}
//             />
//             <TouchableOpacity
//               style={styles.buttonText}
//               onPress={() => navigation.navigate("CompleteSPProfile")}
//             >
//               <Text>Complete Profile</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Edit button */}
//         <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
//           <Text style={styles.editButtonText}>
//             {isEditing ? "Save" : "Edit"}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const FieldItem = ({ label, value, isEditing, onSave }) => {
//   const [fieldValue, setFieldValue] = useState(value);

//   const handleSave = () => {
//     onSave(fieldValue);
//   };

//   return (
//     <View style={styles.fieldContainer}>
//       <Text style={styles.label}>{label}</Text>
//       {isEditing ? (
//         <TextInput
//           style={styles.editableField}
//           value={fieldValue}
//           onChangeText={setFieldValue}
//         />
//       ) : (
//         <Text style={styles.value}>{fieldValue}</Text>
//       )}
//       {isEditing && (
//         <TouchableOpacity onPress={handleSave}>
//           <Text style={styles.saveButton}>Save</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 20,
//     position: "relative",
//     // marginTop: -60,
//   },
//   banner: {
//     height: "25%",
//     backgroundColor: "#37BEA7",
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   profilePicture: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//     marginTop: -70,
//   },
//   name: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 20,
//     alignSelf: "center",
//   },
//   userType: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   userInfoContainer: {
//     width: "100%",
//     marginBottom: 20,
//   },
//   serviceProviderInfoContainer: {
//     width: "100%",
//   },
//   fieldContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     // fontWeight: "bold",
//     marginRight: 10,
//     color: "f0f0f0",
//   },
//   value: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   editableField: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 5,
//   },
//   saveButton: {
//     color: "blue",
//     fontWeight: "bold",
//   },
//   button: {
//     backgroundColor: "#37BEA7",
//     padding: 10,
//     borderRadius: 5,
//     margin: 8,
//     width: "40%",
//   },
//   editButton: {
//     backgroundColor: "#37BEA7",
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//     width: "40%",
//     alignItems: "center",
//   },
//   editButtonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });

// export default UserProfileScreen;
