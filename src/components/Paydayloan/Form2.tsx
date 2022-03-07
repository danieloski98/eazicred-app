import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import theme from '../../utils/theme'
import { Input, Datepicker, Select } from '@ui-kitten/components'
import { FormikProps } from 'formik'
import { DefualtPaydayloanValues } from '../../utils/paydayloanDefaultvalues'
import { Feather } from '@expo/vector-icons'

interface IProps {
    handleChange: Function;
    handleBlur: Function;
    errors: any,
    touched: any;
    values: DefualtPaydayloanValues;
    setFieldTouched: Function;
    setFieldValue: Function;
}

export default function Form2({ handleChange, handleBlur, errors, values, setFieldTouched, touched, setFieldValue }: IProps) {
  return (
    <ScrollView style={{ paddingBottom: 50 }}>
      <View style={{ width: '100%', height: 100, alignItems: 'center', justifyContent: 'center',  }}>
        <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 20, color: theme.primaryColor }}>Location Info</Text>
        <Text style={{ fontFamily: theme.fonts.RobotoRegular, fontSize: 16, color: 'grey' }}>Information about where you are located</Text>
      </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>LGA of residence</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.LGA_of_residence}
                  onChangeText={handleChange('LGA_of_residence')}
                  onBlur={handleBlur('LGA_of_residence')}
                  onFocus={() => setFieldTouched('LGA_of_residence', true, true)}
                  />
                  {touched.LGA_of_residence && errors.LGA_of_residence && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.LGA_of_residence}</Text>
            )}
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Landmark</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.landmark}
                  onChangeText={handleChange('landmark')}
                  onBlur={handleBlur('landmark')}
                  onFocus={() => setFieldTouched('landmark', true, true)}
                  />
                  {touched.landmark && errors.landmark && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.landmark}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>State</Text>
            <Input 
                  size="large" 
                  keyboardType="numbers-and-punctuation"
                  value={values.state}
                  onChangeText={handleChange('state')}
                  onBlur={handleBlur('state')}
                  onFocus={() => setFieldTouched('state', true, true)}
                  />
                  {touched.state && errors.state && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.state}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Home Address</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.home_address}
                  onChangeText={handleChange('home_address')}
                  onBlur={handleBlur('home_address')}
                  onFocus={() => setFieldTouched('home_address', true, true)}
                  />
                  {touched.home_address && errors.home_address && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.home_address}</Text>
            )}
        </View>  

    </ScrollView>
  )
}