import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";

const Register = () => {
  const [step, setStep] = useState(1);

  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const handleNextStep = () => {
    if (step === 1) {
      if (!location || !selectedDate || !selectedTime) {
        Alert.alert("Error", "All fields are required");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    Alert.alert("Success", "Your request has been submitted");
    // Handle form submission
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    setSelectedTime(time.toLocaleTimeString());
    hideTimePicker();
  };

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setLocation({
        location: val,
        check_textInputChange: true,
      });
    } else {
      setLocation({
        location: val,
        check_textInputChange: false,
      });
    }
  };

  const [selectedServiceProvider, setSelectedServiceProvider] = useState(null);

  const handleServiceProviderChange = (value) => {
    setSelectedServiceProvider(value);
  };

  // Sample object array of service providers
  const serviceProviders = [
    {
      fullName: "John Doe",
      services: ["Captioning", "Local Sign", "Guide", "Tactile"],
      location: "New York",
    },
    {
      fullName: "Jane Smith",
      services: ["Captioning", "Guide"],
      location: "Los Angeles",
    },
    // Add more service providers as needed
  ];

  return (
    <View>
      <View style={styles.container}>
        {step === 1 && (
          <View>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
              <Text style={styles.text_header}>Register Now now!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
              <ScrollView>
                <Text style={styles.text_footer}>Location</Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Location"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                  />
                  {location.check_textInputChange ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
                </View>
                <Text style={styles.text_footer}>Date: </Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color="#05375a" size={20} />
                  <View>
                    <TouchableOpacity
                      onPress={showDatePicker}
                      style={styles.textInput}
                    >
                      <Text>{selectedDate || "Select Date"}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleDateConfirm}
                      onCancel={hideDatePicker}
                    />
                  </View>
                  {location.check_textInputChange ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
                </View>
                <Text style={styles.text_footer}>Time: </Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color="#05375a" size={20} />
                  <View>
                    <TouchableOpacity
                      onPress={showTimePicker}
                      style={styles.textInput}
                    >
                      <Text>{selectedTime || "Select Time"}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                      isVisible={isTimePickerVisible}
                      mode="time"
                      onConfirm={handleTimeConfirm}
                      onCancel={hideTimePicker}
                    />
                  </View>
                  {location.check_textInputChange ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
                </View>
                <View style={styles.button}>
                  <TouchableOpacity
                    style={styles.signIn}
                    onPress={handleNextStep}
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
                        Next
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
                      Back
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </Animatable.View>
          </View>
        )}
        {step === 2 && (
          <View>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
              <Text style={styles.text_header}>Register Now now!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
              <ScrollView>
                <View>
                  <Text>Select a Service Provider:</Text>
                  <Picker
                    selectedValue={selectedServiceProvider}
                    onValueChange={handleServiceProviderChange}
                  >
                    <Picker.Item
                      label="Select a Service Provider"
                      value={null}
                    />
                    {serviceProviders.map((provider, index) => (
                      <Picker.Item
                        key={index}
                        label={`${provider.fullName} - ${provider.location}`}
                        value={provider}
                      />
                    ))}
                  </Picker>
                  {selectedServiceProvider && (
                    <View style={{ marginTop: 20 }}>
                      <Text>Selected Service Provider:</Text>
                      <Text>Name: {selectedServiceProvider.fullName}</Text>
                      <Text>Location: {selectedServiceProvider.location}</Text>
                      <Text>
                        Services Offered:{" "}
                        {selectedServiceProvider.services.join(", ")}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={styles.button}>
                  <TouchableOpacity
                    style={styles.signIn}
                    onPress={handleSubmit}
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
                        Confirm
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
                      Back
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </Animatable.View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#009387",
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
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
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
});

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   Alert,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";

// // import DateTimePicker from '@react-native-community/datetimepicker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const RequestSeviceScreen = ({ navigation, route }) => {
//   const [step, setStep] = useState(1);

//   const [location, setLocation] = useState("");
//   const [service, setService] = useState("");

//   const handleNextStep = () => {
//     if (step === 1) {
//       if (!location || !selectedDate || !selectedTime) {
//         Alert.alert("Error", "All fields are required");
//         return;
//       }
//     }
//     setStep(step + 1);
//   };

//   const handleSubmit = () => {
//     Alert.alert("Success", "Your request has been submitted");
//     // Handle form submission
//   };

//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleDateConfirm = (date) => {
//     setSelectedDate(date.toLocaleDateString());
//     hideDatePicker();
//   };

//   const showTimePicker = () => {
//     setTimePickerVisibility(true);
//   };

//   const hideTimePicker = () => {
//     setTimePickerVisibility(false);
//   };

//   const handleTimeConfirm = (time) => {
//     setSelectedTime(time.toLocaleTimeString());
//     hideTimePicker();
//   };

//   const [selectedServiceProvider, setSelectedServiceProvider] = useState(null);

//   const handleServiceProviderChange = (value) => {
//     setSelectedServiceProvider(value);
//   };

//   // Sample object array of service providers
//   const serviceProviders = [
//     {
//       fullName: "John Doe",
//       services: ["Captioning", "Local Sign", "Guide", "Tactile"],
//       location: "New York",
//     },
//     {
//       fullName: "Jane Smith",
//       services: ["Captioning", "Guide"],
//       location: "Los Angeles",
//     },
//     // Add more service providers as needed
//   ];

//   return (
//     <View style={styles.container}>
//       {step === 1 && (
//         <View style={styles.formContainer}>
//           <Text style={styles.stepText}>Step 1</Text>
//           <TextInput
//             style={styles.input}
//             value={location}
//             onChangeText={setLocation}
//             placeholder="Enter Location"
//           />
//           <View>
//             <TouchableOpacity onPress={showDatePicker} style={styles.input}>
//               <Text>{selectedDate || "Select Date"}</Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={isDatePickerVisible}
//               mode="date"
//               onConfirm={handleDateConfirm}
//               onCancel={hideDatePicker}
//             />
//             <TouchableOpacity onPress={showTimePicker} style={styles.input}>
//               <Text>{selectedTime || "Select Time"}</Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={isTimePickerVisible}
//               mode="time"
//               onConfirm={handleTimeConfirm}
//               onCancel={hideTimePicker}
//             />
//           </View>
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => navigation.goBack()}
//             >
//               <Text style={styles.buttonText}>Back</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={handleNextStep}>
//               <Text style={styles.buttonText}>Next</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//       {step === 2 && (
//         <View style={styles.formContainer}>
//           <Text style={styles.stepText}>Step 2</Text>
//           <View>
//             <Text>Select a Service Provider:</Text>
//             <Picker
//               selectedValue={selectedServiceProvider}
//               onValueChange={handleServiceProviderChange}
//             >
//               <Picker.Item label="Select a Service Provider" value={null} />
//               {serviceProviders.map((provider, index) => (
//                 <Picker.Item
//                   key={index}
//                   label={`${provider.fullName} - ${provider.location}`}
//                   value={provider}
//                 />
//               ))}
//             </Picker>
//             {selectedServiceProvider && (
//               <View style={{ marginTop: 20 }}>
//                 <Text>Selected Service Provider:</Text>
//                 <Text>Name: {selectedServiceProvider.fullName}</Text>
//                 <Text>Location: {selectedServiceProvider.location}</Text>
//                 <Text>
//                   Services Offered:{" "}
//                   {selectedServiceProvider.services.join(", ")}
//                 </Text>
//               </View>
//             )}
//           </View>

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => setStep(step - 1)}
//             >
//               <Text style={styles.buttonText}>Back</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//               <Text style={styles.buttonText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };
// export default RequestSeviceScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   formContainer: {
//     width: "80%",
//   },
//   stepText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   picker: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: "blue",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     width: "45%",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });

// // import React, { useState } from 'react';
// // import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
// // import { Formik } from 'formik';
// // import * as yup from 'yup';
// // import DateTimePicker from '@react-native-community/datetimepicker';
// // import { Picker } from '@react-native-picker/picker';

// // const RequestServiceScreen = ({ navigation, route }) => {

// //   const [step, setStep] = useState(1);
// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const [selectedTime, setSelectedTime] = useState(new Date());
// //   const [showDatePicker, setShowDatePicker] = useState(false);
// //   const [showTimePicker, setShowTimePicker] = useState(false);

// //   const validationSchema = yup.object().shape({
// //     location: yup.string().required('Location is required'),
// //     date: yup.date().required('Date is required'),
// //     time: yup.date().required('Time is required'),
// //     serviceProvider: yup.string().required('Service Provider is required'),
// //   });

// //   const initialValues = {
// //     service: route.params.service || '',
// //     location: '',
// //     date: '',
// //     time: '',
// //     serviceProvider: '',
// //   };

// //   const renderDatePicker = () => {
// //     if (showDatePicker) {
// //       return (
// //         <DateTimePicker
// //           value={selectedDate}
// //           mode={'date'}
// //           display="default"
// //           onChange={handleDateChange}
// //         />
// //       );
// //     } else if (showTimePicker) {
// //       return (
// //         <DateTimePicker
// //           value={selectedTime}
// //           mode={'time'}
// //           display="default"
// //           onChange={handleTimeChange}
// //         />
// //       );
// //     } else {
// //       return null;
// //     }
// //   };

// //   // const handleNextStep = () => {
// //   //   setStep(step + 1);
// //   // };

// //   const handleDateChange = (event, selectedDate) => {
// //     const currentDate = selectedDate || new Date();
// //     setShowDatePicker(Platform.OS === 'ios');
// //     setSelectedDate(currentDate);
// //   };

// //   const handleTimeChange = (event, selectedTime) => {
// //     const currentTime = selectedTime || new Date();
// //     setShowTimePicker(Platform.OS === 'ios');
// //     setSelectedTime(currentTime);
// //   };

// //   const handleNextStep = (values) => {
// //     if (!values.location) {
// //       Alert.alert('Error', 'Location is required');
// //       return;
// //     }
// //     setStep(step + 1);
// //   };

// //   // In the Formik component for step 1
// //   <Formik
// //     initialValues={initialValues}
// //     validationSchema={validationSchema}
// //     onSubmit={handleNextStep} // pass the form values to handleNextStep
// //   >
// //     {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
// //       // ...rest of the code
// //       <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
// //         <Text style={styles.buttonText}>Next</Text>
// //       </TouchableOpacity>
// //     )}
// //   </Formik>

// //   const handleSubmit = (values) => {
// //     console.log(values);
// //     Alert.alert('Success', 'Your request has been submitted');
// //     // Handle form submission here
// //   };

// //   const serviceProviders = [
// //     { label: 'Provider 1', value: 'provider1' },
// //     { label: 'Provider 2', value: 'provider2' },
// //     { label: 'Provider 3', value: 'provider3' },
// //     // Add more service providers as needed
// //   ];

// //   return (
// //     <View style={styles.container}>
// //       {step === 1 && (
// //         <Formik
// //           initialValues={initialValues}
// //           validationSchema={validationSchema}
// //           onSubmit={(values) => {
// //             handleNextStep(values);
// //           }}
// //         >
// //           {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
// //             <View style={styles.formContainer}>
// //               <Text style={styles.stepText}>Step 1</Text>
// //               <TextInput
// //                 onChangeText={handleChange('service')}
// //                 onBlur={handleBlur('service')}
// //                 value={values.service}
// //                 placeholder="Service"
// //                 editable={false}
// //               />
// //               <TextInput
// //                 style={styles.input}
// //                 onChangeText={handleChange('location')}
// //                 onBlur={handleBlur('location')}
// //                 value={values.location}
// //                 placeholder="Enter Location"
// //               />
// //               {touched.location && errors.location && <Text style={styles.error}>{errors.location}</Text>}
// //               {touched.location && errors.location && <Text style={styles.error}>{errors.location}</Text>}
// //               {/* <Text style={styles.errorMessage}>{formikProps.errors.location}</Text> */}
// //               <TouchableOpacity onPress={() => setShowDatePicker(true)}>
// //                 <Text>Select Date</Text>
// //               </TouchableOpacity>
// //               {selectedDate && <Text>Date: {selectedDate.toDateString()}</Text>}
// //               <TouchableOpacity onPress={() => setShowTimePicker(true)}>
// //                 <Text>Select Time</Text>
// //               </TouchableOpacity>
// //               {selectedTime && <Text>Time: {selectedTime.toLocaleTimeString()}</Text>}
// //               {renderDatePicker()}
// //               <View style={styles.buttonContainer}>
// //                 <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
// //                   <Text style={styles.buttonText}>Back</Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={styles.button} onPress={() => handleNextStep(values)}>
// //                   <Text style={styles.buttonText}>Next</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             </View>
// //           )}
// //         </Formik>
// //       )}

// //       {step === 2 && (
// //         <Formik
// //           initialValues={initialValues}
// //           validationSchema={validationSchema}
// //           onSubmit={handleSubmit}
// //         >
// //           {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
// //             <View style={styles.formContainer}>
// //               <Text style={styles.stepText}>Step 2</Text>
// //               <Picker
// //                 style={styles.picker}
// //                 selectedValue={values.serviceProvider}
// //                 onValueChange={(itemValue) => handleChange('serviceProvider')(itemValue)}
// //               >
// //                 <Picker.Item label="Select Service Provider" value="" />
// //                 {serviceProviders.map((provider) => (
// //                   <Picker.Item key={provider.value} label={provider.label} value={provider.value} />
// //                 ))}
// //               </Picker>

// //               <View style={styles.buttonContainer}>
// //                 <TouchableOpacity style={styles.button} onPress={() => setStep(step - 1)}>
// //                   <Text style={styles.buttonText}>Back</Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
// //                   <Text style={styles.buttonText}>Submit</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             </View>
// //           )}
// //         </Formik>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   formContainer: {
// //     paddingHorizontal: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   stepText: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   serviceText: {
// //     marginBottom: 20,
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     borderRadius: 5,
// //     marginBottom: 20,
// //     paddingHorizontal: 10,
// //     width: '100%',
// //   },
// //   datePickerButton: {
// //     backgroundColor: '#37BEA7',
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 5,
// //     marginBottom: 20,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     width: '100%',
// //   },
// //   button: {
// //     backgroundColor: '#37BEA7',
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 5,
// //     alignItems: 'center',
// //     width: '48%',
// //   },
// //   error: {
// //     color: 'red',
// //     marginBottom: 10,
// //   },
// //   picker: {
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     borderRadius: 5,
// //     marginBottom: 20,
// //     width: '100%',
// //   },
// // });

// // export default RequestServiceScreen;
