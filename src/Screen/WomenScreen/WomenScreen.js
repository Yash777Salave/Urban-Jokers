import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousal from '../../Carousel/Carousal';
import Category from '../../Componant/Category';
import Category2 from '../../Componant/category2';
import Category3 from '../../Componant/categories3';

const WomenScreen = () => {
  const bannerImages = [
    require('../../../assets/WomenAssets/Women_Banner/1.jpeg'),
    require('../../../assets/WomenAssets/Women_Banner/2.jpg'),
    require('../../../assets/WomenAssets/Women_Banner/3.jpg'),
    require('../../../assets/WomenAssets/Women_Banner/4.jpg'),
    require('../../../assets/WomenAssets/Women_Banner/5.webp'),
  ];
  const T_Shirt = [
    {
      name: 'Kurtis',
      photo: require('../../../assets/WomenAssets/WomenKurti/6.jpeg'),
    },
  ];

  const Jeans = [
    {
      name: 'Jeans',
      photo: require('../../../assets/WomenAssets/Women_Jeans/womenjeans1.jpg'),
    },
  ];
  const Shoes = [
    {
      name: 'Footwears',
      photo: require('../../../assets/WomenAssets/women_Shoes/womenshoes3.jpg'),
    },
  ];
  return (
    <ScrollView>
      <View style={{height: 220}}>
        <Carousal bannerImages={bannerImages} />
      </View>
      <View style={{paddingTop: 10}}>
        <Category categories={T_Shirt} handlePress={'7'} flexD={'1'} />
        <Category categories={Jeans} handlePress={'8'} flexD={'2'} />
        <Category categories={Shoes} handlePress={'9'} flexD={'3'} />
      </View>
    </ScrollView>
  );
};

export default WomenScreen;

const styles = StyleSheet.create({});
