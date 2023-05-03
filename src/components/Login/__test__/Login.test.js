import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login';


describe('Login component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<BrowserRouter><Login /></BrowserRouter>)
        const register = getByTestId('Login')
        expect(register).toBeInTheDocument()
    })    
})
