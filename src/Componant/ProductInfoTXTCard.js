import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductInfoTXTCard = ({txtQue, txtAns}) => {
  return (
    <View style={styles.InfoTxtCOntainer}>
      <Text style={styles.InfoTxtQUE}>{txtQue}</Text>
      <Text style={styles.InfoTxtANS}>{txtAns}</Text>
    </View>
  );
};

export default ProductInfoTXTCard;

const styles = StyleSheet.create({
  InfoTxtCOntainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#E5E4E2',
    borderTopWidth: 1,
    height: 'auto',
  },
  InfoTxtQUE: {
    fontSize: 20,
    color: '#333',
  },
  InfoTxtANS: {
    fontSize: 19,
    color: '#A8A8A8',
    // color: '#333',
    width: 150,
    textAlign: 'right',
  },
});
