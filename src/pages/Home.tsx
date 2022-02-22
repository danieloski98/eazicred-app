import { View, Text, StatusBar, Image } from 'react-native'
import {useCallback, useState} from 'react'
import theme from '../utils/theme'
import {Input, Button, Spinner} from '@ui-kitten/components'

export default function Home(props: any) {
  const [email, setemail] = useState('');
  const [verifing, setVerifying] = useState(false);

  const submit = useCallback(() => {
    // console.log(props);
    props.navigation.navigate('dashboard');
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: (StatusBar.currentHeight as number)+20, paddingHorizontal: 0 }}>

      <View style={{ width: '100%', height: 80, alignItems: 'center' }}>
        <Image source={require('../../assets/images/logo.png')} resizeMode="contain" style={{ height: '100%'}} />
      </View>

      <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: theme.majorPadding, paddingVertical: theme.majorPadding }}>
        <Text style={{ fontFamily: theme.fonts.PoppinsBold, color: 'black', fontSize: theme.headerTextSize }}>Welcome Back</Text>
        <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'black', fontSize: theme.normalTextSize }}>Enter your credential to continue</Text>

        <View style={{ marginTop: 50 }}>

          <View>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'black', fontSize: theme.normalTextSize }}>Agent Email</Text>
            <Input value={email} onChangeText={(e) => setemail(e)} size="large" style={{ marginTop: 10 }} keyboardAppearance="light" keyboardType="email-address" />
          </View>

          <Button onPress={submit} style={{ backgroundColor: theme.primaryColor, marginTop: 10 }} size="giant" status="info" >
            {!verifing ? (<Text>Continue</Text>): (<Spinner />)}
          </Button>
        </View>
      </View>

    </View>
  )
}