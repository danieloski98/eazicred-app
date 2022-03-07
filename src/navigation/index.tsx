import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import SmeLoan from '../pages/Dashboard/SmeLoan';
import Paydayloan from '../pages/Dashboard/Paydayloan';

const StackNavigation = createNativeStackNavigator();

export default function index() {
  return (
    <NavigationContainer>
        <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
            <StackNavigation.Screen name='home' component={Home} />
            <StackNavigation.Screen name='dashboard' component={Dashboard} />
            <StackNavigation.Screen name="sme" component={SmeLoan} />
            <StackNavigation.Screen name="payday" component={Paydayloan} />
        </StackNavigation.Navigator>
    </NavigationContainer>
  )
}
