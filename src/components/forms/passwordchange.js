import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import {
  EuiFieldPassword,
  EuiForm,
  EuiFormRow,
  EuiButton,
  EuiSpacer
} from '@elastic/eui'
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
          <EuiForm>
            <EuiFormRow
              fullWidth
              label='Current password'
              isInvalid={errors.currentPassword && touched.currentPassword}
              error={
                errors.currentPassword &&
                touched.currentPassword && [`${errors.currentPassword}`]
              }
            >
              <EuiFieldPassword
                placeholder='Enter current password'
                fullWidth
                isInvalid={errors.currentPassword && touched.currentPassword}
                type='password'
                name='currentPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.currentPassword}
              />
            </EuiFormRow>

            <EuiFormRow
              fullWidth
              label='New password'
              isInvalid={errors.newPassword && touched.newPassword}
              error={
                errors.newPassword &&
                touched.newPassword && [`${errors.newPassword}`]
              }
            >
              <EuiFieldPassword
                placeholder='Enter new password'
                fullWidth
                isInvalid={errors.newPassword && touched.newPassword}
                type='password'
                name='newPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword}
              />
            </EuiFormRow>

            <EuiSpacer />

            <EuiButton
              fill
              style={{ display: 'block', width: '100%' }}
              onClick={handleSubmit}
            >
              Change password
            </EuiButton>
          </EuiForm>
        </NewAuthFormWrapper>
      )}
    </Formik>
  )
}

export default PasswordChangeForm
