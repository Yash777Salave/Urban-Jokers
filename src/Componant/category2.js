import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Category2 = ({categories}) => {
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

export default Category2;

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: -20,
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  categoryName: {
    fontSize: 23,
    // fontWeight: 'bold',
    marginVertical: 10,
    // borderWidth: 1,
    height: 200,
    width: '50%',
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: 'rgb(224, 229, 229)',
    color: '#333',
  },
  image: {
    resizeMode: 'stretch',
    height: 200,
    width: '50%',
  },
});
