import { all } from 'redux-saga/effects';
import * as article from './article';

export default function* rootSagas() {
  yield all([article.getArticleList({ type: 'GET_ARTICLE_LIST' })]);
}
