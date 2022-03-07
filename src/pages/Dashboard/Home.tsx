import { View, Text, Dimensions, StatusBar, Image, ScrollView, StyleSheet, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import theme from '../../utils/theme'
import {Feather, FontAwesome5} from '@expo/vector-icons'
import Navbar from '../../components/Navbar'
import LoantypeModal from '../../components/LoantypeModal'
import { useRecoilState } from 'recoil'
import { AgentAtom } from '../../states/agent'

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useRecoilState(AgentAtom);

  const changeVisibiltiy = (item: boolean) => {
    setShowModal(item);
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* modal */}
      <LoantypeModal visible={showModal} changeVisibility={changeVisibiltiy} />

      {/* fab button */}

      <Pressable onPress={() => setShowModal(true)} style={[StyleSheet.absoluteFillObject, { width: 70, height: 70, borderRadius: 50, backgroundColor: theme.primaryColor, zIndex: 2, top: (HEIGHT/100)*(Platform.OS === 'android' ? 86:82), left: (WIDTH/100*76), justifyContent: 'center', alignItems: 'center', elevation: 6 }]}>
        <Feather name="plus" size={40} color="white" />
      </Pressable>

      <Navbar />

      <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: theme.majorPadding }}>
        <View style={{ width: '100%', height: 150, backgroundColor: 'whitesmoke', borderWidth: 0.1, borderColor: 'lightgrey', marginBottom: 20, flexDirection: 'row', paddingHorizontal: theme.majorPadding}}>
          <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesome5 name="piggy-bank" color={theme.primaryColor} size={60} />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, color: theme.primaryColor, fontSize: 20 }}>Total Loans Applied</Text>
            <Text style={{ fontFamily: theme.fonts.RobotoLight, color: 'grey', fontSize: 44, marginTop: 10 }}>{user.smeloans.length + user.paydayloans.length}</Text>
          </View>
        </View>

        <View style={{ width: '100%', height: 150, backgroundColor: 'whitesmoke', borderWidth: 0.1, borderColor: 'lightgrey', marginBottom: 20, flexDirection: 'row', paddingHorizontal: theme.majorPadding }}>
          <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesome5 name="user-friends" color={theme.primaryColor} size={60} />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, color: theme.primaryColor, fontSize: 20, textAlign: 'center' }}>Total PaydayLoans Applied</Text>
            <Text style={{ fontFamily: theme.fonts.RobotoLight, color: 'grey', fontSize: 44, marginTop: 10 }}>{user.paydayloans.length}</Text>
          </View>
        </View>

        <View style={{ width: '100%', height: 150, backgroundColor: 'whitesmoke', borderWidth: 0.1, borderColor: 'lightgrey', marginBottom: 20, flexDirection: 'row', paddingHorizontal: theme.majorPadding }}>
          <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesome5 name="briefcase" color={theme.primaryColor} size={60} />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, color: theme.primaryColor, fontSize: 20, textAlign: 'center' }}>Total SMELoans Applied</Text>
            <Text style={{ fontFamily: theme.fonts.RobotoLight, color: 'grey', fontSize: 44, marginTop: 10 }}>{user.smeloans.length}</Text>
          </View>
        </View>

        <View style={{ width: '100%', height: 80, backgroundColor: 'transparent', marginBottom: 20 }}></View>
      </ScrollView>
    </View>
  )
}