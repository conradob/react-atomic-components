import {Layout} from 'components/Layout';
import {render} from 'test-utils';

test('Layout', () => {
  const {container} = render(<Layout />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      text-align: left;
    }

    <div
      class="c0"
    />
  `);
});
