import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login';
import { UserContext } from '../../Providers/userProvider';
import React, { createContext } from 'react';



describe('Login component', () => {
    const myContext = createContext({
        handleLogin: jest.fn(),
    });
    it('renders correctly', () => {
        const { getByTestId } = render(<BrowserRouter><UserContext.Provider value={myContext}><Login /></UserContext.Provider></BrowserRouter>)
        const register = getByTestId('Login')
        expect(register).toBeInTheDocument()
    });
});
