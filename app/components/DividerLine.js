import React from 'react';
import { View, StyleSheet } from 'react-native';

const DividerLine = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginVertical: 10,
    opacity: 0.6,
  },
});

export default DividerLine;
