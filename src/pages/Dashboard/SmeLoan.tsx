import { View, Text, ScrollView, Pressable, Alert } from 'react-native'
import React, {useState} from 'react'
import { WebView } from 'react-native-webview'
import Navbar from '../../components/Navbar'
import theme from '../../utils/theme'
import { Input } from '@ui-kitten/components'
import navigation from '../../navigation'
import * as yup from 'yup'
import {useFormik} from 'formik'
import { IServerReturn } from '../../types/ApiReturnType'
import {useRecoilState} from 'recoil'
import { AgentAtom } from '../../states/agent'
import {Spinner} from '@ui-kitten/components'
import { url } from '../../utils/url'

// validation schema
const validationSchema = yup.object({
    email: yup.string().required('this field is required').email(),
    phone: yup.string().required('this field is required').max(11),
    business_name: yup.string().required('This field is required'),
    business_address: yup.string().required('This field is required'),
    RC_number: yup.string().required('This field required'),
    TIN_number: yup.string().required('This field is required'),
    business_up_time: yup.string().required('This field is required'),
    purpose_of_loan: yup.string().required('This field is required'),
  });

export default function SmeLoan({navigation}: any) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useRecoilState(AgentAtom);

    const formik = useFormik({
        initialValues: {
            business_name: '',
            business_address: '',
            RC_number: '',
            TIN_number: '',
            business_up_time: '',
            purpose_of_loan: '',
            email: '',
            phone: '',
          },
          onSubmit: () => {},
          validationSchema
    });

    const submit = async () => {
        if (!formik.dirty) {
          Alert.alert('Warning', 'Please fillin the form to continue')
        }else if(!formik.isValid) {
          Alert.alert('Warning', 'You have to fill in the form correctly to create an SME loan');
        }else {
          // make request
          setLoading(true);
          const values = {...formik.values, agent_id:user.id, draft: false, type: 2};
    
          console.log(values);
    
          const request = await fetch(`${url}user/createSMEloan`, {
            method: 'post',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify(values)
          });
    
          const json = await request.json() as IServerReturn;
          setLoading(false);
    
          if (json.statusCode === 200) {
              Alert.alert('Message', json.successMessage);
              navigation.navigate('dashboard');
            // await queryclient.invalidateQueries();
          }else {
            Alert.alert('Error', json.errorMessage);
          }
    
        }
      }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Navbar />

      <View style={{ width: '100%', height: '10%', backgroundColor: theme.primaryColor, paddingHorizontal: theme.majorPadding }}>
          <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, color: 'white', fontSize: 22 }}>SME Loan Application</Text>
          <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'whitesmoke', fontSize: 18 }}>Fill in the form to complete the loan application</Text>
      </View>

      <View style={{ flex: 1 }}>
          <ScrollView
          contentContainerStyle={{ paddingVertical: theme.majorPadding, paddingHorizontal: theme.majorPadding }}
          >

              <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, color: 'black', fontSize: 22 }}>Business Information</Text>
              <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Tell us about the business by completing the form below</Text>

              <View style={{ marginTop: 20 }}>
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>User email</Text>
                  <Input 
                  size="large" 
                  keyboardType="email-address"
                  onChangeText={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                  onFocus={() => formik.setFieldTouched('email', true, true)}
                  />
                  {formik.touched.email && formik.errors.email && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{formik.errors.email}</Text>
                  )}
              </View>

              <View style={{ marginTop: 20 }}>
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>User phone</Text>
                  <Input 
                  size="large" 
                  keyboardType="number-pad"
                  onChangeText={formik.handleChange('phone')}
                  onBlur={formik.handleBlur('phone')}
                  onFocus={() => formik.setFieldTouched('phone', true, true)}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{formik.errors.phone}</Text>
                  )}
              </View>

              <View style={{ marginTop: 20 }}>
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Business Name</Text>
                  <Input 
                  size="large" 
                  onChangeText={formik.handleChange('business_name')}
                  onBlur={formik.handleBlur('business_name')}
                  onFocus={() => formik.setFieldTouched('business_name', true, true)}
                  />
                  {formik.touched.business_name && formik.errors.business_name && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{formik.errors.business_name}</Text>
                  )}
              </View>

              <View style={{ marginTop: 20 }}>
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Business Address</Text>
                  <Input 
                  size="large" 
                  onChangeText={formik.handleChange('business_address')}
                  onBlur={formik.handleBlur('business_address')}
                  onFocus={() => formik.setFieldTouched('business_address', true, true)}
                  />
                  {formik.touched.business_address && formik.errors.business_address && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{formik.errors.business_address}</Text>
                  )}
              </View>

              <View style={{ marginTop: 20 }}>
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>RC Number</Text>
                  <Input 
                  size="large" 
                  onChangeText={formik.handleChange('RC_number')}
                  onBlur={formik.handleBlur('RC_number')}
                  onFocus={() => formik.setFieldTouched('RC_number', true, true)}
                  />
                  {formik.touched.RC_number && formik.errors.RC_number && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{formik.errors.RC_number}</Text>
                  )}
              </View>

              <View style={{ marginTop: 20 }}>
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>TIN Number</Text>
                  <Input 
                  size="large" 
                  onChangeText={formik.handleChange('TIN_number')}
                  onBlur={formik.handleBlur('TIN_number')}
                  onFocus={() => formik.setFieldTouched('TIN_number', true, true)}
                  />
                  {formik.touched.TIN_number && formik.errors.TIN_number && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{formik.errors.TIN_number}</Text>
                  )}
              </View>

              <View style={{ marginTop: 20 }}>
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>How long has ypur business been in exisitence (in years)</Text>
                  <Input size="large" keyboardType="number-pad" 
                    onChangeText={formik.handleChange('business_up_time')}
                    onBlur={formik.handleBlur('business_up_time')}
                    onFocus={() => formik.setFieldTouched('business_up_time', true, true)}
                  />
                  {formik.touched.business_up_time && formik.errors.business_up_time && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{formik.errors.business_up_time}</Text>
                  )}
              </View>

              <View style={{ marginTop: 20 }}>
                  <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Purpose of loan</Text>
                  <Input multiline
                    style={{ height: 100 }}
                    textStyle={{ minHeight: 100 }}
                    onChangeText={formik.handleChange('purpose_of_loan')}
                    onBlur={formik.handleBlur('purpose_of_loan')}
                    onFocus={() => formik.setFieldTouched('purpose_of_loan', true, true)}
                  />
                  {formik.touched.purpose_of_loan && formik.errors.purpose_of_loan && (
                      <Text style={{ marginTop: 15, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{formik.errors.purpose_of_loan}</Text>
                  )}
              </View>

              <Pressable 
                onPress={submit}
                style={{ width: '100%', height: 55, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.primaryColor, marginTop: 40, marginBottom: 60, borderRadius: 5 }}>
                    {!loading && <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'white', fontSize: 18 }}>Submit</Text>}
                    {loading && <Spinner status="control" />}
                </Pressable>
              
          </ScrollView>
      </View>

    </View>
  )
}