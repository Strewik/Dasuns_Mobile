import React, { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";


const VerificationCodeScreen = () => {
  const verificationCodeInputs = Array(5).fill("");
  const router = useRouter();
  const refs = verificationCodeInputs.map(() => useRef(null));

  const handleInput = (text, index) => {
    if (text.length === 1 && index < verificationCodeInputs.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code</Text>

      <View style={styles.codeContainer}>
        {verificationCodeInputs.map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleInput(text, index)}
            ref={refs[index]}
          />
        ))}
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={() => router.replace("/(tabs)/home")}>
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
              Submit
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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
    paddingHorizontal: 50,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});




// import React from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { LinearGradient } from "expo-linear-gradient";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Feather from "react-native-vector-icons/Feather";
// import { Ionicons } from "@expo/vector-icons";

// const VerificationCodeScreen = () => {
//   const verificationCodeInputs = Array(5).fill("");
//   const navigation = useNavigation();

//   const isSuccess = false;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter Verification Code</Text>

//       <View style={styles.codeContainer}>
//         {verificationCodeInputs.map((_, index) => (
//           <TextInput
//             key={index}
//             style={styles.codeInput}
//             maxLength={1}
//             keyboardType="numeric"
//           />
//         ))}
//       </View>
//       {/* <View style={styles.error}>
//         {!isSuccess && <Text style={styles.errorText}>The code is incorrect</Text>}
//       </View> */}
//       {/* <TouchableOpacity
//         className="w-full bg-[#37bea7] p-3 rounded-2xl mb-5"
//         onPress={() => {

//           // Check if the form submission was successful
//           // You should replace the condition with the actual logic based on the success response
//           const isSuccess = true; // Replace this with your success condition

//           if (isSuccess) {
//             navigation.push('Profile');
//           } else { }

//         }}
//       >
//         <Text className="text-xl font-bold text-white text-center">Submit</Text>
//       </TouchableOpacity> */}
//       <View style={styles.button}>
//         <TouchableOpacity
//           style={styles.signIn}
//           //   onPress={handleLogin}
//           onPress={() => router.replace("/(tabs)/home")}
//         >
//           <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
//             <Text
//               style={[
//                 styles.textSign,
//                 {
//                   color: "#fff",
//                 },
//               ]}
//             >
//               Submit
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>

//       {/* <TouchableOpacity style={styles.submitButton}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// export default VerificationCodeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   codeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   button: {
//     alignItems: "center",
//     marginTop: 50,
//   },
//   signIn: {
//     width: "100%",
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     paddingHorizontal: 50,
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   codeInput: {
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 8,
//     textAlign: "center",
//     fontSize: 18,
//     margin: 8,
//   },
//   submitButton: {
//     width: "75%",
//     backgroundColor: "#37bea7",
//     paddingVertical: 15,
//     alignItems: "center",
//     borderRadius: 8,
//   },
//   submitButtonText: {
//     color: "white",
//     fontSize: 16,
//   },
//   error: {
//     color: "red",
//     marginTop: 5,
//   },
// });
