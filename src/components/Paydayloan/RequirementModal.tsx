import { View, Text, Modal } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'
import theme from '../../utils/theme'

export default function RequirementModal({open, close}: {open: boolean, close: Function}) {
  return (
    <Modal visible={open} transparent style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.452)', padding: 20, justifyContent: 'center', alignItems: 'center' }}>

          {/* modal main body */}

            <View style={{ width: '100%', height: '60%', backgroundColor: 'white', padding: 20 }}>
                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                  <Feather name="x-circle" color="grey" size={30} onPress={() => close(false)} />
                </View>
                <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 20 }}>Required Documents</Text>
                <Text style={{ fontFamily: theme.fonts.RobotoRegular, fontSize: 16, color: 'grey' }}>Before you proceed make sure you have the following Documents</Text>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: 25, height: 25, borderRadius: 15, backgroundColor: theme.primaryColor, justifyContent: 'center', alignItems: 'center'}}>
                    <Feather name="check" color="white" size={20} />
                  </View>  
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18, marginLeft: 10 }}>Passport</Text>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: 25, height: 25, borderRadius: 15, backgroundColor: theme.primaryColor, justifyContent: 'center', alignItems: 'center'}}>
                    <Feather name="check" color="white" size={20} />
                  </View>  
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18, marginLeft: 10 }}>Company ID</Text>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: 25, height: 25, borderRadius: 15, backgroundColor: theme.primaryColor, justifyContent: 'center', alignItems: 'center'}}>
                    <Feather name="check" color="white" size={20} />
                  </View>  
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18, marginLeft: 10 }}>Utility Bill</Text>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: 25, height: 25, borderRadius: 15, backgroundColor: theme.primaryColor, justifyContent: 'center', alignItems: 'center'}}>
                    <Feather name="check" color="white" size={20} />
                  </View>  
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18, marginLeft: 10 }}>Government ID</Text>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: 25, height: 25, borderRadius: 15, backgroundColor: theme.primaryColor, justifyContent: 'center', alignItems: 'center'}}>
                    <Feather name="check" color="white" size={20} />
                  </View>  
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18, marginLeft: 10 }}>6 Months Bank Statment</Text>
                </View>

            </View>

        </View>
    </Modal>
  )
}