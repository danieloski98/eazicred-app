import { View, Text, StatusBar, Image, Alert, ActivityIndicator } from 'react-native'
import {useCallback, useState} from 'react'
import theme from '../utils/theme'
import {Input, Button } from '@ui-kitten/components'
import { url } from '../utils/url';
import { IServerReturn } from '../types/ApiReturnType';
import { useRecoilState } from 'recoil'
import { AgentAtom } from '../states/agent';

export default function Home(props: any) {
  const [email, setemail] = useState('');
  const [verifing, setVerifying] = useState(false);
  const [user, setUser] = useRecoilState(AgentAtom);

  const submit = async() => {
    console.log(email);
    if (email === ' ') {
      Alert.alert('Warning', 'you must fillin a valid email');
      return;
    }
    setVerifying(true);
    const request = await fetch(`${url}agent/${email}`);
    const json = await request.json() as IServerReturn;
    setVerifying(false);
    if (json.statusCode !== 200) {
      Alert.alert('Error', json.errorMessage);
      return;
    }else {
      // set new state
      //console.log(json.data);
      setUser(json.data);
      console.log(user);
      props.navigation.navigate('dashboard');
    }
    // console.log(props);
  };

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
            {!verifing ? (<Text>Continue</Text>): (<ActivityIndicator size="small" color="white" />)}
          </Button>
        </View>
      </View>

    </View>
  )
}