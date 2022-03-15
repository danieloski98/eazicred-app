import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import theme from '../../utils/theme'
import { Input, Datepicker, Select } from '@ui-kitten/components'
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

export default function Form3({ handleChange, handleBlur, errors, values, setFieldTouched, touched, setFieldValue }: IProps) {
    const types = [
        `None`,
        `Mortgage`,
        `Over Draft`,
        `Car Loan`,
        `Business Laon`,
        `Credit Card Loan`,
        `Personal Loan`
    ];

  return (
    <ScrollView style={{ paddingBottom: 50 }}>
      <View style={{ width: '100%', height: 100, alignItems: 'center', justifyContent: 'center',  }}>
        <Text style={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 20, color: theme.primaryColor }}>Loan Details</Text>
        <Text style={{ fontFamily: theme.fonts.RobotoRegular, fontSize: 16, color: 'grey' }}>Information about the loan application</Text>
      </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Next Paydate</Text>
            <Datepicker 
                  size="large" 
                  date={values.current_paydate as any}
                  min={new Date()}
                  placeholder="Next date of payment"
                  onSelect={(date) => {setFieldValue('current_paydate', date, true)}}
                  onFocus={() => setFieldTouched('current_paydate', true, true)}
                  accessoryRight={<Feather name="calendar" color={theme.primaryColor} size={25} />}
                  />
                  {touched.current_paydate && errors.current_paydate && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.current_paydate}</Text>
            )}
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Existing Loan</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.existing_loan.toString()}
                  onChangeText={handleChange('existing_loan')}
                  onBlur={handleBlur('existing_loan')}
                  onFocus={() => setFieldTouched('existing_loan', true, true)}
                  />
                  {touched.existing_loan && errors.existing_loan && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.existing_loan}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Existing Loan Type</Text>
            <Picker
                  selectedValue={values.existing_loan_type}
                  onValueChange={(value) => {setFieldValue('existing_loan_type', value, true)}}
                  style={{ width: '100%', height: 55, backgroundColor: 'whitesmoke', borderRadius: 5, borderWidth: 1, borderColor: 'grey', color: 'grey' }}
                //   onChangeText={handleChange('Means_of_ID')}
                  
                  onFocus={() => setFieldTouched('employment_status', true, true)}
            >
                {types.map((item, index) => (
                    <Picker.Item key={`${index.toString()}`} label={item} value={index} />
                ))}
            </Picker>
                  {touched.existing_loan_type && errors.existing_loan_type && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.existing_loan_type}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Loan amount applying for</Text>
            <Input 
                  size="large" 
                  keyboardType="numbers-and-punctuation"
                  value={values.loan_amount.toString()}
                  onChangeText={handleChange('loan_amount')}
                  onBlur={handleBlur('loan_amount')}
                  onFocus={() => setFieldTouched('loan_amount', true, true)}
                  />
                  {touched.loan_amount && errors.loan_amount && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.loan_amount}</Text>
            )}
        </View>  


        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Loan Tenure</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.loan_tenure.toString()}
                  onChangeText={handleChange('loan_tenure')}
                  onBlur={handleBlur('loan_tenure')}
                  onFocus={() => setFieldTouched('loan_tenure', true, true)}
                  />
                  {touched.loan_tenure && errors.loan_tenure && (
                <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.loan_tenure}</Text>
            )}
        </View>  

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Account Number</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.account_number}
                  onChangeText={handleChange('account_number')}
                  onBlur={handleBlur('account_number')}
                  onFocus={() => setFieldTouched('account_number', true, true)}
                  />
                  {touched.account_number && errors.account_number && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.account_number}</Text>
            )}
        </View> 

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Account Name</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.account_name}
                  onChangeText={handleChange('account_name')}
                  onBlur={handleBlur('account_name')}
                  onFocus={() => setFieldTouched('account_name', true, true)}
                  />
                  {touched.account_name && errors.account_name && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.account_name}</Text>
            )}
        </View> 

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: theme.fonts.RobotoRegular, color: 'grey', fontSize: 18 }}>Bank name</Text>
            <Input 
                  size="large" 
                  keyboardType="email-address"
                  value={values.bank_name}
                  onChangeText={handleChange('bank_name')}
                  onBlur={handleBlur('bank_name')}
                  onFocus={() => setFieldTouched('bank_name', true, true)}
                  />
                  {touched.bank_name && errors.bank_name && (
                      <Text style={{ marginTop: 5, color: 'red', fontFamily: theme.fonts.RobotoRegular }}>{errors.bank_name}</Text>
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


    </ScrollView>
  )
}