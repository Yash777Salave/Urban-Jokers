import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GuranteeTXTproDetailsCard = ({txt}) => {
  return (
    <View style={styles.GuaranteeContainer}>
      <Text style={styles.GuaranteeTXT}>{txt}</Text>
    </View>
  );
};

export default GuranteeTXTproDetailsCard;

const styles = StyleSheet.create({
  GuaranteeTXT: {
    color: '#333',
    fontSize: 20,
  },
  GuaranteeContainer: {
    padding: 10,
  },
});
