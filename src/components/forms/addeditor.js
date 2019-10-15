import React from 'react'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
  EuiForm
} from '@elastic/eui'
import { Formik } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email provided')
    .required('Required')
})

const AddEditor = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
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
        <div>
          <EuiForm>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFormRow
                  fullWidth
                  label='Email'
                  isInvalid={errors.email && touched.email}
                  error={errors.email && touched.email && [`${errors.email}`]}
                >
                  <EuiFieldText
                    placeholder='Enter email'
                    icon='email'
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
              {/* <EuiButton
                color='warning'
                onClick={() => window.alert('Button clicked')}
              >
                Warning
              </EuiButton> */}

              <EuiFlexItem grow={false}>
                <EuiFormRow hasEmptyLabelSpace display='center'>
                  <EuiButton
                    color={errors.email && touched.email ? 'danger' : 'primary'}
                    onClick={handleSubmit}
                  >
                    Add{' '}
                  </EuiButton>
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiForm>
        </div>
      )}
    </Formik>
  )
}

export default AddEditor
