import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';
import rootSagas from '../sagas';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSagas);

export default store;
