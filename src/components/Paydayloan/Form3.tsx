import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import theme from '../../utils/theme'
import { Input, Datepicker, Select } from '@ui-kitten/components'
import { FormikProps } from 'formik'
import { DefualtPaydayloanValues } from '../../utils/paydayloanDefaultvalues'
import { Feather } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'

interface IProps {
    handleChange: Function;
    handleBlur: Function;
    errors: any,
    touched: any;
    values: DefualtPaydayloanValues;
    setFieldTouched: Function;
    setFieldValue: Function;
}

export default function Form3({ handleChange, handleBlur, errors, values, setFieldTouched, touched, setFieldValue }: IProps) {
    const status = [
        `Partime`,
        `Fulltime`,
        `Retired`,
        `Self Employed`,
        `Temporary Contract`,
        `Outsourced Contract`
    ];

  return (
    <ScrollView style={{ paddingBottom: 50 }}>
      <View style={{ width: '100%', height: 100, alignItems: 'center', justifyContent: 'center',  }}>
        <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 20, color: theme.primaryColor }}>Employment Info</Text>
        <Text style={{ fontFamily: theme.fonts.RobotoRegular, fontSize: 16, color: 'grey' }}>Enter the persons employment information</Text>
      </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Employment Status</Text>
            <Picker
                  selectedValue={values.employment_status}
                  onValueChange={(value) => {setFieldValue('employment_status', value, true)}}
                  style={{ width: '100%', height: 55, backgroundColor: 'whitesmoke', borderRadius: 5, borderWidth: 1, borderColor: 'grey', color: 'grey' }}
                //   onChangeText={handleChange('Means_of_ID')}
                  
                  onFocus={() => setFieldTouched('employment_status', true, true)}
            >
                {status.map((item, index) => (
                    <Picker.Item key={`${index.toString()}`} label={item} value={index+1} />
                ))}
            </Picker>
                  {touched.employment_status && errors.employment_status && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.employment_status}</Text>
            )}
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Current Employer</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.current_employer}
                  onChangeText={handleChange('current_employer')}
                  onBlur={handleBlur('current_employer')}
                  onFocus={() => setFieldTouched('current_employer', true, true)}
                  />
                  {touched.current_employer && errors.current_employer && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.current_employer}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Current Employer Address</Text>
            <Input 
                  size="large" 
                  keyboardType="numbers-and-punctuation"
                  value={values.current_employer_address}
                  onChangeText={handleChange('current_employer_address')}
                  onBlur={handleBlur('current_employer_address')}
                  onFocus={() => setFieldTouched('current_employer_address', true, true)}
                  />
                  {touched.current_employer_address && errors.current_employer_address && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.current_employer_address}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Current Employer Landmark</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.current_employer_landmark}
                  onChangeText={handleChange('current_employer_landmark')}
                  onBlur={handleBlur('current_employer_landmark')}
                  onFocus={() => setFieldTouched('current_employer_landmark', true, true)}
                  />
                  {touched.current_employer_landmark && errors.current_employer_landmark && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.current_employer_landmark}</Text>
            )}
        </View>  


        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Current Employer State</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.current_employer_state}
                  onChangeText={handleChange('current_employer_state')}
                  onBlur={handleBlur('current_employer_state')}
                  onFocus={() => setFieldTouched('current_employer_state', true, true)}
                  />
                  {touched.current_employer_state && errors.current_employer_state && (
                <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.current_employer_state}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Employer LGA</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  onChangeText={handleChange('current_employer_LGA')}
                  value={values.current_employer_LGA}
                  onBlur={handleBlur('current_employer_LGA')}
                  onFocus={() => setFieldTouched('current_employer_LGA', true, true)}
                  />
                  {touched.current_employer_LGA && errors.current_employer_LGA && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.current_employer_LGA}</Text>
            )}
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Current Employer Office Phone number</Text>
            <Input 
                  size="large" 
                  keyboardType="number-pad"
                  value={values.current_employer_office_number}
                  onChangeText={handleChange('current_employer_office_number')}
                  onBlur={handleBlur('current_employer_office_number')}
                  onFocus={() => setFieldTouched('current_employer_office_number', true, true)}
                  />
                  {touched.current_employer_office_number && errors.current_employer_office_number && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.current_employer_office_number}</Text>
            )}
        </View> 

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Staff ID</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.staff_id}
                  onChangeText={handleChange('staff_id')}
                  onBlur={handleBlur('staff_id')}
                  onFocus={() => setFieldTouched('staff_id', true, true)}
                  />
                  {touched.staff_id && errors.staff_id && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.staff_id}</Text>
            )}
        </View> 

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Department</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.department}
                  onChangeText={handleChange('department')}
                  onBlur={handleBlur('department')}
                  onFocus={() => setFieldTouched('department', true, true)}
                  />
                  {touched.department && errors.department && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.department}</Text>
            )}
        </View>  

        {/* <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>ID Number</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  onChangeText={handleChange('ID_number')}
                  onBlur={handleBlur('ID_number')}
                  onFocus={() => setFieldTouched('ID_number', true, true)}
                  />
                  {touched.ID_number && errors.ID_number && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.ID_number}</Text>
            )}
        </View>   */}

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Job Title</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.job_title}
                  onChangeText={handleChange('job_title')}
                  onBlur={handleBlur('job_title')}
                  onFocus={() => setFieldTouched('job_title', true, true)}
                  />
                  {touched.job_title && errors.job_title && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.job_title}</Text>
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
                  />
                  {touched.alt_number && errors.alt_number && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.alt_number}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Date Employed</Text>
            <Datepicker 
                  size="large" 
                  date={values.date_employed as any}
                  max={new Date()}
                  placeholder="Date of Birth"
                  onSelect={(date) => {setFieldValue('date_employed', date, true)}}
                  onFocus={() => setFieldTouched('date_employed', true, true)}
                  accessoryRight={<Feather name="calendar" color={theme.primaryColor} size={25} />}
                  />
                  {touched.date_employed && errors.date_employed && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.date_employed}</Text>
            )}
        </View>  


        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Previous Employer</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.previous_employer}
                  onChangeText={handleChange('previous_employer')}
                  onBlur={handleBlur('previous_employer')}
                  onFocus={() => setFieldTouched('previous_employer', true, true)}
                  />
                  {touched.previous_employer && errors.previous_employer && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.previous_employer}</Text>
            )}
        </View> 
  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Previous Employer Address</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.previous_employer_address}
                  onChangeText={handleChange('previous_employer_address')}
                  onBlur={handleBlur('previous_employer_address')}
                  onFocus={() => setFieldTouched('previous_employer_address', true, true)}
                  />
                  {touched.previous_employer_address && errors.previous_employer_address && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.previous_employer_address}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Jobs in the past 5 years</Text>
            <Input 
                  size="large" 
                  keyboardType="number-pad"
                  value={values.jobs_in_past_5_years.toString()}
                  onChangeText={handleChange('jobs_in_past_5_years')}
                  onBlur={handleBlur('jobs_in_past_5_years')}
                  onFocus={() => setFieldTouched('jobs_in_past_5_years', true, true)}
                  />
                  {touched.jobs_in_past_5_years && errors.jobs_in_past_5_years && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.jobs_in_past_5_years}</Text>
            )}
        </View> 


    </ScrollView>
  )
}