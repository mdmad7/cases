import React from 'react'
import { Formik } from 'formik'

import { Link } from 'react-router-dom'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Button } from 'baseui/button'

import * as Yup from 'yup'
import { AuthFormWrapper } from '../../styles/styled'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email provided')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too short')
    .max(25, 'Too Long')
    .required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .test('passwords-match', 'Passwords must match', function(value) {
      return this.parent.password === value
    })
    .required('Required'),
  msisdn: Yup.string().required('Required')
})

const SignupForm = () => {
  return (
    <Formik
      validationSchema={SignupSchema}
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
        <AuthFormWrapper>
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
                label='First name'
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
                label='Last name'
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
                label='Email'
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
                label='Phone number'
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
            <FlexGridItem>
              <FormControl
                error={errors.password && touched.password && errors.password}
                label='Password'
              >
                <Input
                  placeholder='Enter password'
                  error={errors.password && touched.password}
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </FormControl>
            </FlexGridItem>
            <FlexGridItem>
              <FormControl
                error={
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword
                }
                label='Confirm password'
              >
                <Input
                  placeholder='Enter password'
                  error={errors.confirmPassword && touched.confirmPassword}
                  type='password'
                  name='confirmPassword'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
              </FormControl>
            </FlexGridItem>
          </FlexGrid>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}
          >
            <Link to='/auth/login'>Already have account? Log in</Link>
          </div>
          <Button
            type='submit'
            style={{ display: 'block', width: '100%' }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </AuthFormWrapper>
      )}
    </Formik>
  )
}

export default SignupForm
