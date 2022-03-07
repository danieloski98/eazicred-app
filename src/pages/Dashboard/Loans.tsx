import { View, Text, ScrollView, StatusBar, Image, Dimensions, Platform } from 'react-native'
import React from 'react'
import theme from '../../utils/theme'
import Navbar from '../../components/Navbar'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Smeloanshistory from './Smeloanshistory'
import Paydayloanshistory from './Paydayloanshistory'
import {FontAwesome5} from '@expo/vector-icons'

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
const Tab = createMaterialTopTabNavigator();

export default function Loans() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Navbar />
      <Tab.Navigator 
      transitionStyle='scroll'
      sceneContainerStyle={{ flex: 1, backgroundColor: 'white', elevation: 0, padding: 0, height: 10 }} 
      screenOptions={{
        tabBarLabelStyle: {color: 'white', fontSize: 16, fontFamily: theme.fonts.PoppinsSemiBold },
        tabBarStyle: {backgroundColor: theme.primaryColor, elevation: 0 },
        tabBarIndicatorStyle: { backgroundColor: 'white'}
      }}>
        <Tab.Screen name="sme" component={Smeloanshistory} options={{ tabBarIcon: ({ focused }) => <FontAwesome5 name="briefcase" size={20} color={focused ? 'white':theme.primaryColor} /> }} />
        <Tab.Screen name="payday" component={Paydayloanshistory} options={{ tabBarIcon: ({ focused }) => <FontAwesome5 name="user-friends" size={20} color={focused ? 'white':theme.primaryColor} /> }} />
      </Tab.Navigator>
    </View>
  )
}