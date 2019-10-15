import React from 'react'
import { Formik } from 'formik'
import {
  EuiFieldText,
  EuiFilePicker,
  EuiForm,
  EuiFormRow,
  EuiButton,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem
} from '@elastic/eui'

import * as Yup from 'yup'
import styled from 'styled-components'

const ProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email provided')
    .required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  msisdn: Yup.string().required('Required')
})

const AuthFormWrapper100 = styled.div`
  width: 100%;
`

const ProfileForm = () => {
  return (
    <Formik
      validationSchema={ProfileSchema}
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: '',
        msisdn: '',
        countryCode: undefined
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
        /* and other goodies */
      }) => (
        <AuthFormWrapper100>
          <EuiForm>
            <EuiFormRow
              fullWidth
              label='Profile picture'
              isInvalid={errors.profile && touched.profile}
              error={errors.profile && touched.profile && [`${errors.profile}`]}
            >
              <EuiFilePicker
                id='profile'
                initialPromptText='Select or drag and drop profile image here'
                onChange={files => {
                  console.log(files)
                }}
                display='large'
              />
            </EuiFormRow>
            <EuiFlexGroup gutterSize='s' style={{ margin: '7px 0' }}>
              <EuiFlexItem>
                <EuiFormRow
                  fullWidth
                  label='First name'
                  isInvalid={errors.firstName && touched.firstName}
                  error={
                    errors.firstName &&
                    touched.firstName && [`${errors.firstName}`]
                  }
                >
                  <EuiFieldText
                    placeholder='Enter first name'
                    fullWidth
                    isInvalid={errors.firstName && touched.firstName}
                    name='firstName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow
                  fullWidth
                  label='Last name'
                  isInvalid={errors.lastName && touched.lastName}
                  error={
                    errors.lastName &&
                    touched.lastName && [`${errors.lastName}`]
                  }
                >
                  <EuiFieldText
                    placeholder='Enter last name'
                    fullWidth
                    isInvalid={errors.lastName && touched.lastName}
                    name='lastName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup gutterSize='s' style={{ margin: '7px 0' }}>
              <EuiFlexItem>
                <EuiFormRow
                  fullWidth
                  label='Email'
                  isInvalid={errors.email && touched.email}
                  error={errors.email && touched.email && [`${errors.email}`]}
                >
                  <EuiFieldText
                    placeholder='Enter email'
                    disabled
                    fullWidth
                    isInvalid={errors.email && touched.email}
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow
                  fullWidth
                  label='Phone number'
                  isInvalid={errors.msisdn && touched.msisdn}
                  error={
                    errors.msisdn && touched.msisdn && [`${errors.msisdn}`]
                  }
                >
                  <EuiFieldText
                    placeholder='Enter phone number'
                    fullWidth
                    isInvalid={errors.msisdn && touched.msisdn}
                    name='msisdn'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.msisdn}
                  />
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer />

            <EuiButton
              type='submit'
              fill
              style={{ display: 'block', width: '100%' }}
              onClick={handleSubmit}
            >
              Update Profile
            </EuiButton>
          </EuiForm>
        </AuthFormWrapper100>
      )}
    </Formik>
  )
}

export default ProfileForm
