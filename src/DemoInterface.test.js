import { render, screen } from '@testing-library/react';
import DemoInterface from './DemoInterface';

test('renders contactme', () => {
  render(<DemoInterface />);
  const contactElement = screen.getByText(/issac@swmmReact.org/i);
  expect(contactElement).toBeInTheDocument();
});
