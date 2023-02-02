import { render, screen } from '@testing-library/react';
import App from './App';
import AppCounter from './AppCounter';

test('renders learn react link', () => {
  render(<AppCounter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
