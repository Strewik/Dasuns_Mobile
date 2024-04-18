import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StarRating = ({ rating, onRatingPress }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleRatingPress = (selectedStar) => {
    setSelectedRating(selectedStar);
    onRatingPress(selectedStar);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRatingPress(i)}>
          <Icon
            name={selectedRating >= i ? 'star' : 'star-outline'}
            size={25}
            color="#FFD700" 
          />
        </TouchableOpacity>
      );
    }

    return stars;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default StarRating;
