import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio home', async () => {
  render(<App />);
  // Check for the "View My Work" button, which is reliably present
  expect(await screen.findByText(/View My Work/i)).toBeInTheDocument();
});