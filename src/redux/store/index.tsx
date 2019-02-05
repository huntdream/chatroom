import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

import reducers from '../reducers';
import rootSagas from '../sagas';

export const history = createBrowserHistory();

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers(history),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSagas);

export default store;
