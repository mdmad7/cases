import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Button } from 'baseui/button'
import * as Yup from 'yup'

import { AuthFormWrapper } from '../../styles/styled'

const NewAuthFormWrapper = styled(AuthFormWrapper)`
  width: 100%;
`

const PasswordChangeSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, 'Too short')
    .max(25, 'Too Long')
    .required('Required'),
  newPassword: Yup.string()
    .min(6, 'Too short')
    .max(25, 'Too Long')
    .test(
      'passwords-match',
      'New password must not match current one',
      function(value) {
        return this.parent.currentPassword !== value
      }
    )
    .required('Required')
})
const PasswordChangeForm = ({ email, resetToken }) => {
  return (
    <Formik
      initialValues={{ newPassword: '', currentPassword: '' }}
      validationSchema={PasswordChangeSchema}
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
        handleSubmit
      }) => (
        <NewAuthFormWrapper>
          <FlexGrid
            flexGridColumnCount={1}
            flexGridColumnGap='scale300'
            flexGridRowGap='scale300'
          >
            <FlexGridItem>
              <FormControl
                error={
                  errors.currentPassword &&
                  touched.currentPassword &&
                  errors.currentPassword
                }
                // label='Current Password'
              >
                <Input
                  placeholder='Enter current password'
                  error={errors.currentPassword && touched.currentPassword}
                  type='password'
                  name='currentPassword'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentPassword}
                />
              </FormControl>
            </FlexGridItem>
            <FlexGridItem>
              <FormControl
                error={
                  errors.newPassword &&
                  touched.newPassword &&
                  errors.newPassword
                }
                // label='New password'
              >
                <Input
                  placeholder='Enter new password'
                  error={errors.newPassword && touched.newPassword}
                  type='password'
                  name='newPassword'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                />
              </FormControl>
            </FlexGridItem>

            <FlexGridItem>
              <Button
                type='submit'
                style={{ display: 'block', width: '100%' }}
                onClick={handleSubmit}
              >
                Change password
              </Button>
            </FlexGridItem>
          </FlexGrid>
        </NewAuthFormWrapper>
      )}
    </Formik>
  )
}

export default PasswordChangeForm
