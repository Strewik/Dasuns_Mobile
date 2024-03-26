import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
 } from "react-native";
 import React, { useState, useRef, useEffect } from "react";
 import Carousel, { Pagination, ParallaxImage } from "react-native-snap-carousel";
 
 import { views1, views2 } from "./data";
 
//  const renderItem1 = ({ item }) => {
//     return (
//        <View style={styles.renderItem1_parentView1}>
//           <Image source={{ uri: item.imgUrl }} style={styles.renderItem1_img} />
//           <View style={styles.renderItem1_view1}>
//              {/* <Text style={styles.renderItem1_text1}>OFFERS</Text> */}
//           </View>
//           <View style={styles.renderItem1_view2}>
//              <Text style={styles.renderItem1_text2}>{item.title}</Text>
//              <TouchableOpacity>
//                 <Text style={styles.renderItem1_text3}>EXPLORE OFFERS</Text>
//              </TouchableOpacity>
//           </View>
//        </View>
//     );
//  };
 
//  const renderItem2 = ({ item }) => {
//     return (
//        <View style={styles.renderItem2_parentView2}>
//           <Image source={{ uri: item.imgUrl }} style={styles.renderItem2_img} />
//           {item.verified ? (
//              <View style={[styles.renderItem1_view1, { backgroundColor: "#D8FFDB" }]}>
//                 <Text style={[styles.renderItem1_text1, { color: "#008100" }]}>verified</Text>
//              </View>
//           ) : (
//              <View style={[styles.renderItem1_view1, { backgroundColor: "#FFDADB" }]}>
//                 <Text style={[styles.renderItem1_text1, { color: "#7D0000" }]}>not verified</Text>
//              </View>
//           )}
//        </View>
//     );
//  };
 
 const renderItem3 = ({ item }) => {
    return (
       <View style={styles.renderItem1_parentView1}>
          <Image source={{ uri: item.imgUrl }} style={[styles.renderItem1_img, { height: 250 }]} />
       </View>
    );
 };
 
//  const renderItem4 = ({ item }, parallaxProps) => {
//     return (
//        <View style={styles.item}>
//           <ParallaxImage
//              source={{ uri: item.imgUrl }}
//              containerStyle={styles.imageContainer}
//              style={styles.image}
//              parallaxFactor={0.4}
//              {...parallaxProps}
//           />
//        </View>
//     );
//  };
 
 const ServiceCarousel = () => {
    const [page, setPage] = useState(0);
    const isCarousel = useRef(null);
 
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);
 
    useEffect(() => {
       setEntries(views2);
    }, []);
 
    return (
       <ScrollView style={{ backgroundColor: "#f2f2f2"  }}>
          {/* Default Carousel */}
          {/* <Carousel
             layout={"default"}
             data={views1}
             renderItem={renderItem1}
             sliderWidth={400}
             itemWidth={350}
             loop
      autoplay
      autoplayInterval={3000} 
          /> */}
 
          {/* Tinder like Carousel */}
          {/* <Carousel
             layout={"tinder"}
             data={views2}
             renderItem={renderItem2}
             sliderWidth={400}
             itemWidth={350}
             loop
      autoplay
      autoplayInterval={3000} 
          /> */}
 
          {/* Pagination Carousel */}
          <Carousel
             ref={isCarousel}
             onSnapToItem={(page) => setPage(page)}
             data={views1}
             renderItem={renderItem3}
             sliderWidth={380}
             itemWidth={350}
             loop
      autoplay
      autoplayInterval={3000} 
          />
          <Pagination
             activeDotIndex={page}
             carouselRef={isCarousel}
             tappableDots={true}
             inactiveDotOpacity={0.4}
             inactiveDotScale={0.6}
             dotsLength={views1.length}
             dotStyle={{
                width: 10,
                borderRadius: 18,
                backgroundColor: "#0074FF",
             }}
             inactiveDotStyle={{
                backgroundColor: "grey",
             }}
          />
 
          {/* Parallax Carousel */}
          {/* <Carousel
             ref={carouselRef}
             sliderWidth={500}
             sliderHeight={200}
             itemWidth={450}
             data={entries}
             renderItem={renderItem4}
             hasParallaxImages={true}
             loop
      autoplay
      autoplayInterval={3000} 
          /> */}
       </ScrollView>
    );
 };
 

 
 const styles = StyleSheet.create({
    renderItem1_parentView1: {
       backgroundColor: "#ffffff",
       borderRadius: 18,
       height: 250,
       width: 350,
       justifyContent: "space-around",
       alignItems: "center",
       overflow: "hidden",
       marginTop: 20,
       
    },
    renderItem1_view1: {
       width: 80,
       position: "absolute",
       fontSize: 20,
       top: 10,
       right: 20,
       backgroundColor: "#ffffff",
       borderRadius: 18,
       alignItems: "center",
       
    },
    renderItem1_view2: {
       width: 350,
       flexDirection: "row",
       justifyContent: "space-around",
    },
    renderItem1_img: {
       width: 350,
       height: 200,
    },
    renderItem1_text1: {
       fontWeight: "700",
       color: "#000000",
    },
    renderItem1_text2: {
       marginVertical: 8,
       fontSize: 20,
       fontWeight: "bold",
    },
    renderItem1_text3: {
       marginVertical: 8,
       color: "blue",
       fontWeight: "bold",
    },
   //  renderItem2_parentView2: {
   //     backgroundColor: "#ffffff",
   //     borderRadius: 18,
   //     height: 550,
   //     width: 350,
   //     justifyContent: "space-around",
   //     alignItems: "center",
   //     overflow: "hidden",
   //     marginVertical: 20,
   //  },
    renderItem2_img: {
       width: 350,
       height: 550,
    },
    image: {
       ...StyleSheet.absoluteFillObject,
       resizeMode: "cover",
       
    },
    imageContainer: {
       flex: 1,
       marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
       backgroundColor: "white",
       borderRadius: 8,
       
    },
    container: {
       flex: 1,
    },
    item: {
       width: 350,
       height: 200,
       marginVertical: 10,
    },
 });
 
 export default ServiceCarousel;




// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// const data = [
//   { image: require('../assets/images/helper.jpg'), text: 'Overlay Text 1' },
//   { image: require('../assets/images/sign1.jpg'), text: 'Overlay Text 2' },
//   // Add more images and text as needed
// ];

// const CarouselComponent = () => {
//   const renderCarouselItem = ({ item }) => (
//     <View style={styles.carouselItem}>
//       <Image source={item.image} style={styles.image} />
//       <View style={styles.overlay}>
//         <Text style={styles.overlayText}>{item.text}</Text>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Button</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <Carousel
//       data={data}
//       renderItem={renderCarouselItem}
//       sliderWidth={300}
//       itemWidth={300}
//       layout="default"
//       loop
//     />
//   );
// };

// const styles = StyleSheet.create({
//   carouselItem: {
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     padding: 16,
//   },
//   overlayText: {
//     fontSize: 18,
//     color: 'white',
//     marginBottom: 8,
//   },
//   button: {
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//   },
// });

// export default CarouselComponent;





// import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';



// const ServiceCarousel = () => {
//     const flatlistRef = useRef();
//     const screenWidth = Dimensions.get('window').width;

//     const [activeIndex, setActiveIndex] = useState(0);

//     //auto scroll
//     useEffect(() => {
//         let interval = setInterval(() => {
//             if (activeIndex === carouselData.length - 1) {
//                 flatlistRef.current.scrollToIndex({
//                     index: 0,
//                     animation: true,
//                 });
//             } else {
//                 flatlistRef.current.scrollToIndex({
//                     index: activeIndex + 1,
//                     animation: true,
//                 });
//             }
//         }, 2000);
//         return () => clearInterval(interval);
//     });

//     const getItemLayout = (data, index) => ({
//         length: screenWidth,
//         index: index,
//         offset: screenWidth * index,
//     });

//     const carouselData = [
//         {
//             id: "01",
//             image: require("../assets/images/helper.jpg")
//         },
//         {
//             id: "02",
//             image: require("../assets/images/sign1.jpg")
//         },
//         {
//             id: "03",
//             image: require("../assets/images/guide.png")
//         },
//         {
//             id: "04",
//             image: require("../assets/images/helper1.png")
//         },
//         {
//             id: "05",
//             image: require("../assets/images/international-sign.png")
//         },
//         {
//             id: "06",
//             image: require("../assets/images/tactile-icon.png")
//         },
//     ]
//     //Display images, UI
//     const renderItem = ({ item, index }) => {
//         return (
            
//             <View style={styles.card}>
//                 <Image
//                     source={item.image}
//                     style={{ height: 200, width: screenWidth }}
//                 />
//             </View>
//         );
//     };

//     //Handle scroll
//     const handleScroll = (event) => {
//         const scrollPosition = event.nativeEvent.contentOffset.x;
//         //console.log({scrollPosition})

//         const index = scrollPosition / screenWidth
//         // console.log({index})
//         setActiveIndex(index);
//     }

//     // Render dot indicators
//     const renderDotIndicators = () => {
//         return carouselData.map((dot, index) => {
//             if (activeIndex === index) {
//                 return (
//                     <View style={{ backgroundColor: "#37bea7", height: 10, width: 10, borderRadius: 5, marginHorizontal: 6, }}></View>
//                 )
//             }
//             else {
//                 return (
//                     <View key={index} style={{ backgroundColor: "grey", height: 10, width: 10, borderRadius: 5, marginHorizontal: 6, }}></View>
//                 )
//             }
//         })
//     }

//     return (
//         <View>
//             <FlatList data={carouselData} ref={flatlistRef} getItemLayout={getItemLayout} renderItem={renderItem} horizontal={true} pagingEnabled={true} onScroll={handleScroll} />
//             <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20, borderRadius: 15 }}>
//                 {renderDotIndicators()}
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: 'white',
//         padding: 16,
//         borderRadius: 15,
//         // margin: 16,
//         // Shadow properties for iOS
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         // Elevation for Android
//         elevation: 4,
//     },
// });


// export default ServiceCarousel