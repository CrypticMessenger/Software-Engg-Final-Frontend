import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import AuthForm from '../AuthForm';

describe('AuthForm', () => {
  const props = {
    title: 'Title',
    buttonText: 'Button',
    onSubmit: jest.fn().mockImplementation(event => {
        event.preventDefault();
      }),
    titleText: 'Title Text',
    secondaryLink: '/login',
    secondaryText: 'Log In',
    alternativeTextPre: 'Alternative text',
    alternativeLink: '/forgot-password',
    alternativeText: 'Forgot Password',
    error: ''
  };

  it('renders correctly', () => {
    const { getByTestId } = render( <Router>
        <AuthForm {...props} />
      </Router>);
    const authForm = getByTestId('authForm');
    const titleAuthForm = getByTestId('titleAuthForm');
    const titleTextAuthForm = getByTestId('titleTextAuthForm');
    const formAuthForm = getByTestId('formAuthForm');

    expect(authForm).toBeInTheDocument();
    expect(titleAuthForm).toBeInTheDocument();
    expect(titleAuthForm).toHaveTextContent(props.title);
    expect(titleTextAuthForm).toBeInTheDocument();
    expect(titleTextAuthForm).toHaveTextContent(props.titleText);
    expect(formAuthForm).toBeInTheDocument();
  });

});
