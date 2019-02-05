import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import articles from './article';

export default (history: any) =>
  combineReducers({ user, articles, router: connectRouter(history) });
