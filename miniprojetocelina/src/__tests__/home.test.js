import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders the Home component', () => {
  render(<Home />);
  const textElement = screen.getByText(/Hello, World!/i);
  expect(textElement).toBeInTheDocument();
});

