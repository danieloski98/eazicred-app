import { View, Text, Image, ScrollView, Platform, Dimensions, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import theme from '../utils/theme'
import { useNavigation, useRoute } from '@react-navigation/native'

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

export default function Navbar() {

  const route = useRoute();

//   useEffect(() => {
      
//       alert(route.name);
//   }, [route]);

  return (
    <View style={{ width: '100%', height: (HEIGHT/100)* (route.name === 'Home' ? 25:15), backgroundColor: theme.primaryColor, paddingTop: route.name === 'Home' ? (StatusBar.currentHeight as number)+ (Platform.OS === 'android' ? 25:60):10, paddingHorizontal: theme.majorPadding, justifyContent: route.name === 'Home' ? 'flex-start':'center', elevation: 2 }}>

        <Image source={require('../../assets/images/logo-black.png')} resizeMode="contain" />

        {route.name === 'Home' && (
            <Text style={{ fontSize: theme.headerTextSize, fontFamily: theme.fonts.PoppinsSemiBold, color: 'white', marginTop: 20 }}>DanielEmmanuel257@gmail.com</Text>
        )}

       {route.name === 'Home' && (
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ fontSize: theme.normalTextSize, fontFamily: theme.fonts.RobotoRegular, color: 'white'}}>Daniel Emmanuel</Text>
            </View>
       )}
       {route.name === 'Home' && (
           <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <Text style={{ fontSize: theme.normalTextSize - 2, fontFamily: theme.fonts.RobotoLight, color: 'white'}}>08033634507</Text>
            </View>
       )}
      </View>
  )
}