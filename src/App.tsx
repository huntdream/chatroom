import * as React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as router,
  Route,
  Router,
  Switch
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import store from "./redux/store";

import "./App.sass";
import routes from "./routes";

const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="app-container">
            <Switch>
              {routes.map(({ path, name, component: C }) => {
                return (
                  <Route
                    path={path}
                    key={path}
                    render={() => (
                      <React.Suspense fallback={<div>Loading</div>}>
                        <C />
                      </React.Suspense>
                    )}
                  />
                );
              })}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
