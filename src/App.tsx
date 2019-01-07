import * as React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as router,
  Route,
  Router,
  Switch
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

import store from "./redux/store";

import "./App.sass";
import routes from "./routes";

const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="app">
            <Navbar />
            <div className="container">
              <div className="container-inner">
                <Switch>
                  {routes.map(({ path, name, exact, component: View }) => {
                    return (
                      <Route
                        path={path}
                        key={path}
                        exact={exact}
                        render={() => (
                          <React.Suspense fallback={<Loading />}>
                            <View />
                          </React.Suspense>
                        )}
                      />
                    );
                  })}
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
