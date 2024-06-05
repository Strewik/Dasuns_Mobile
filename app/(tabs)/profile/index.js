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
import { useRouter } from "expo-router";
import StarRating from "../../components/StarRating";

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
    account: "Provider-D0005U",
    nin: "CF94052109ZMRK",
    service: "Personal guide",
    natID: "Approved",
    expertEvidence: "Approved",
    workdays: ["Mon, ", "Tue, ", "Wed, ", "Thu, ", "Fri, "],
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

  const rating = 4.25; // Example rating

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
          <View style={styles.head}>
            {/* <Text>Name: </Text> */}
            <Text style={styles.name}>{editedProfile.name}</Text>
          </View>
          <View style={styles.starContainer}>
            {/* <Text style={styles.title}>Rating:</Text> */}
            <StarRating rating={rating} maxStars={5} />
            <Text style={styles.account}>{rating}</Text>
          </View>
          <View style={styles.head}>
            <Text style={styles.account}>Account: </Text>
            <Text style={styles.account}>{editedProfile.account}</Text>
          </View>
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

                      <Text style={styles.text_label}>Service:</Text>
                      {editMode === "service" ? (
                        <View style={styles.editableField}>
                          <TextInput
                            style={styles.text_input}
                            value={editedProfile.service}
                            onChangeText={(text) =>
                              setEditedProfile({
                                ...editedProfile,
                                service: text,
                              })
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
                            {editedProfile.service}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleEdit("service")}
                          >
                            <MaterialIcons
                              name="edit"
                              size={16}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      <View style={styles.divider}></View>
                      <Text style={styles.text_label}>Identity:</Text>
                      {editMode === "natID" ? (
                        <View style={styles.editableField}>
                          <TextInput
                            style={styles.text_input}
                            value={editedProfile.natID}
                            onChangeText={(text) =>
                              setEditedProfile({
                                ...editedProfile,
                                natID: text,
                              })
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
                            {editedProfile.natID}
                          </Text>
                          <TouchableOpacity onPress={() => handleEdit("natID")}>
                            <MaterialIcons
                              name="edit"
                              size={16}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      <View style={styles.divider}></View>
                      <Text style={styles.text_label}>
                        Evidence of expertise:
                      </Text>
                      {editMode === "expertEvidence" ? (
                        <View style={styles.editableField}>
                          <TextInput
                            style={styles.text_input}
                            value={editedProfile.expertEvidence}
                            onChangeText={(text) =>
                              setEditedProfile({
                                ...editedProfile,
                                expertEvidence: text,
                              })
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
                            {editedProfile.expertEvidence}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleEdit("expertEvidence")}
                          >
                            <MaterialIcons
                              name="edit"
                              size={16}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      <View style={styles.divider}></View>
                      <Text style={styles.text_label}>Working days:</Text>
                      {editMode === "workdays" ? (
                        <View style={styles.editableField}>
                          <TextInput
                            style={styles.text_input}
                            value={editedProfile.workdays}
                            onChangeText={(text) =>
                              setEditedProfile({
                                ...editedProfile,
                                workdays: text,
                              })
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
                            {editedProfile.workdays}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleEdit("workdays")}
                          >
                            <MaterialIcons
                              name="edit"
                              size={16}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      <View style={styles.divider}></View>

                      <Text style={styles.text_label}>Working hours from:</Text>
                      {editMode === "workHrStart" ? (
                        <View style={styles.editableField}>
                          <TextInput
                            style={styles.text_input}
                            value={editedProfile.workHrStart}
                            onChangeText={(text) =>
                              setEditedProfile({
                                ...editedProfile,
                                workHrStart: text,
                              })
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
                            {editedProfile.workHrStart}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleEdit("workHrStart")}
                          >
                            <MaterialIcons
                              name="edit"
                              size={16}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                      <View style={styles.divider}></View>

                      <Text style={styles.text_label}>Working hours to:</Text>
                      {editMode === "workHrEnd" ? (
                        <View style={styles.editableField}>
                          <TextInput
                            style={styles.text_input}
                            value={editedProfile.workHrEnd}
                            onChangeText={(text) =>
                              setEditedProfile({
                                ...editedProfile,
                                workHrEnd: text,
                              })
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
                            {editedProfile.workHrEnd}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleEdit("workHrEnd")}
                          >
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
                <TouchableOpacity
                  onPress={() => router.push("/profile/CompleteSPProfile")}
                >
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
  head: {
    flexDirection: "row",
    color: "#fff",
    fontSize: 14,
    // color: '#fff',
    // // opacity: 0.6,
    // justifyContent: 'center',
    // alignItems: 'center',
    // fontWeight:"bold",
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
  name: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  account: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
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
  starContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
