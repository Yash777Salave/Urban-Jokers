import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import CustomDrawerItem from '../Componant/CustomDrawerItem';

function CustomDrawerContent(props) {
  const [showSubMenu, setShowSubMenu] = React.useState(false);
  const [showSubMenuWomen, setShowSubMenuWomen] = React.useState(false);
  const [showSubMenuKids, setShowSubMenuKids] = React.useState(false);

  return (
    <DrawerContentScrollView {...props}>
      <CustomDrawerItem
        label={'Home'}
        onPress={() => props.navigation.navigate('Home')}
      />
      <TouchableOpacity
        onPress={() => setShowSubMenu(!showSubMenu)}
        style={styles.MenuContaner}>
        <Text style={showSubMenu ? styles.menuItemOpen : styles.menuItem}>
          Men
        </Text>
        <Image
          source={require('../../assets/ICONS/chevron.png')}
          style={{width: 23, height: 23, marginRight: 15}}
        />
      </TouchableOpacity>
      {showSubMenu && (
        <View style={styles.subMenuContainer}>
          <CustomDrawerItem
            label={'Mens Jeans'}
            onPress={() => props.navigation.navigate('MensJeans')}
          />

          <CustomDrawerItem
            label={'Mens Shirt'}
            onPress={() => {
              props.navigation.navigate('MensJeans');
            }}
          />
          <CustomDrawerItem
            label={'Men Shoes'}
            onPress={() => props.navigation.navigate('MenShoes')}
          />
          <CustomDrawerItem
            label={'Mens Tshirt'}
            onPress={() => props.navigation.navigate('MenTshirt')}
          />
        </View>
      )}
      <TouchableOpacity
        onPress={() => setShowSubMenuWomen(!showSubMenuWomen)}
        style={styles.MenuContaner}>
        <Text style={showSubMenuWomen ? styles.menuItemOpen : styles.menuItem}>
          Women
        </Text>
        <Image
          source={require('../../assets/ICONS/chevron.png')}
          style={{width: 23, height: 23, marginRight: 15}}
        />
      </TouchableOpacity>
      {showSubMenuWomen && (
        <View style={styles.subMenuContainer}>
          <CustomDrawerItem
            label={'Women Kurties'}
            onPress={() => props.navigation.navigate('WomenKurties')}
          />
          <CustomDrawerItem
            label={'Women Jeans'}
            onPress={() => props.navigation.navigate('WomenJeans')}
          />
          <CustomDrawerItem
            label={'Women Shirt'}
            onPress={() => props.navigation.navigate('WomenShirt')}
          />
          <CustomDrawerItem
            label={'Women Shoest'}
            onPress={() => props.navigation.navigate('WomenShoes')}
          />
        </View>
      )}
      <TouchableOpacity
        onPress={() => setShowSubMenuKids(!showSubMenuKids)}
        style={styles.MenuContaner}>
        <Text style={showSubMenuKids ? styles.menuItemOpen : styles.menuItem}>
          Kids
        </Text>
        <Image
          source={require('../../assets/ICONS/chevron.png')}
          style={{width: 23, height: 23, marginRight: 15}}
        />
      </TouchableOpacity>
      {showSubMenuKids && (
        <View style={styles.subMenuContainer}>
          <CustomDrawerItem
            label={'Kids Shirt'}
            onPress={() => props.navigation.navigate('KidsShirt')}
          />
          <CustomDrawerItem
            label={'Kids Jeans'}
            onPress={() => props.navigation.navigate('KidsJeans')}
          />
          <CustomDrawerItem
            label={'Kids Shoes'}
            onPress={() => props.navigation.navigate('KidsShoes')}
          />
        </View>
      )}
      <View></View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    margin: 16,
    fontSize: 19,
    // fontWeight: 'bold',
    color: '#333',
  },
  menuItemOpen: {
    margin: 16,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  subMenuContainer: {
    paddingLeft: 20,
  },
  MenuContaner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CustomDrawerContent;
