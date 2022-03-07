import * as yup from 'yup'

export const validationSchema = yup.object({
  firstname: yup.string().required('This field is required'),
  lastname: yup.string().required('This field is required'),
  email: yup.string().email('Invalid email').required('This field is required'),
  DOB: yup.date().required('This field is required'),
  BVN: yup.string().required('This field is required'),
  Means_of_ID: yup.string().required('This field is required'),
  date_issued: yup.date().required('This field is required'),
  ID_number: yup.string().required('This field is required'),
  expiry_date: yup.date().required('This field is required'),
  phone: yup.string().required('This field is required'),
  alt_number: yup.string(),
  marital_status: yup.number().required('This field is required'),
  next_of_kin_surname: yup.string().required('This field is required'),
  next_of_kin_firstname: yup.string().required('This field is required'),
  next_of_kin_relationship: yup.string().required('This field is required'),
  next_of_kin_phone: yup.string().required('This field is required'),
  next_of_kin_address: yup.string().required('This field is required'),
  // ending of form1
  state: yup.string().required('This field is required'),
  landmark: yup.string().required('This field is required'),
  LGA_of_residence: yup.string().required('This field is required'),
  home_address: yup.string().required('This Field is required'),
  //ending of form2
  employment_status: yup.number().required('This field is required'),
  current_employer: yup.string().required('This field is required'),
  current_employer_address: yup.string().required('This field is required'),
  current_employer_landmark: yup.string().required('This  field is required'),
  current_employer_LGA: yup.string().required('This field is required'),
  current_employer_state: yup.string().required('This field is required'),
  current_employer_office_number: yup.string().required('This field is requred'),
  staff_id: yup.string(),
  department: yup.string().required('This field is required'),
  job_title: yup.string().required('This field is required'),
  date_employed: yup.string(),
  previous_employer: yup.string(),
  previous_employer_address: yup.string(),
  jobs_in_past_5_years: yup.number(),
  // ending of form3
  current_paydate: yup.date().required('This field is required'),
  existing_loan: yup.bool().required('This field is required'),
  existing_loan_type: yup.number(),
  loan_amount: yup.number().required('This field is required').max(500000, 'Cannot apply for an amount larger than NGN500000'),
  loan_tenure: yup.number().required('This field is required').max(6, 'Cannot be greater than 6 month'),
  account_number: yup.string().required('This field is required'),
  account_name: yup.string().required('This field is required'),
  bank_name: yup.string().required('This field is required'),
  hear_about_us: yup.string(),
  //ending of form4
})
