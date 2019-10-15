import React from 'react'
import { Formik } from 'formik'

import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Button } from 'baseui/button'
import * as Yup from 'yup'

import { AuthFormWrapper } from '../../styles/styled'

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email provided')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too short')
    .max(25, 'Too Long')
    .required('Required'),
  resetToken: Yup.string().required('No reset token provided'),
  confirmPassword: Yup.string()
    .test('passwords-match', 'Passwords must match', function(value) {
      return this.parent.password === value
    })
    .required('Required')
})
const ResetPasswordForm = ({ email, resetToken }) => {
  return (
    <Formik
      initialValues={{ email, password: '', confirmPassword: '', resetToken }}
      validationSchema={ResetPasswordSchema}
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
        isSubmitting
        /* and other goodies */
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
                  disabled
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
            <FlexGridItem>
              <Button
                type='submit'
                style={{ display: 'block', width: '100%' }}
                onClick={handleSubmit}
              >
                Reset password
              </Button>
            </FlexGridItem>
          </FlexGrid>
        </AuthFormWrapper>
      )}
    </Formik>
  )
}

export default ResetPasswordForm
