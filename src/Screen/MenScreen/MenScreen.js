import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousal from '../../Carousel/Carousal';
import TrendingCard from '../../Componant/TrendingCards/TrendingCard';
import Category from '../../Componant/Category';
import Category2 from '../../Componant/category2';
import Category3 from '../../Componant/categories3';

const MenScreen = () => {
  const bannerImages = [
    require('../../../assets/MenAssets/MensBanners/4.jpg'),
    require('../../../assets/MenAssets/MensBanners/3.jpg'),
    require('../../../assets/MenAssets/MensBanners/2.jpg'),
    require('../../../assets/MenAssets/MensBanners/1.jpeg'),
  ];

  const T_Shirt = [
    {
      name: 'Shirts',
      photo: require('../../../assets/MenAssets/MenShirt/3.jpg'),
    },
  ];

  const Jeans = [
    {
      name: 'Jeans',
      photo: require('../../../assets/MenAssets/Mens_Jeans/1.jpg'),
    },
  ];
  const Shoes = [
    {
      name: 'Footwears',
      photo: require('../../../assets/MenAssets/Men_Shoes/5.jpg'),
    },
  ];
  return (
    <ScrollView>
      <View style={{height: 220}}>
        <Carousal bannerImages={bannerImages} />
      </View>
      <View style={{paddingTop: 10}}>
        <Category categories={T_Shirt} handlePress={'4'} flexD={'1'} />
        <Category categories={Jeans} handlePress={'5'} flexD={'2'} />
        <Category categories={Shoes} handlePress={'6'} flexD={'3'} />
      </View>
    </ScrollView>
  );
};

export default MenScreen;

const styles = StyleSheet.create({});
