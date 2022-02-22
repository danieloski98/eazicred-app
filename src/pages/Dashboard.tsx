import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Dashboard/Home';
import Loans from './Dashboard/Loans';
import Settings from './Dashboard/Settings';
import {Feather} from '@expo/vector-icons'
import theme from '../utils/theme';

const BottomNavigator = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <BottomNavigator.Navigator screenOptions={{ headerShown: false }}>
        <BottomNavigator.Screen name='Home' component={Home} options={{ tabBarIcon: ({ focused }) => <Feather name="home" size={25} color={focused ? theme.primaryColor:'lightgrey'} /> }} />
        <BottomNavigator.Screen name='Loans' component={Loans} options={{ tabBarIcon: ({ focused }) => <Feather name="pie-chart" size={25} color={focused ? theme.primaryColor:'lightgrey'} /> }} />
        <BottomNavigator.Screen name='Settings' component={Settings} options={{ tabBarIcon: ({ focused }) => <Feather name="settings" size={25} color={focused ? theme.primaryColor:'lightgrey'} /> }} />
    </BottomNavigator.Navigator>
  )
}