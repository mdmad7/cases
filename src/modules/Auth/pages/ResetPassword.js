import React from 'react'
import qs from 'query-string'
import { Centered } from '../../../styles/styled'
import ResetPasswordForm from '../../../components/forms/resetpasswordform'

const ResetPassword = props => {
  let resetToken = props.match.params.resetToken
  let email = qs.parse(props.location.search).email
  return (
    <Centered>
      <ResetPasswordForm email={email} resetToken={resetToken} />
    </Centered>
  )
}

export default ResetPassword
