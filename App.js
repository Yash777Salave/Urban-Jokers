import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './src/Navigation/DrawerNavigation';
import WomenCategories from './src/Screen/WomenScreen/WomenCategories';
import KidsCategories from './src/Screen/KidsScreen/KidsCategories';
import MensShirtCategories from './src/Screen/MenScreen/MensShirtCategories';
import ProductDetailPage from './src/Componant/ProductDetailPage';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MensShirtCategories"
          component={MensShirtCategories}
        />
        <Stack.Screen name="WomenCategory" component={WomenCategories} />
        <Stack.Screen name="KidsCategory" component={KidsCategories} />
        <Stack.Screen name="ProductDetails" component={ProductDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
