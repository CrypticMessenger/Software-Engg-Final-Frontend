import {React} from 'react'
import { useNavigate } from 'react-router-dom'; 
import AuthForm from '../common/AuthForm'


export default function Register() {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted')
    // makes a call to the backend to register
    // if successful, redirect to login
    navigate('/login')
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
    <div data-testid="register">
      <AuthForm {...props} />
    </div>
  )
}
