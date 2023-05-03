import { render, fireEvent } from '@testing-library/react'
import Register from '../Register'
import { BrowserRouter } from 'react-router-dom';


describe('Register component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<BrowserRouter><Register /></BrowserRouter>)
        const register = getByTestId('register')
        expect(register).toBeInTheDocument()
    })
    
})
