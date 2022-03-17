import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import theme from '../../utils/theme'
import { Input, Datepicker, Select, SelectItem, IndexPath } from '@ui-kitten/components'
import { FormikProps } from 'formik'
import { DefualtPaydayloanValues } from '../../utils/paydayloanDefaultvalues'
import { Feather } from '@expo/vector-icons'
import {Picker} from '@react-native-picker/picker'

interface IProps {
    handleChange: Function;
    handleBlur: Function;
    errors: any,
    touched: any;
    values: DefualtPaydayloanValues;
    setFieldTouched: Function;
    setFieldValue: Function;
}
const now = new Date();
const MINDATE = new Date(now.getFullYear() - 200, now.getMonth(), now.getDate() - 2);

export default function FirstForm({ handleChange, handleBlur, errors, values, setFieldTouched, touched, setFieldValue }: IProps) {
    const ids = [
        `Driver's Licence`,
        `NIN card`,
        `Passport`,
        `Voters Card`,
        `National Card`
    ];
    const status = [
        `Single`,
        `Married`,
        `Divorced`,
        `Seperated`,
        `Widowed`
    ];


  return (
    <ScrollView style={{ paddingBottom: 50 }}>
      <View style={{ width: '100%', height: 100, alignItems: 'center', justifyContent: 'center',  }}>
        <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 20, color: theme.primaryColor }}>Personal Info</Text>
      </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>First name</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.firstname}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  onFocus={() => setFieldTouched('firstname', true, true)}
                  />
                  {touched.firstname && errors.firstname && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.firstname}</Text>
            )}
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Last name</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.lastname}
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  onFocus={() => setFieldTouched('lastname', true, true)}
                  />
                  {touched.firstname && errors.lastname && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.lastname}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>phone</Text>
            <Input 
                  size="large" 
                  keyboardType="numbers-and-punctuation"
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  onFocus={() => setFieldTouched('phone', true, true)}
                  />
                  {touched.phone && errors.phone && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.phone}</Text>
            )}
        </View>  


        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Alt. number</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  onChangeText={handleChange('alt_number')}
                  onBlur={handleBlur('alt_number')}
                  onFocus={() => setFieldTouched('alt_number', true, true)}
                  style={{ backgroundColor: 'whitesmoke'}}
                  />
                  {touched.alt_number && errors.alt_number && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.alt_number}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Email</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  onFocus={() => setFieldTouched('email', true, true)}
                  />
                  {touched.email && errors.email && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.email}</Text>
            )}
        </View>  

        {/* date of birth */}

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Date of Birth</Text>
            <Datepicker 
                  size="large" 
                  date={values.DOB as any}
                  min={MINDATE}
                  max={new Date()}
                  placeholder="Date of Birth"
                  onSelect={(date) => {setFieldValue('DOB', date, true)}}
                  onFocus={() => setFieldTouched('DOB', true, true)}
                  accessoryRight={<Feather name="calendar" color={theme.primaryColor} size={25} />}
                  />
                  {touched.DOB && errors.DOB && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.DOB}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>BVN</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.BVN}
                  onChangeText={handleChange('BVN')}
                  onBlur={handleBlur('BVN')}
                  onFocus={() => setFieldTouched('BVN', true, true)}
                  />
                  {touched.BVN && errors.BVN && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.BVN}</Text>
            )}
        </View> 

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Means of ID</Text>
            <Picker
                  selectedValue={values.Means_of_ID}
                  onValueChange={(value) => {setFieldValue('Means_of_ID', value, true)}}
                  style={{ width: '100%', height: 55, backgroundColor: 'whitesmoke', borderRadius: 5, borderWidth: 1, borderColor: 'grey', color: 'grey' }}
                //   onChangeText={handleChange('Means_of_ID')}
                  onBlur={handleBlur('Means_of_ID')}
                  onFocus={() => setFieldTouched('Means_of_ID', true, true)}
            >
                {ids.map((item, index) => (
                    <Picker.Item key={`${index.toString()}`} label={item} value={item} />
                ))}
            </Picker>
                  {touched.Means_of_ID && errors.Means_of_ID && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.Means_of_ID}</Text>
            )}
        </View> 

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Date issued</Text>
            <Datepicker 
                  size="large" 
                  date={values.date_issued}
                  min={MINDATE}
                  placeholder="Date issued"
                  onSelect={(date) => {setFieldValue('date_issued', date, true)}}
                  onFocus={() => setFieldTouched('date_issued', true, true)}
                  accessoryRight={<Feather name="calendar" color={theme.primaryColor} size={25} />}
                  />
                  {touched.date_issued && errors.date_issued && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.date_issued}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>ID Number</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.ID_number}
                  onChangeText={handleChange('ID_number')}
                  onBlur={handleBlur('ID_number')}
                  onFocus={() => setFieldTouched('ID_number', true, true)}
                  />
                  {touched.ID_number && errors.ID_number && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.ID_number}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Expiry Date</Text>
            <Datepicker 
                  size="large" 
                  date={values.expiry_date}
                  min={MINDATE}
                  placeholder="Expiration Date"
                  onSelect={(date) => {setFieldValue('expiry_date', date, true)}}
                  onFocus={() => setFieldTouched('expiry_date', true, true)}
                  accessoryRight={<Feather name="calendar" color={theme.primaryColor} size={25} />}
                  />
                  {touched.date_issued && errors.date_issued && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.date_issued}</Text>
            )}
        </View>  


        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Marital Status</Text>
            <Picker
                  selectedValue={values.marital_status}
                  onValueChange={(value, index) => {setFieldValue('marital_status', value, true)}}
                  style={{ width: '100%', height: 55, backgroundColor: 'whitesmoke', borderRadius: 5, borderWidth: 1, borderColor: 'grey', color: 'grey' }}
                //   onChangeText={handleChange('Means_of_ID')}
                  onBlur={handleBlur('Means_of_ID')}
                  onFocus={() => setFieldTouched('Means_of_ID', true, true)}
            >
                {status.map((item, index) => (
                    <Picker.Item key={`${index.toString()}`} label={item} value={index+1} />
                ))}
            </Picker>
                  {touched.marital_status && errors.marital_status && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.marital_status}</Text>
            )}
        </View> 

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Next of Kin firstname</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  onChangeText={handleChange('next_of_kin_firstname')}
                  onBlur={handleBlur('next_of_kin_firstname')}
                  onFocus={() => setFieldTouched('next_of_kin_firstname', true, true)}
                  />
                  {touched.next_of_kin_firstname && errors.next_of_kin_firstname && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.next_of_kin_firstname}</Text>
            )}
        </View> 

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Next of Kin lastname</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  onChangeText={handleChange('next_of_kin_surname')}
                  onBlur={handleBlur('next_of_kin_surname')}
                  onFocus={() => setFieldTouched('next_of_kin_surname', true, true)}
                  />
                  {touched.next_of_kin_surname && errors.next_of_kin_surname && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.next_of_kin_surname}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Next of Kin Relationship</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  onChangeText={handleChange('next_of_kin_relationship')}
                  onBlur={handleBlur('next_of_kin_relationship')}
                  onFocus={() => setFieldTouched('next_of_kin_relationship', true, true)}
                  />
                  {touched.next_of_kin_relationship && errors.next_of_kin_relationship && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.next_of_kin_relationship}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Next of Kin phone</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  onChangeText={handleChange('next_of_kin_phone')}
                  onBlur={handleBlur('next_of_kin_phone')}
                  onFocus={() => setFieldTouched('next_of_kin_phone', true, true)}
                  />
                  {touched.next_of_kin_phone && errors.next_of_kin_phone && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.next_of_kin_phone}</Text>
            )}
        </View> 

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Next of Kin address</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  onChangeText={handleChange('next_of_kin_address')}
                  onBlur={handleBlur('next_of_kin_address')}
                  onFocus={() => setFieldTouched('next_of_kin_address', true, true)}
                  />
                  {touched.next_of_kin_address && errors.next_of_kin_address && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.next_of_kin_address}</Text>
            )}
        </View>  

    </ScrollView>
  )
}