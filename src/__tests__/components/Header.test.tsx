import {Header} from 'components/Header';
import {render} from 'test-utils';
import {theme} from 'theme';

test('Header', () => {
  const {container} = render(<Header />);
  expect(container.firstChild).toHaveStyleRule('background-color', theme.colors.background);
  expect(container.firstChild).toHaveStyleRule('color', theme.colors.backgroundContrast);
});
