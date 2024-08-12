import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

export default function Carousal({bannerImages}) {
  const width = Dimensions.get('window').width;

  return (
    <Carousel
      loop
      width={width}
      height={width / 1.7}
      autoPlay={true}
      data={bannerImages.map((imageUrl, index) => ({
        id: index,
        source: imageUrl,
      }))}
      scrollAnimationDuration={1000}
      renderItem={({item, index}) => (
        <View style={{flex: 1}} key={index}>
          <Image
            source={item.source}
            style={{
              flex: 1,
              resizeMode: 'stretch',
              height: 200,
              width: '100%',
            }}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({});
