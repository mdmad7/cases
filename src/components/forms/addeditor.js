import React from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email provided')
    .required('Required')
})

const InLineForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  & > div {
    margin: 0 !important;
    /* width: 90% !important; */
  }

  button {
    height: 48px;
    margin-left: 14px;
  }
`

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
          <InLineForm>
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
            <Button
              type='submit'
              // style={{ display: 'block', width: '100%' }}
              onClick={handleSubmit}
            >
              Add
            </Button>
          </InLineForm>
        </div>
      )}
    </Formik>
  )
}

export default AddEditor
