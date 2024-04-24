import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Carousel, {
  Pagination,
  ParallaxImage,
} from "react-native-snap-carousel";

import { views1, views2 } from "./data";

const SLIDER_WIDTH = Dimensions.get("window").width;

const renderItem3 = ({ item }) => {
  return (
    <View style={styles.renderItem1_parentView1}>
      <Image
        source={item.image}
        style={[styles.renderItem1_img, { height: 250 }]}
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};



const App = () => {
  const [page, setPage] = useState(0);
  const isCarousel = useRef(null);

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(views2);
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#f2f2f2" }}>
      {/* Pagination Carousel */}
      <Carousel
        ref={isCarousel}
        onSnapToItem={(page) => setPage(page)}
        data={views1}
        renderItem={renderItem3}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH * 0.7}
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
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  renderItem1_parentView1: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    // height: 250,
    // width: 350,
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
    // marginVertical: 10,
    //  // Shadow properties for iOS
    //  shadowColor: '#000',
    //  shadowOffset: { width: 2, height: 2 },
    //  shadowOpacity: 0.2,
    //  shadowRadius: 10,
    //  // Elevation for Android
    //  elevation: 4,
  },
  title: {
    marginVertical: 10,
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    opacity: 0.4,
    textAlign: "center",
  },

  renderItem1_img: {
    width: "100%",
    height: "100%",
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
 
});
