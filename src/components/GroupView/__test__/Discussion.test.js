import { render } from '@testing-library/react';
import React from 'react';
import Discussion from '../Discussion';

describe('Discussion', () => {
    it('should render', () => {
        const { getByText } = render(<Discussion numComments={5} />);
        expect(getByText('Discussion (5)')).toBeInTheDocument();
    });
});