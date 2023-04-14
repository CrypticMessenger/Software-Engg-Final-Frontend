import React from 'react'
import AuthForm from '../common/AuthForm'

export default function Register() {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted')
  }
  const props = {
    title: 'Register',
    buttonText: 'Register',
    titleText: 'Create an account',

    secondaryLink: '/forgot-password',
    secondaryText: 'Forgot password?',

    alternativeTextPre: 'Or',
    alternativeLink: '/login',
    alternativeText: 'Already have an account?',
    onSubmit,
  }
  return (
    <div>
      <AuthForm {...props} />

    </div>
  )
}
