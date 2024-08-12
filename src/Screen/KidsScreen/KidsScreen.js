import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Carousal from '../../Carousel/Carousal';
import Category from '../../Componant/Category';
import Category2 from '../../Componant/category2';
import Category3 from '../../Componant/categories3';

const KidsScreen = () => {
  const bannerImages = [
    require('../../../assets/KidsAssets/Kids_Banner/1.jpg'),
    require('../../../assets/KidsAssets/Kids_Banner/2.jpg'),
    require('../../../assets/KidsAssets/Kids_Banner/3.jpg'),
    require('../../../assets/KidsAssets/Kids_Banner/4.jpg'),
    require('../../../assets/KidsAssets/Kids_Banner/5.jpg'),
  ];
  const T_Shirt = [
    {
      name: 'Kurti',
      photo: require('../../../assets/KidsAssets/Kids_shirt/8.jpeg'),
    },
  ];

  const Jeans = [
    {
      name: 'Jeans',
      photo: require('../../../assets/KidsAssets/Kids_jeans/4.jpeg'),
    },
  ];
  const Shoes = [
    {
      name: 'Footwears',
      photo: require('../../../assets/KidsAssets/Kids_SHoes/3.jpg'),
    },
  ];
  return (
    <ScrollView>
      <View style={{height: 220}}>
        <Carousal bannerImages={bannerImages} />
        {/* <Text>hbhbh</Text> */}
      </View>
      <View style={{paddingTop: 10}}>
        <Category categories={T_Shirt} handlePress={'10'} flexD={'1'} />
        <Category categories={Jeans} handlePress={'11'} flexD={'2'} />
        <Category categories={Shoes} handlePress={'12'} flexD={'3'} />
      </View>
    </ScrollView>
  );
};

export default KidsScreen;

const styles = StyleSheet.create({});
