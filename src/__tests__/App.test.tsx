import App from 'App';
import {render, screen} from 'test-utils';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/omnipresent frontend challenge/i);
  expect(linkElement).toBeInTheDocument();
});
