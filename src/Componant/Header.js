import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
const Header = ({leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon}) => {
  return (
    <View style={styles.Header}>
      <TouchableOpacity>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    width: width,
    height: 60,
    backgroundColor: '#333',
  },
  icon: {
    height: 40,
    width: 40,
  },
});
