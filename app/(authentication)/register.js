import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [joinReason, setJoinReason] = useState("");
  const [telephone, setTelephone] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const handleRegister = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    if (!firstname) {
      errors.firstname = "First name is required";
    }

    if (!lastname) {
      errors.lastname = "Last name is required";
    }

    if (!gender) {
      errors.gender = "Gender is required";
    }

    if (!selectedDate) {
      errors.selectedDate = "Date of birth is required";
    }

    if (!joinReason) {
      errors.joinReason = "Reason for joining is required";
    }

    if (!telephone) {
      errors.telephone = "Telephone number is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // All validations passed, proceed with registration
    router.push("/VerificationCode")
    console.log("Registration Successful");
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(String(email).toLowerCase());
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date.toLocaleDateString());
    hideDatePicker();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#37BEA7" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>First name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="First name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(text) => setFirstname(text)}
            />
          </View>
          {errors.firstname && (
            <Text style={styles.error}>{errors.firstname}</Text>
          )}

          <Text style={styles.text_footer}>Last name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Last name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(text) => setLastname(text)}
            />
          </View>
          {errors.lastname && (
            <Text style={styles.error}>{errors.lastname}</Text>
          )}

          <Text style={styles.text_footer}>Gender</Text>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <Picker
            selectedValue={gender}
            style={styles.textInput}
            onValueChange={(itemValue) => setGender(itemValue)}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
          {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}

          <Text style={styles.text_footer}>Date of Birth</Text>
          <View style={styles.action}>
            <FontAwesome name="calendar" color="#05375a" size={20} />
            <TouchableOpacity onPress={showDatePicker} style={styles.textInput}>
              <Text>{selectedDate || "Select Date"}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          {errors.selectedDate && (
            <Text style={styles.error}>{errors.selectedDate}</Text>
          )}

          <Text style={styles.text_footer}>Reason for Joining</Text>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <Picker
            selectedValue={joinReason}
            style={styles.textInput}
            onValueChange={(itemValue) => setJoinReason(itemValue)}
          >
            <Picker.Item label="Select Reason" value="" />
            <Picker.Item label="To Use Services" value="useServices" />
            <Picker.Item label="To Provide Services" value="provideServices" />
          </Picker>
          {errors.joinReason && (
            <Text style={styles.error}>{errors.joinReason}</Text>
          )}

          <Text style={styles.text_footer}>Telephone number</Text>
          <View style={styles.action}>
            <FontAwesome name="phone" color="#05375a" size={20} />
            <TextInput
              placeholder="Telephone number"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={(text) => setTelephone(text)}
            />
          </View>
          {errors.telephone && (
            <Text style={styles.error}>{errors.telephone}</Text>
          )}

          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope" color="#05375a" size={20} />
            <TextInput
              placeholder="Your email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Text style={styles.text_footer}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={!showPassword}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={togglePasswordVisibility}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              // onPress={handleRegister}
              onPress={() => router.push("VerificationCode")}
            >
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/login")}
              style={[
                styles.signIn,
                {
                  borderColor: "#009387",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#009387",
                  },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Privacy policy
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#37BEA7",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    // flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 100,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    marginTop: 15,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});
