import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Animated, Easing } from 'react-native';
import { List, Divider, Snackbar } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

const HomeScreen = () => {

  const [nationalId, setNationalId] = useState('');
  const [cv, setCv] = useState(null);
  const [cvName, setCvName] = useState('');
  const [certificates, setCertificates] = useState(null);
  const [certificatesName, setCertificatesName] = useState('');
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [passportPhotoName, setPassportPhotoName] = useState('');
  const [recommendationLetter, setRecommendationLetter] = useState(null);
  const [recommendationLetterName, setRecommendationLetterName] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [showNationalIdTick, setShowNationalIdTick] = useState(false);
  const [showCvTick, setShowCvTick] = useState(false);
  const [showCertificatesTick, setShowCertificatesTick] = useState(false);
  const [showPassportPhotoTick, setShowPassportPhotoTick] = useState(false);
  const [showRecommendationLetterTick, setShowRecommendationLetterTick] = useState(false);
  const tickAnimationValue = new Animated.Value(0);

  useEffect(() => {
    if (cv || certificates || passportPhoto || recommendationLetter) {
      startTickAnimation();
    }
  }, [cv, certificates, passportPhoto, recommendationLetter]);

  const startTickAnimation = () => {
    Animated.timing(tickAnimationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const handleNationalIdChange = (text) => setNationalId(text);

  const handleFileUpload = async (setter, setterName, options, setShowTick) => {
    try {
      const result = await DocumentPicker.getDocumentAsync(options);
      if (result.type === 'success') {
        setter(result);
        setterName(result.name);
        setShowTick(true);
      }
    } catch (error) {
      console.error('Error selecting file:', error);
    }
  };

  const handleImageUpload = async (setter, setterName, setShowTick) => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.cancelled) {
        setter(result);
        setterName(result.uri.substring(result.uri.lastIndexOf('/') + 1));
        setShowTick(true);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  const handleSubmit = () => {
    if (!nationalId || !cv || !certificates || !passportPhoto || !recommendationLetter) {
      setSnackbarVisible(true);
      return;
    }

    // Handle form submission
    // You can submit the form data to your backend here
  };

  const renderTick = () => {
    const opacity = tickAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return (
      <Animated.View style={{ opacity }}>
        <Text style={{ color: 'green', fontSize: 18 }}>✓</Text>
      </Animated.View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Enter National ID Number"
        value={nationalId}
        onChangeText={handleNationalIdChange}
        right={() => showNationalIdTick && renderTick()}
      />
      <List.Section>
        <List.Subheader>Upload Documents</List.Subheader>
        <List.Item
          title={`Upload CV ${cvName ? `- ${cvName}` : ''}`}
          onPress={() => handleFileUpload(setCv, setCvName, { type: 'application/pdf' }, setShowCvTick)}
          right={() => showCvTick && renderTick()}
        />
        <Divider />
        <List.Item
          title={`Upload Certificates ${certificatesName ? `- ${certificatesName}` : ''}`}
          onPress={() => handleFileUpload(setCertificates, setCertificatesName, { type: 'application/pdf' }, setShowCertificatesTick)}
          right={() => showCertificatesTick && renderTick()}
        />
        <Divider />
        <List.Item
          title={`Upload Passport Photo ${passportPhotoName ? `- ${passportPhotoName}` : ''}`}
          onPress={() => handleImageUpload(setPassportPhoto, setPassportPhotoName, setShowPassportPhotoTick)}
          right={() => showPassportPhotoTick && renderTick()}
        />
        <Divider />
        <List.Item
          title={`Upload Recommendation Letter ${recommendationLetterName ? `- ${recommendationLetterName}` : ''}`}
          onPress={() => handleFileUpload(setRecommendationLetter, setRecommendationLetterName, { type: 'application/pdf' }, setShowRecommendationLetterTick)}
          right={() => showRecommendationLetterTick && renderTick()}
        />
      </List.Section>
      <Button title="Submit" onPress={handleSubmit} />
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        Please fill all required fields and upload correct file types.
      </Snackbar>
    </View>
  );
};

export default HomeScreen;





// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Animated, Easing } from 'react-native';
// import { List, Divider, Snackbar } from 'react-native-paper';
// import * as DocumentPicker from 'expo-document-picker';
// import * as ImagePicker from 'expo-image-picker';

// const HomeScreen = () => {



//   const [nationalId, setNationalId] = useState('');
//   const [cv, setCv] = useState(null);
//   const [certificates, setCertificates] = useState(null);
//   const [passportPhoto, setPassportPhoto] = useState(null);
//   const [recommendationLetter, setRecommendationLetter] = useState(null);
//   const [snackbarVisible, setSnackbarVisible] = useState(false);
//   const [showNationalIdTick, setShowNationalIdTick] = useState(false);
//   const [showCvTick, setShowCvTick] = useState(false);
//   const [showCertificatesTick, setShowCertificatesTick] = useState(false);
//   const [showPassportPhotoTick, setShowPassportPhotoTick] = useState(false);
//   const [showRecommendationLetterTick, setShowRecommendationLetterTick] = useState(false);
//   const tickAnimationValue = new Animated.Value(0);

//   useEffect(() => {
//     if (cv || certificates || passportPhoto || recommendationLetter) {
//       startTickAnimation();
//     }
//   }, [cv, certificates, passportPhoto, recommendationLetter]);

//   useEffect(() => {
//     console.log('showCvTick:', showCvTick);
//   }, [showCvTick]);
  
//   useEffect(() => {
//     console.log('showNationalIdTick:', showCvTick);
//   }, [showCvTick]);
  
//   useEffect(() => {
//     console.log('showCertificatesTick:', showCertificatesTick);
//   }, [showCertificatesTick]);
//   useEffect(() => {
//     console.log('showPassportPhotoTick:', showPassportPhotoTick);
//   }, [showPassportPhotoTick]);
//   useEffect(() => {
//     console.log('showRecommendationLetterTick:', showRecommendationLetterTick);
//   }, [showRecommendationLetterTick]);
  
//   // Add similar useEffect for other tick states

//   const startTickAnimation = () => {
//     Animated.timing(tickAnimationValue, {
//       toValue: 1,
//       duration: 1000,
//       easing: Easing.ease,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handleNationalIdChange = (text) => setNationalId(text);

//   const handleFileUpload = async (setter, options, setShowTick) => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync(options);
//       if (result.type === 'success') {
//         setter(result);
//         setShowTick(true);
//         console.log('File uploaded, showTick should be true:', setShowTick);
//       }
//     } catch (error) {
//       console.error('Error selecting file:', error);
//     }
//   };

//   const handleImageUpload = async (setter, setShowTick) => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         quality: 1,
//       });
//       if (!result.canceled) {
//         setter(result);
//         setShowTick(true);
//       }
//     } catch (error) {
//       console.error('Error selecting image:', error);
//     }
//   };

//   const handleSubmit = () => {
//     // Validate required fields and file types
//     if (!nationalId || !cv || !certificates || !passportPhoto || !recommendationLetter) {
//       setSnackbarVisible(true);
//       return;
//     }

//     // Handle form submission
//     // You can submit the form data to your backend here
//   };

//   const renderTick = () => {
//     console.log('Rendering tick');
//     const opacity = tickAnimationValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, 1],
//     });
//     return (
//       <Animated.View style={{ opacity }}>
//         <Text style={{ color: 'green', fontSize: 18 }}>✓</Text>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <TextInput
//         placeholder="Enter National ID Number"
//         value={nationalId}
//         onChangeText={()=>handleNationalIdChange(setShowNationalIdTick)}
//         right={() => showNationalIdTick && renderTick()}
//       />
//       <List.Section>
//         <List.Subheader>Upload Documents</List.Subheader>
//         <List.Item
//           title="Upload CV (PDF)"
//           onPress={() => handleFileUpload(setCv, { type: 'application/pdf' }, setShowCvTick)}
//           right={() => showCvTick && renderTick()}
//         />
//         <Divider />
//         <List.Item
//           title="Upload Certificates (PDF)"
//           onPress={() => handleFileUpload(setCertificates, { type: 'application/pdf' }, setShowCertificatesTick)}
//           right={() => showCertificatesTick && renderTick()}
//         />
//         <Divider />
//         <List.Item
//           title="Upload Passport Photo"
//           onPress={() => handleImageUpload(setPassportPhoto, setShowPassportPhotoTick)}
//           right={() => showPassportPhotoTick && renderTick()}
//         />
//         <Divider />
//         <List.Item
//           title="Upload Recommendation Letter (PDF)"
//           onPress={() => handleFileUpload(setRecommendationLetter, { type: 'application/pdf' }, setShowRecommendationLetterTick)}
//           right={() => showRecommendationLetterTick && renderTick()}
//         />
//       </List.Section>
//       <Button title="Submit" onPress={handleSubmit} />
//       <Snackbar
//         visible={snackbarVisible}
//         onDismiss={() => setSnackbarVisible(false)}
//         duration={3000}
//       >
//         Please fill all required fields and upload correct file types.
//       </Snackbar>
//     </View>
//   );
// };

// export default HomeScreen;






