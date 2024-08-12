import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Carousal from '../../../Carousel/Carousal';
import Category from '../../../Componant/Category';
import Category2 from '../../../Componant/category2';
import Category3 from '../../../Componant/categories3';
import TrendingCard from '../../../Componant/TrendingCards/TrendingCard';
import HeadingCategories from '../../../Componant/HeadingCategories';

const HomeTab = () => {
  const bannerImages = [
    require('../../../../assets/MenAssets/MensBanners/4.jpg'),
    require('../../../../assets/KidsAssets/Kids_Banner/2.jpg'),
    require('../../../../assets/WomenAssets/Women_Banner/1.jpeg'),
    require('../../../../assets/KidsAssets/Kids_Banner/1.jpg'),
    require('../../../../assets/WomenAssets/Women_Banner/2.jpg'),
    require('../../../../assets/MenAssets/MensBanners/2.jpg'),
  ];

  const categoriesMen = [
    {
      name: 'MEN',
      photo: require('../../../../assets/MenAssets/MenTshirt/1.jpg'),
    },
  ];
  const categoriesWomen = [
    {
      name: 'WOMEN',
      photo: require('../../../../assets/WomenAssets/WomenT_Shirt/womenshirt3.jpg'),
    },
  ];
  const categoriesKids = [
    {
      name: 'KIDS',
      photo: require('../../../../assets/KidsAssets/Kids_shirt/1.jpg'),
    },
  ];

  const TrendingCards = [
    {
      id: 1,
      photo: require('../../../../assets/MenAssets/Men_Shoes/5.jpg'),
      name: 'Cotton',
      price: 1299,
      originalPrice: 3500,
      percentTag: '50% OFF',
    },
    {
      id: 2,
      photo: require('../../../../assets/WomenAssets/WomenT_Shirt/womenshirt3.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 999,
      originalPrice: 3500,
      percentTag: '50% OFF',
    },
    {
      id: 3,
      photo: require('../../../../assets/MenAssets/Men_Shoes/5.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 299,
      originalPrice: 3500,
      percentTag: '50% OFF',
    },
    {
      id: 4,
      photo: require('../../../../assets/WomenAssets/WomenT_Shirt/womenshirt3.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 199,
      originalPrice: 3500,
      percentTag: '50% OFF',
    },
    {
      id: 5,
      photo: require('../../../../assets/MenAssets/MenTshirt/33.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 129,
      originalPrice: 3500,
      percentTag: '50% OFF',
    },
    {
      id: 6,
      photo: require('../../../../assets/MenAssets/MenTshirt/1.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 199,
      originalPrice: 3500,
      percentTag: '50% OFF',
    },
    {
      id: 7,
      photo: require('../../../../assets/MenAssets/MenTshirt/1.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 2299,
      originalPrice: 3500,
      percentTag: '50% OFF',
    },
    {
      id: 8,
      photo: require('../../../../assets/WomenAssets/WomenT_Shirt/womenshirt3.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 2299,
      originalPrice: 3500,
      percentTag: '50% OFF',
    },
    {
      id: 9,
      photo: require('../../../../assets/KidsAssets/Kids_shirt/1.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 339,
      originalPrice: 3500,
      percentTag: '50% OFF',
    },
  ];

  const NewProducts = [
    {
      id: 1,
      // photo: require('../../../../assets/NewProducts/2.jpg'),
      photo: require('../../../../assets/NewProducts/1.jpg'),
      name: 'Cotton',
      price: 1299,
    },
    {
      id: 2,
      photo: require('../../../../assets/NewProducts/17.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 999,
    },
    {
      id: 3,
      photo: require('../../../../assets/NewProducts/19.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 299,
    },
    {
      id: 4,
      photo: require('../../../../assets/NewProducts/4.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 199,
    },
    {
      id: 5,
      photo: require('../../../../assets/NewProducts/19.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 129,
    },
    {
      id: 6,
      photo: require('../../../../assets/NewProducts/6.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 199,
    },
    {
      id: 7,
      photo: require('../../../../assets/NewProducts/7.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 2299,
    },
    {
      id: 8,
      photo: require('../../../../assets/NewProducts/8.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 2299,
    },
    {
      id: 9,
      photo: require('../../../../assets/NewProducts/10.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: 339,
    },
  ];

  return (
    <ScrollView>
      <View style={{height: 220, marginBottom: 10}}>
        <Carousal bannerImages={bannerImages} />
      </View>
      <View style={{paddingTop: 10}}>
        <Category categories={categoriesMen} handlePress={'1'} flexD={'1'} />
        <Category categories={categoriesWomen} handlePress={'2'} flexD={'2'} />
        <Category categories={categoriesKids} handlePress={'3'} flexD={'3'} />
      </View>
      <View>
        <HeadingCategories Heading={'Trending On Urban Jokers'} />
        <View>
          <TrendingCard data={TrendingCards} />
        </View>
        <HeadingCategories Heading={'New Products'} />
        <View>
          <TrendingCard data={NewProducts} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
