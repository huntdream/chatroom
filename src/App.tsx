import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as router, Router, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import RouteWrapper from './components/RouteWrapper';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './redux/store';

import './App.sass';
import routes from './routes';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <Navbar />
            <div className="container">
              <div className="container-inner">
                <Switch>
                  {routes.map(({ path, name, exact, component }) => {
                    return (
                      <RouteWrapper
                        path={path}
                        name={name}
                        exact={exact}
                        key={path}
                        component={component}
                      />
                    );
                  })}
                </Switch>
              </div>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
