import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // set route for /
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId('allRoutes');
  expect(linkElement).toBeInTheDocument();
});
