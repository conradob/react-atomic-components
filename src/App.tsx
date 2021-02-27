import {Layout} from 'components/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Issues} from 'screens/issues';
import {Main} from 'screens/main';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" children={<Main />} />
          <Route path="/:owner/:repo/issues" children={<Issues />} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
