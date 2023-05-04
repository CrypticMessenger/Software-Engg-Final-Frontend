import {React} from 'react'
import { useNavigate } from 'react-router-dom'; 
import AuthForm from '../common/AuthForm'
import { DJANGO_API_URL } from '../../constants/urls';
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**
 * Register page component
 * @returns {JSX.Element} Register page
 * @example
 *
 *  <Register />
 * 
 */

export default function Register() {
  const navigate = useNavigate();
  const onSubmit = async(e) => {
    e.preventDefault()
    console.log('Submitted')

    const email = e.target.Email.value;
    const password = e.target.Password.value;
    const username = e.target.username.value;
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;


    console.log(email,password);

    // send data to backend
    const response = await fetch(DJANGO_API_URL + "user/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password , username, first_name, last_name}),
    });

    // if response is ok, redirect to dashboard
    const data = await response.json();
    console.log("data")
    console.log(data);
    console.log(response.ok);
    if (response.ok) {
      console.log("ok")
      navigate("/login");
      return;
    }
    
      console.log("data2")
      toast("Wow so easy!")
      // toast('Error encountered while registering ' );
    

    // makes a call to the backend to register
    // if successful, redirect to login
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
    isRegister: true,
    onSubmit,
  }
  return (
    <div data-testid="register">
      <AuthForm {...props} />
    </div>
  )
}
