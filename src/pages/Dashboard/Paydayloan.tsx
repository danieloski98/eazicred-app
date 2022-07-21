import { View, Text, Alert, Pressable, Modal, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Stepper from "react-native-stepper-ui";
import theme from '../../utils/theme';
import { Formik, useFormik } from 'formik';
import { validationSchema } from '../../utils/paydayloanvalidationschema';
import { DefualtPaydayloanValues } from '../../utils/paydayloanDefaultvalues';
import FirstForm from '../../components/Paydayloan/FirstForm';
import Form2 from '../../components/Paydayloan/Form2';
import Form3 from '../../components/Paydayloan/Form3';
import Form4 from '../../components/Paydayloan/Form4';
import Form5 from '../../components/Paydayloan/Form5';
import * as DocumentPicker from 'expo-document-picker';
import SnackBar from 'react-native-snackbar-component';
import { IServerReturn } from '../../types/ApiReturnType';
import { useRecoilState } from 'recoil';
import { AgentAtom } from '../../states/agent';
import { url } from '../../utils/url';
import { useNavigation } from '@react-navigation/native';
import RequirementModal from '../../components/Paydayloan/RequirementModal';

interface IFile {
    mimeType: string;
    name: string;
    size: number;
    type: string;
    uri: string;
}


export default function Paydayloan() {
    const [documents, setDocument] = useState([] as Array<any>);
    const [errorText, setError] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [showModal, setShowModal] = useState(true);
    
    // files
    const [passport, setPassport] = useState(false);
    const [passportF, setPassportF] = useState({mimeType: '', name: '', type: '', uri: ''} as IFile);

    const [govID, setGov] = useState(false);
    const [govIDF, setGovIDF] = useState({mimeType: '', name: '', type: '', uri: ''} as IFile);

    const [letter, setLetter] = useState(false);
    const [letterF, setLetterF] = useState({mimeType: '', name: '', type: '', uri: ''} as IFile);

    const [statement, setStatement] = useState(false);
    const [statementF, setStatementF] = useState({mimeType: '', name: '', type: '', uri: ''} as IFile);

    const [utility, setUtitlity] = useState(false);
    const [utilityF, setUtilityF] = useState({mimeType: '', name: '', type: '', uri: ''} as IFile);

    const [company, setCompany] = useState(false);
    const [companyF, setCompanyF] = useState({mimeType: '', name: '', type: '', uri: ''} as IFile);

    const pickFile = async(file: string) => {
        const doc = await DocumentPicker.getDocumentAsync();;
        if (doc.type === 'cancel') {
            Alert.alert('Message', 'Action cancelled');
        } else {
           
            setDocument(prev => [...prev, doc]);
            switch(file) {
                case 'passport': {
                    setPassport(true);
                    setPassportF(doc as IFile);
                    return;
                }
                case 'govID': {
                    setGov(true);
                    setGovIDF(doc as IFile);
                    return;
                }
                case 'letter': {
                    setLetter(true);
                    setLetterF(doc as IFile);
                    return;
                }
                case 'statement': {
                    setStatement(true);
                    setStatementF(doc as IFile);
                    return;
                }
                case 'utility': {
                    setUtitlity(true);
                    setUtilityF(doc as IFile);
                    return;
                }
                case 'company': {
                    setCompany(true);
                    setCompanyF(doc as IFile);
                    return;
                }
            }
        }
    }
    

  return (
    <Formik
        validationSchema={validationSchema}
        initialValues={DefualtPaydayloanValues}
        onSubmit={() => {}}
    >
        {
             ({ values,  handleBlur, handleChange, setFieldTouched, errors, touched, setFieldValue, dirty, isValid }) => (
                <>
                    <RequirementModal open={showModal} close={setShowModal} />

                    <StepperComponent handleChange={handleChange} handleBlur={handleBlur} setFieldTouched={setFieldTouched} values={values as any} errors={errors} touched={touched} setFieldValue={setFieldValue} pickFile={pickFile} passport={passport} govID={govID} letter={letter} statement={statement} utility={utility} company={company} showSnack={setShowSnackbar} setErrorText={setError} files={documents} dirty={dirty} isValid={isValid} passPortF={passportF} govIDF={govIDF} letterF={letterF} statementF={statementF} utilityF={utilityF} companyF={companyF} />

                    <SnackBar visible={showSnackbar} textMessage={errorText} actionHandler={()=>{setShowSnackbar(false)}} actionText="Close" />

                </>
            )
        }
    </Formik>
  )
}

interface IProps {
    handleChange: Function;
    handleBlur: Function;
    errors: any,
    touched: any;
    values: DefualtPaydayloanValues;
    setFieldTouched: Function;
    setFieldValue: Function;
    pickFile: Function;
    passport: boolean;
    govID: boolean;
    letter: boolean;
    statement: boolean;
    utility: boolean;
    company: boolean;
    showSnack: Function;
    setErrorText: Function;
    files: Array<any>;
    dirty: boolean;
    isValid: boolean;
    passPortF: {};
    govIDF: {};
    letterF: {};
    statementF: {};
    utilityF: {};
    companyF: {};
}

const StepperComponent = ({ handleChange, handleBlur, errors, values, setFieldTouched, touched, setFieldValue, pickFile, passport, govID, letter, statement, utility, company, showSnack, setErrorText, files, dirty, isValid, passPortF, govIDF, letterF, statementF, utilityF, companyF }: IProps) => {

    const [step, setStep] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState('Submitting Data...');
    const [agent, setAgent] = useRecoilState(AgentAtom);
    const navigation = useNavigation<any>();

    const content = [
        <FirstForm handleChange={handleChange} handleBlur={handleBlur} setFieldTouched={setFieldTouched} values={values} errors={errors} touched={touched} setFieldValue={setFieldValue}  />,

        <Form2 handleChange={handleChange} handleBlur={handleBlur} setFieldTouched={setFieldTouched} values={values} errors={errors} touched={touched} setFieldValue={setFieldValue}  />,

        <Form3 handleChange={handleChange} handleBlur={handleBlur} setFieldTouched={setFieldTouched} values={values} errors={errors} touched={touched} setFieldValue={setFieldValue}  />,

        <Form4 handleChange={handleChange} handleBlur={handleBlur} setFieldTouched={setFieldTouched} values={values} errors={errors} touched={touched} setFieldValue={setFieldValue}  />,

        <Form5 pickFile={pickFile} passport={passport} govID={govID} letter={letter} statement={statement} utility={utility} company={company} />
    ];

    const move = () => {
      
        if (!dirty) {
            setErrorText('Please fill in the form to continue');
            showSnack(true);
            
            return
        }
        switch(step){
            case 0: {
                if (errors.firstname ||
                    errors.lastname ||
                    errors.DOB ||
                    errors.BVN ||
                    errors.Means_of_ID ||
                    errors.ID_number ||
                    errors.expiry_date ||
                    errors.phone ||
                    errors.date_issued ||
                    errors.marital_status ||
                    errors.next_of_kin_surname ||
                    errors.next_of_kin_firstname ||
                    errors.next_of_kin_relationship ||
                    errors.next_of_kin_phone ||
                    errors.next_of_kin_address) {
                        setErrorText('Please fill in this section correctly to contiune');
                        showSnack(true);
                        return;
                    } else {
                        
                        setStep(prev => prev + 1);
                        return;
                    }
            }
            case 1: {
                if (errors.state || errors.landmark || errors.LGA_of_residence || errors.home_address) {
                        setErrorText('Please fill in this section correctly to contiune');
                        showSnack(true);
                        return;
                    } else {
                        setStep(prev => prev + 1);
                        return;
                    }
            }
            case 2: {
                if (errors.employment_status ||
                    errors.current_employer ||
                    errors.current_employer_address ||
                    errors.current_employer_landmark ||
                    errors.current_employer_LGA ||
                    errors.current_employer_state ||
                    errors.current_employer_office_number ||
                    errors.department ||
                    errors.date_issued ||
                    errors.job_title) {
                    setErrorText('Please fill in this section correctly to contiune');
                    showSnack(true);
                    return;
                } else {
                    setStep(prev => prev + 1);
                    return;
                }
            }
            case 3: {
                if (errors.current_paydate ||
                    errors.existing_loan ||
                    errors.loan_amount ||
                    errors.loan_tenure ||
                    errors.account_number ||
                    errors.account_name ||
                    errors.bank_name) {
                    setErrorText('Please fill in this section correctly to contiune');
                    showSnack(true);
                    return;
                } else {
                    setStep(prev => prev + 1);
                    return;
                }
            }
            case 4: {
                if (files.length < 6) {
                    setErrorText('Please select all files');
                    showSnack(true);
                } else {
                    //submit
                    Alert.alert('Submitting');
                }
            }
        }
    }


    const submit = async () => {

        if (files.length < 4) {
            Alert.alert('Warning', 'You have to pick the required files to continue');
           return;
        }
        if(!isValid) {
          Alert.alert('Warning', 'You have to fill in the form correctly to continue');
          return;
        }
        
                setShowModal(true);

               
          
                const existing_loan = values['existing_loan'] === 1 ?true:false
          
          
                const existing_loan_type = values['existing_loan_type'];
          
                const date = new Date().toISOString();
      
                
          
                const request1 = await fetch(`${url}user/createpaydayloan`, {
                  method: 'post',
                  headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${agent.token}`
                  },
                  body: JSON.stringify({...values, type: 1, status:1, draft: false, agent_id: agent.id, existing_loan, existing_loan_type, created_at: new Date(date).toDateString(), hear_about_us: 'Agent' }),
                })
          
                const json1 = await request1.json() as IServerReturn;
              
                
                if (json1.statusCode === 200) {
                  setText('Submitting Files...');
                  const formdata = new FormData();
                  //formdata.append('HR_letter_of_confirmation', {name: statementF['name'], uri: statementF['uri'], type: statementF['mimeType']});
                  formdata.append('company_id', {name: companyF['name'], uri: companyF['uri'], type: companyF['mimeType']});
                  formdata.append('government_ID', {name: govIDF['name'], uri: govIDF['uri'], type: govIDF['mimeType']});
                  //formdata.append('letter_of_employment', { name: letterF['name'], uri: letterF['uri'], type: letterF['mimeType']} );
                  formdata.append('passport', {name: passPortF['name'], uri: passPortF['uri'], type: passPortF['mimeType']});
                  formdata.append('utility_bill', { name: utilityF['name'], uri: utilityF['uri'], type: utilityF['mimeType']});
                 
                  try {
                      
                    const request2 = await fetch(`${url}user/uploadpaydayloanfiles/${json1.data.id}`, {
                        method: 'post',
                        headers: {
                         'Content-Type': 'multipart/form-data',
                          authorization: `Bearer ${agent.token}`,
                        },
                        body: formdata,
                      })
                      
                      setShowModal(false);
                      
              
                      const json2 = await request2.json() as IServerReturn;
              
                      if (json2.statusCode === 200) {
                        setShowModal(false);
                        Alert.alert('Success', json2.successMessage);
                        navigation.navigate('dashboard');
                      //   localStorage.removeItem('formdata');
                      //   data.resetForm();
                      }else {
                          Alert.alert('Error', json2.errorMessage);
                          setShowModal(false);
                      }
                  } catch (error) {
                      setShowModal(false);
                      Alert.alert('an error occured');
                  }
                 
          
                }else {
                  setShowModal(false);
                  Alert.alert('Error', json1.errorMessage);
                
                }

       }

    return (
        <View style={{ flex: 1 }}>

          {/* modal */}
          <Modal visible={showModal} animationType="slide" transparent>
                        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.552)', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '80%', flexDirection: 'row', height: 80, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 5  }}>
                                <ActivityIndicator size="large" color={theme.primaryColor} />
                                <Text style={{ fontFamily: theme.fonts.RobotoRegular, fontSize: 18, color: 'grey', marginLeft: 20 }}>{text}</Text>
                            </View>
                        </View>
            </Modal>

        
        <Navbar />
        <Stepper 
          active={step}
          content={content}
          onNext={move}
          onBack={() => setStep(e => e - 1)}
          onFinish={() => submit() }
          showButton={true}
          buttonStyle={{ width: step === 0 ? '100%': '50%', height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.primaryColor }}
          buttonTextStyle={{ fontFamily: theme.fonts.PoppinsSemiBold, fontSize: 16}}
          wrapperStyle={{ padding: 20, flex: 1, backgroundColor: 'white' }}
          stepStyle={{ backgroundColor: theme.primaryColor, }}
        />
      </View>
    )
}