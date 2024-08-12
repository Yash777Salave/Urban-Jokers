import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const CustomHeader = ({navigation}) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Image
        source={require('../../assets/ICONS/menu1.png')}
        style={{width: 22, height: 22, marginLeft: 10}}
      />
    </TouchableOpacity>
    <View style={styles.HeadingNameContainer}>
      <Text style={styles.title}>Urban Jokers</Text>
    </View>
    <View
      style={{
        flexDirection: 'row-reverse',
        flex: 1,
        gap: 20,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require('../../assets/ICONS/shopping-bag.png')}
          style={{width: 32, height: 32, marginRight: 15}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf: 'flex'}}>
        <Image
          source={require('../../assets/ICONS/search.png')}
          style={{width: 22, height: 22}}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#ffff',
    alignItems: 'center',
    // justifyContent: 'spac',
    flexDirection: 'row',
  },
  title: {
    color: '#333',
    fontSize: 25,
    paddingHorizontal: 15,
  },

  HeadingNameContainer: {},
});

export default CustomHeader;
