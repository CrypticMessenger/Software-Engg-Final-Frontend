import {render, fireEvent} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Input from '../Input';

test('Input', () => {  
    const {getByTestId} = render(<Input />);
    const input = getByTestId('input-test');
    expect(input).toBeInTheDocument();
});