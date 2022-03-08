import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar'
import theme from '../../utils/theme'
import { useRecoilState } from 'recoil'
import { AgentAtom } from '../../states/agent'
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Settings() {
  const [agent, setAgent] = useRecoilState(AgentAtom);

  const navigation = useNavigation<any>();

  const icon = `https://avatars.dicebear.com/api/human/${agent.email}.png`;
  const logout = () => {
    // idStorage.removeItem();
    navigation.navigate('home');
}
  return (
    <View>
      <ScrollView>

          <View style={{ width: '100%', height: 300, backgroundColor: theme.primaryColor, padding: 20 }}>
                <Text style={{ fontSize: 20, fontFamily: 'Inter-Bold', color:'white', marginTop: 20 }}>Settings</Text>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{ width: 100, height: 100}}>
                        <Image source={{ uri: icon }} resizeMode="contain" style={{ width: '100%', height: '100%', borderRadius: 60 }} />
                    </View>
                    {/* <Text style={{ fontSize: 18, fontFamily: 'Inter-SemiBold', color:'white', marginTop: 10 }}>{agent.first_name} {user.last_name}</Text> */}
                    <Text style={{ fontSize: 18, fontFamily: theme.fonts.RobotoRegular, color:'white', marginBottom: 20 }}>{agent.email}</Text>
                </View>
               
          </View>

          <View style={{ width: '95%', padding: 20, marginHorizontal: 10, backgroundColor: 'white', transform: [
                {translateY: -40}
            ], borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: 1, borderColor: 'lightgrey' }}>

              <TouchableOpacity onPress={() => navigation.navigate('about')} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
                        <View style={{ width: 40, height: 40 }}>
                            <Image source={require('../../../assets/about.png')} resizeMode="contain" style={{ width: '100%', height: '100%'}} />
                        </View>
                        <Text style={{ fontSize: 18, fontFamily: theme.fonts.RobotoRegular, marginLeft: 16, color: 'black' }}>About App</Text>
                    </TouchableOpacity>

              <TouchableOpacity onPress={logout} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
                        <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', borderRadius: 10 }}>
                            <Feather name="arrow-left-circle" color="white" size={25} />
                        </View>
                        <Text style={{ fontSize: 18, fontFamily: theme.fonts.RobotoRegular, marginLeft: 16, color: 'black' }}>Logout</Text>
              </TouchableOpacity>   

          </View>

      </ScrollView>
    </View>
  )
}