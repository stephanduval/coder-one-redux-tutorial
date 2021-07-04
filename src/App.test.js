import { render, screen } from '@testing-library/react';
import App from '../../coder-one-redux-hooks-2/src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
