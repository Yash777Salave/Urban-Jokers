import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CommonCard = ({Data}) => {
  return (
    <FlatList
      data={Data}
      horizontal
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.categoryContainer}>
          <Image source={item.photo} style={styles.image} />
          <Text style={styles.name}>
            {item && item.name && item.name.length < 10
              ? item.name
              : item.name.substring(0, 12).concat('...')}
          </Text>
          <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CommonCard;

const styles = StyleSheet.create({
  categoryContainer: {
    // borderWidth: 1,
    margin: 5,
    height: 274,
    // height: 'auto',
    width: 145,
    alignItems: 'center',
    marginBottom: 90,
    backgroundColor: '#ffff',
    elevation: 2,
  },
  image: {
    height: 188,
    width: 135,
    resizeMode: 'cover',
    marginTop: 4,
  },
  price: {
    alignSelf: 'flex-start',
    paddingHorizontal: 4,
    fontSize: 24,
    color: '#333',
  },
  name: {
    paddingHorizontal: 4,
    alignSelf: 'flex-start',
    fontSize: 20,
    color: '#333',
  },
});
