import React from 'react'
import { Formik } from 'formik'

import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { Button } from 'baseui/button'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import { AuthFormWrapper } from '../../styles/styled'

const RecoverySchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email provided')
    .required('Required')
})
const RecoveryForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={RecoverySchema}
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px'
                }}
              >
                <Link to='/auth/login'>Remember password? Login</Link>
                <Link to='/auth/signup'>Create an account</Link>
              </div>
            </FlexGridItem>
            <FlexGridItem>
              <Button
                type='submit'
                style={{ display: 'block', width: '100%' }}
                onClick={handleSubmit}
              >
                Send reset link
              </Button>
            </FlexGridItem>
          </FlexGrid>
        </AuthFormWrapper>
      )}
    </Formik>
  )
}

export default RecoveryForm
