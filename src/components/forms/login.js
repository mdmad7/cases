import React from 'react'
import { Formik } from 'formik'

import { Link } from 'react-router-dom'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Button } from 'baseui/button'

import * as Yup from 'yup'

import { AuthFormWrapper } from '../../styles/styled'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email provided')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too short')
    .max(25, 'Too Long')
    .required('Required')
})
const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <AuthFormWrapper>
          <FlexGrid
            flexGridColumnCount={1}
            flexGridColumnGap='scale300'
            flexGridRowGap='scale300'
          >
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px'
                }}
              >
                <Link to='/auth/recovery'>Forgotten password?</Link>
                <Link to='/auth/signup'>Create an account</Link>
              </div>
            </FlexGridItem>
            <FlexGridItem>
              <Button
                type='submit'
                style={{ display: 'block', width: '100%' }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </FlexGridItem>
          </FlexGrid>
        </AuthFormWrapper>
      )}
    </Formik>
  )
}

export default LoginForm
