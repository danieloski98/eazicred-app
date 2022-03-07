import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import theme from '../../utils/theme'

interface IProps {
    pickFile: Function;
    passport: boolean;
    govID: boolean;
    letter: boolean;
    statement: boolean;
    utility: boolean;
    company: boolean;
} 

export default function Form5({pickFile, passport, govID, letter, statement, utility, company}: IProps) {
  return (
    <ScrollView style={{ paddingBottom: 20 }}>
      <View style={{ width: '100%', height: 100, alignItems: 'center', justifyContent: 'center',  }}>
        <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 20, color: theme.primaryColor }}>Upload Files</Text>
        <Text style={{ fontFamily: theme.fonts.RobotoRegular, fontSize: 16, color: 'grey' }}>Upload the neccessary documents</Text>
      </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Passport</Text>
            <Pressable onPress={() => pickFile('passport')} style={{ width: '100%', height: 55, backgroundColor: passport ? theme.primaryColor:'lightgrey', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 16, color: 'white' }}>
                    {passport ? 'File Picked':'Pick File'}
                </Text>
            </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Government ID</Text>
            <Pressable onPress={() => pickFile('govID')} style={{ width: '100%', height: 55, backgroundColor: govID ? theme.primaryColor:'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 16, color: 'white' }}>
                    {govID ? 'File Picked':'Pick File'}
                </Text>            
            </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Letter of employment</Text>
            <Pressable onPress={() => pickFile('letter')} style={{ width: '100%', height: 55, backgroundColor: letter ? theme.primaryColor:'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 16, color: 'white' }}>
                    {letter ? 'File Picked':'Pick File'}
                </Text>
            </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>6 months bank statement</Text>
            <Pressable onPress={() => pickFile('statement')} style={{ width: '100%', height: 55, backgroundColor: statement ? theme.primaryColor:'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 16, color: 'white' }}>
                    {statement ? 'File Picked':'Pick File'}
                </Text>
            </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Utility bill</Text>
            <Pressable onPress={() => pickFile('utility')} style={{ width: '100%', height: 55, backgroundColor: utility ? theme.primaryColor:'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 16, color: 'white' }}>
                    {utility ? 'File Picked':'Pick File'}
                </Text>
            </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Company ID</Text>
            <Pressable onPress={() => pickFile('company')} style={{ width: '100%', height: 55, backgroundColor:company? theme.primaryColor:'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 16, color: 'white' }}>
                    {company ? 'File Picked':'Pick File'}
                </Text>
            </Pressable>
        </View>
    </ScrollView>
  )
}