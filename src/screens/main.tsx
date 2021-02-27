import {Header} from 'components/Header';
import {Link} from 'react-router-dom';

export const Main = () => {
  return (
    <div>
      <Header>
        <p>Omnipresent Frontend Challenge</p>
        <Link to="/facebook/react/issues">React issues</Link>
      </Header>
    </div>
  );
};
