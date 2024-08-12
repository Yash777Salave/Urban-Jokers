import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Category = ({categories, handlePress, flexD}) => {
  const styles = StyleSheet.create({
    categoryContainer: {
      alignItems: 'center',
      // flexDirection: 'row',
      flexDirection:
        (flexD === '1' && 'row') ||
        (flexD === '2' && 'row-reverse') ||
        (flexD === '3' && 'row'),
    },
    categoryName: {
      fontSize: 23,
      // fontWeight: 'bold',
      // marginVertical: 10,
      // borderWidth: 1,
      height: 200,
      width: '50%',
      textAlignVertical: 'center',
      textAlign: 'center',
      backgroundColor:
        (flexD === '1' && 'rgb(231, 198, 175)') ||
        (flexD === '2' && 'rgb(224, 229, 229)') ||
        (flexD === '3' && '#f9e79f'),
      color: '#333',
    },
    image: {
      resizeMode: 'stretch',
      height: 200,
      width: '50%',
    },
  });

  const navigation = useNavigation();
  const HandleNavigate = () => {
    if (handlePress === '1') {
      navigation.navigate('Mens');
    } else if (handlePress === '2') {
      navigation.navigate('Women');
    } else if (handlePress === '3') {
      navigation.navigate('Kids');
    } else if (handlePress === '4') {
      navigation.navigate('MensShirtCategories');
    } else if (handlePress === '5') {
      navigation.navigate('WomenCategory');
    } else if (handlePress === '6') {
      navigation.navigate('KidsCategory');
    }
  };
  return (
    <View>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryContainer}
          onPress={() => {
            HandleNavigate();
          }}>
          <Text style={styles.categoryName}>{category.name}</Text>
          <Image source={category.photo} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Category;
