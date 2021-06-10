import { FunctionComponent } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import { Feed, Post } from './components';
import './App.scss';

const App:FunctionComponent = () => {

  const greetingMessage = 'Hello from';

  return (
    <div>
      <Router>
        <div className="header">
          <div className="header__title-wrapper">
            <Link to={'/posts'}><h1 className="header__title">JSONPlaceholder blog</h1></Link>
          </div>
        </div>
        <Route
          path='/posts'
          component={() => <Feed greetingMessage={greetingMessage} />}
          exact
        />
        <Route path='/post/:id' exact component={() => <Post greetingMessage={greetingMessage} />} />
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route >
      </Router>
    </div>
  );
}

export default App;
