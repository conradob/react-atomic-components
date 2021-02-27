import {Header} from 'components/Header';
import {Layout} from 'components/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Issues} from 'screens/issues';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header>
              <p>Omnipresent Frontend Challenge</p>
            </Header>
          </Route>
          <Route path="/:owner/:repo/issues" children={<Issues />} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
