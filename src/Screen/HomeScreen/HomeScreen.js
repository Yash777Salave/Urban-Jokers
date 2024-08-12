import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenScreen from '../MenScreen/MenScreen';
import WomenScreen from '../WomenScreen/WomenScreen';
import KidsScreen from '../KidsScreen/KidsScreen';
import HomeTab from './HomeTab/HomeTab';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#333',
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 20, color: color}}>Home</Text>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: '#ff6347',
            height: 4,
          },
        }}
      />
      {/* <Tab.Screen name="Tab2" component={Tab2Screen} /> */}
      <Tab.Screen
        name="Mens"
        component={MenScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 20, color: color}}>Men</Text>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: '#ff6347',
            height: 4,
          },
        }}
      />
      <Tab.Screen
        name="Women"
        component={WomenScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 20, color: color}}>Women</Text>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: '#ff6347',
            height: 4,
          },
        }}
      />
      <Tab.Screen
        name="Kids"
        component={KidsScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{fontSize: 20, color: color}}>Kids</Text>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: '#ff6347',
            height: 4,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;
