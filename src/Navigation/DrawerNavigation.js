import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import CustomHeader from '../Componant/CustomHeader';
import CustomDrawerContent from './CustomDrawerContebt';
import Men_Jeans from '../DropDowns/MenDropDown/Men_Jeans';
import Men_Shirt from '../DropDowns/MenDropDown/Men_Shirt';
import Men_Shoes from '../DropDowns/MenDropDown/Men_Shoes';
import Men_Tshirt from '../DropDowns/MenDropDown/Men_Tshirt';
import Women_Jeans from '../DropDowns/WomenDropDown/Women_Jeans';
import Women_Kurtis from '../DropDowns/WomenDropDown/Women_Kurtis';
import Women_Shirt from '../DropDowns/WomenDropDown/Women_Shirt';
import Women_Shoes from '../DropDowns/WomenDropDown/Women_Shoes';
import Kid_Shirt from '../DropDowns/KidDropDown/Kid_Shirt';
import Kids_Jeans from '../DropDowns/KidDropDown/Kids_Jeans';
import Kids_Shoes from '../DropDowns/KidDropDown/Kids_Shoes';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={({navigation}) => ({
        header: props => <CustomHeader {...props} />,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="MensJeans" component={Men_Jeans} />
      <Drawer.Screen name="MensShirt" component={Men_Shirt} />
      <Drawer.Screen name="MenShoes" component={Men_Shoes} />
      <Drawer.Screen name="MenTshirt" component={Men_Tshirt} />
      <Drawer.Screen name="WomenJeans" component={Women_Jeans} />
      <Drawer.Screen name="WomenKurties" component={Women_Kurtis} />
      <Drawer.Screen name="WomenShirt" component={Women_Shirt} />
      <Drawer.Screen name="WomenShoes" component={Women_Shoes} />
      <Drawer.Screen name="KidsShirt" component={Kid_Shirt} />
      <Drawer.Screen name="KidsJeans" component={Kids_Jeans} />
      <Drawer.Screen name="KidsShoes" component={Kids_Shoes} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
