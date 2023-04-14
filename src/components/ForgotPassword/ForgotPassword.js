import React from 'react'
import AuthForm from '../common/AuthForm'

const ForgotPassword = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted')
    }
    const props = {
        title: 'Forgot Password',
        buttonText: 'Reset Password',
        titleText: 'Reset your password',
        onSubmit,
    }

  return (
    <div>
        <AuthForm {...props} />
    </div>
  )
}

export default ForgotPassword