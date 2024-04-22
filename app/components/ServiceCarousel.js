import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([
    { id: 1, image: require('../../assets/images/Closed-Caption.jpg') },
    { id: 2, image: require('../../assets/images/International-signLanguage.jpg') },
    { id: 3, image: require('../../assets/images/Mobility-Guide.jpg') },
    { id: 4, image: require('../../assets/images/Personal-Assistant.jpg') },
    { id: 5, image: require('../../assets/images/signLanguage.jpg') },
    { id: 6, image: require('../../assets/images/Mobility-Guide.jpg') },

  ]);
  const carouselWidth = Dimensions.get('window').width;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <View key={item.id} style={{ width: carouselWidth }}>
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 30,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    position: 'absolute',
    bottom: 20,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ServiceCarousel;




// import {
//     ScrollView,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TouchableOpacity,
//     Platform,
//     Dimensions,
//  } from "react-native";
//  import React, { useState, useRef, useEffect } from "react";
//  import Carousel, { Pagination, ParallaxImage } from "react-native-snap-carousel";
 
//  import { views1, views2 } from "./data";
//  const screenWidth = Dimensions.get("window").width;
//   const sliderWidth = screenWidth * 0.8;
//   const itemWidth = screenWidth * 0.8; // Adjust this value if you want the items to be smaller than the slider width
 
//  const renderItem3 = ({ item }) => {
//     return (
//        <View style={styles.renderItem1_parentView1}>
//           <Image source={item.image} style={[styles.renderItem1_img, { height: 250 }]} />
//        </View>
//     );
//  };
 
 
//  const ServiceCarousel = () => {
//     const [page, setPage] = useState(0);
//     const isCarousel = useRef(null);
 
//     const [entries, setEntries] = useState([]);
//     const carouselRef = useRef(null);
 
//     useEffect(() => {
//        setEntries(views2);
//     }, []);
 
//     return (
//        <ScrollView style={{ backgroundColor: "#f2f2f2"  }}>
         
   
//           <Carousel
//              ref={isCarousel}
//              onSnapToItem={(page) => setPage(page)}
//              data={views1}
//              renderItem={renderItem3}
//              sliderWidth={380}
//              itemWidth={350}
//              loop
//       autoplay
//       autoplayInterval={3000} 
//           />
//           <Pagination
//              activeDotIndex={page}
//              carouselRef={isCarousel}
//              tappableDots={true}
//              inactiveDotOpacity={0.4}
//              inactiveDotScale={0.6}
//              dotsLength={views1.length}
//              dotStyle={{
//                 width: 10,
//                 borderRadius: 18,
//                 backgroundColor: "#0074FF",
//              }}
//              inactiveDotStyle={{
//                 backgroundColor: "grey",
//              }}
//           />
 
      
//        </ScrollView>
//     );
//  };
 

 
//  const styles = StyleSheet.create({
//     renderItem1_parentView1: {
//        backgroundColor: "#ffffff",
//        borderRadius: 18,
//        height: 250,
//        width: 350,
//        justifyContent: "space-around",
//        alignItems: "center",
//        overflow: "hidden",
//        marginTop: 20,
       
//     },
//     renderItem1_view1: {
//        width: 80,
//        position: "absolute",
//        fontSize: 20,
//        top: 10,
//        right: 20,
//        backgroundColor: "#ffffff",
//        borderRadius: 18,
//        alignItems: "center",
       
//     },
//     renderItem1_view2: {
//        width: 350,
//        flexDirection: "row",
//        justifyContent: "space-around",
//     },
//     renderItem1_img: {
//        width: 350,
//        height: 200,
//     },
//     renderItem1_text1: {
//        fontWeight: "700",
//        color: "#000000",
//     },
//     renderItem1_text2: {
//        marginVertical: 8,
//        fontSize: 20,
//        fontWeight: "bold",
//     },
//     renderItem1_text3: {
//        marginVertical: 8,
//        color: "blue",
//        fontWeight: "bold",
//     },

//     renderItem2_img: {
//        width: 350,
//        height: 550,
//     },
//     image: {
//        ...StyleSheet.absoluteFillObject,
//        resizeMode: "cover",
       
//     },
//     imageContainer: {
//        flex: 1,
//        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
//        backgroundColor: "white",
//        borderRadius: 8,
       
//     },
//     container: {
//        flex: 1,
//     },
//     item: {
//        width: 350,
//        height: 150,
//        marginVertical: 10,
//     },
//  });
 
//  export default ServiceCarousel;




