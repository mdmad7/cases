import React from 'react'
import { Formik } from 'formik'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Button } from 'baseui/button'

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
        firstName: '',
        lastName: '',
        msisdn: ''
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
          <FlexGrid
            flexGridColumnCount={[1, 1, 2, 2]}
            flexGridColumnGap='scale300'
            flexGridRowGap='scale300'
          >
            <FlexGridItem>
              <FormControl
                error={
                  errors.firstName && touched.firstName && errors.firstName
                }
                // label='First name'
              >
                <Input
                  placeholder='Enter first name'
                  error={errors.firstName && touched.firstName}
                  name='firstName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
              </FormControl>
            </FlexGridItem>
            <FlexGridItem>
              <FormControl
                error={errors.lastName && touched.lastName && errors.lastName}
                // label='Last name'
              >
                <Input
                  placeholder='Enter last name'
                  error={errors.lastName && touched.lastName}
                  name='lastName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
              </FormControl>
            </FlexGridItem>

            <FlexGridItem>
              <FormControl
                error={errors.email && touched.email && errors.email}
                // label='Email'
              >
                <Input
                  placeholder='Enter email'
                  error={errors.email && touched.email}
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </FormControl>
            </FlexGridItem>
            <FlexGridItem>
              <FormControl
                error={errors.msisdn && touched.msisdn && errors.msisdn}
                // label='Phone number'
              >
                <Input
                  placeholder='Enter phone number'
                  error={errors.msisdn && touched.msisdn}
                  name='msisdn'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.msisdn}
                />
              </FormControl>
            </FlexGridItem>
          </FlexGrid>
          <Button
            type='submit'
            style={{ display: 'block', width: '100%' }}
            onClick={handleSubmit}
          >
            Update Profile
          </Button>
        </AuthFormWrapper100>
      )}
    </Formik>
  )
}

export default ProfileForm
