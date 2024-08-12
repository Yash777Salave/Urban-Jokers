import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeadingCategories = ({Heading}) => {
  return (
    <View>
      <Text style={styles.HeadingName}>{Heading}</Text>
    </View>
  );
};

export default HeadingCategories;

const styles = StyleSheet.create({
  HeadingName: {
    fontSize: 21,
    color: '#333',
    padding: 10,
    paddingHorizontal: 14,
    // marginBottom: 10,
  },
});
