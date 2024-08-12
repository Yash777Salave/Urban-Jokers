import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomDrawerItem = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 18, // Increase font size here
    color: '#333',
  },
});
