import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';

const TrendingCard = memo(({data}) => {
  const navigation = useNavigation();
  // console.log('data is ---', data);
  return (
    <View>
      {/* <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => {
              navigation.navigate('ProductDetails', {
                image: item.photo,
                name: item.name,
                price: item.price,
                originalPrice: item.originalPrice,
                percentTag: item.percentTag,
              });
            }}>
            <Image source={item.photo} style={styles.image} />
            <Text style={styles.name}>
              {item && item.name && item.name.length < 10
                ? item.name
                : item.name.substring(0, 12).concat('...')}
            </Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      /> */}

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => {
              navigation.navigate('ProductDetails', {
                image: item.photo,
                name: item.name,
                price: item.price,
                originalPrice: item.originalPrice,
                percentTag: item.percentTag,
              });
            }}>
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
    </View>
  );
});

export default TrendingCard;

const styles = StyleSheet.create({
  categoryContainer: {
    // borderWidth: 1,
    margin: 5,
    // height: 274,
    height: 'auto',
    width: 145,
    alignItems: 'center',
    backgroundColor: '#ffff',
    elevation: 2,
    borderRadius: 5,
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
