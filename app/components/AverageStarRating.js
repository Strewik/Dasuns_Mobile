import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';

const AverageStarRating = ({ averageRating }) => {
  return (
    <View>
      <StarRating
        disabled={true}
        maxStars={5}
        rating={averageRating}
        starSize={30}
        fullStarColor="gold"
        emptyStarColor="gray"
      />
    </View>
  );
};



export default AverageStarRating;
