import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Category3 = ({categories}) => {
  return (
    <View>
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryName}>{category.name}</Text>
          <Image source={category.photo} style={styles.image} />
        </View>
      ))}
    </View>
  );
};

export default Category3;


const styles = StyleSheet.create({
  categoryContainer: {
    top: -10,
    // marginTop: -20,

    alignItems: 'center',
    flexDirection: 'row',
  },
  categoryName: {
    fontSize: 23,
    // fontWeight: 'bold',
    // borderWidth: 1,
    height: 200,
    width: '50%',
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#f9e79f',
    color: '#333',
  },
  image: {
    resizeMode: 'stretch',
    height: 200,
    width: '50%',
  },
});
